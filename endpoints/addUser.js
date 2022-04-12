const User = require("../models/userModel");

const addUser = function (req, res) {
    console.log(req);
    let user = User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });
    user.save(function (err, user, numRows) {
        if (err) {
            res.status(400);
            res.send(err);
            return err;
        }
        res.status(200);
        res.send("User added");
    });
};

module.exports = addUser;
