const db = require("../models");

exports.createThought = async function (req, res, next) {
    try {
        let thought = await db.Thought.create({
            text: req.body.text,
            user: req.params.id
        });
        let foundUser = await db.User.findById(req.params.id);
        foundUser.thoughts.push(thought.id);
        await foundUser.save();
        let foundThought = await db.Thought.findById(thought._id).populate('user', {
            username: true,
            profileImageUrl: true,
        });
        return res.status(200).json(foundThought);

    } catch (error) {
        return next(error);
    }
};
exports.getThought = async function (req, res, next) {
    try {
        let thought = await db.Thought.find(req.params.thought_id);
        return res.status(200).json(thought)
    } catch (err) {
        next(err)
    }
};
exports.deleteThought = async function (req, res, next) {
    try {
        let foundThought = await db.Thought.findById(req.params.thought_id);
        await foundThought.remove()
    } catch (err) {
        return next(err);
    }
};

//edit thought