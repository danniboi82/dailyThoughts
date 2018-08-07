require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const thoughtRoutes = require('./routes/thought');
const PORT = process.env.PORT || 8282;
const {
    ensureCorrectUser,
    loginRequired
} = require('./middleware/auth');
app.use(cors());

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/user/:id/thoughts', loginRequired, ensureCorrectUser, thoughtRoutes);
//error function to run IF NONE of routes above don't work 
app.use(function (req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
})

//route to get all messages or products to show users when logged in 
app.get("/api/thoughts", loginRequired, async function (req, res, next) {
    try {
        let thoughts = await db.Thought.find().sort({
            createdAt: "desc"
        }).populate("user", {
            username: true,
            profileImageUrl: true
        });
        return res.status(200).json(thoughts)
    } catch (err) {
        return next(err)
    }
})

//takes the error from any incoming middleware and changes it to nice json format
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING on ${PORT}`)
})