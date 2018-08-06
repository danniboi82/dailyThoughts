const db = require('../models');
const jwt = require('jsonwebtoken');


exports.signup = function (req, res, next) {
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
        if(err.code === 11000){
            err.message = 'Sorry, that username and/or email is already taken'
        }
        return next ({
            status : 400, 
            message : err.message
        })
        //see what kind of error 
        //if it is a cretain error 
        //respond with username/email already taken
        //otherwise just send back a generic 400
    }
}

exports.signin = function (req, res, next) {

}