const User = require('../models/userModel');

const getUserById = function(req, res) {
    User.findById(req.params.id)
    .exec(function(err, user) {
        if (err) {
          return next(err);
        }
        res.send(user);
      });
};

module.exports = getUserById;