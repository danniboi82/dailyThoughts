require("dotenv").load();
const jwt = require("jsonwebtoken");

exports.loginRequired = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (decoded) {
                next()
            } else {
                return next({
                    status: 401,
                    message: "Please Login First"
                });
            }
        })
    } catch (err) {
        return next({
            status: 401,
            message: "Please Login First"
        });
    }
}


exports.ensureCorrectUser = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (decoded && decoded.id === req.params.id) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "UNAUTHORIZED"
                });
            }
        })
    } catch (err) {
        return next({
            status: 401,
            message: "UNAUTHORIZED"
        });

    }
}