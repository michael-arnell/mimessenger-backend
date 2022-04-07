const User = require('../models/userModel');

const getUsers = function(req, res) {
    User.find()
    .sort({
      created: "descending"
    })
    .exec(function(err, users) {
      if (err) {
        return next(err);
      }
      res.send(users);
    });
};

module.exports = getUsers;