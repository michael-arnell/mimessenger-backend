const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const validator = require('validator');
const SALT_FACTOR = 10;

const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true, validate: (value) => {
        return validator.isEmail(value)
    }},
    password: {type: String, required: true},
    created: {type: Date, default: Date.now},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    active: { type: Boolean, default: true }
});

userSchema.methods.fullName = function() {
    return this.firstName + this.lastName;
}

userSchema.methods.checkPassword = function(guess, done) {
    bcrypt.compare(guess, this.password, function(err, isMatch) {
        done(err, isMatch);
    });
};

const noop = function() {};

userSchema.pre('save', function(done) {
    const user = this;
    if (!user.isModified('password')) {
        return done();
    }
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
        if (err) {
            return done(err);
        }
        bcrypt.hash(user.password, salt, noop, function(err, hashedPassword) {
            if (err) {return done(err);}
            user.password = hashedPassword;
            done();
        });
    });
});

const User = mongoose.model("User", userSchema);
module.exports = User;