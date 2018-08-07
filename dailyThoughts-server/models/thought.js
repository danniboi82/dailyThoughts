const mongoose = require('mongoose');
const User = require('./user');
const thoughtSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxLength: 180
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})


thoughtSchema.pre('remove', async function (next) {
    try {
        //find user 
        let user = await db.User.findById(this.user);
        //remove id of message from User's messages list
        user.thoughts.remove(this.id);
        //save that user 
        await user.save()
        return next();
    } catch (error) {
        return next(error)
    }
})

const Thought = mongoose.model('Thought', thoughtSchema);



module.exports = Thought;