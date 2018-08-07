const db = require('../models');
const jwt = require('jsonwebtoken');


exports.signup = async function (req, res, next) {
    try {
        //create user
        let user = await db.User.create(req.body);
        //create token (signing token)
        let {
            id,
            username,
            profileImageUrl
        } = user;
        let token = jwt.sign({
            username,
            id,
            profileImageUrl
        }, process.env.SECRET_KEY);
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        });
        //process.env.SECRET_KEY
    } catch (err) {
        //if validation fails
        if (err.code === 11000) {
            err.message = 'Sorry, that username and/or email is already taken'
        }
        return next({
            status: 400,
            message: err.message
        })
        //see what kind of error 
        //if it is a cretain error 
        //respond with username/email already taken
        //otherwise just send back a generic 400
    }
}

exports.signin = async function (req, res, next) {
    try {
        //find user by email 
        let user = await db.User.findOne({
            email: req.body.email,
        });
        //destructure props from user object found from User db
        let {
            id,
            username,
            profileImageUrl
        } = user;
        //if passwords match 
        let isMatch = await user.comparePassword(req.body.password);
        //if all matches 
        if (isMatch) {
            let token = jwt.sign({
                id,
                username,
                profileImageUrl
            }, process.env.SECRET_KEY);
            return res.status(200).json({
                id,
                username,
                profileImageUrl,
                token
            })
        } else {
            return next({
                status: 400,
                message: "Invalid Email/Password"
            })
        }
        /// log them in 
    } catch (error) {
        return next({
            status: 400,
            message: "Invalid Email/Password"
        })
    }
}