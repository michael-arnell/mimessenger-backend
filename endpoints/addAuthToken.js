const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const secret = "asdf;lkjasdf;lkj";

const addAuthToken = function (req, res) {
    const { email, password } = req.body;
    console.log(req.body)
    // res.setHeader("Access-Control-Allow-Origin",  "http://localhost:3000");
    User.findOne({ email }, function (err, user) {
        if (err) {
            console.error(err);
            res.status(500).json({
                error: "Internal error please try again",
            });
        } else if (!user) {
            res.status(401).json({
                error: "Incorrect email or password",
            });
        } else {
            user.checkPassword(password, function (err, same) {
                if (err) {
                    res.status(500).json({
                        error: "Internal error please try again",
                    });
                } else if (!same) {
                    res.status(401).json({
                        error: "Incorrect email or password",
                    });
                } else {
                    // Issue token
                    const payload = { email };
                    const token = jwt.sign(payload, secret, {
                        expiresIn: "1h",
                    });
                    res.cookie("token", token, { httpOnly: true }).status(200).send(token);
                }
            });
        }
    });
};

module.exports = addAuthToken;
