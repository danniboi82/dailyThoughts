const express = require('express');

const router = express.Router({
    mergeParams: true //{mergeParams : allows us access to id within the params}

}); 

const {
    createThought,
    deleteThought,
    getThought
} = require('../handlers/thoughts');


//below routes prefixed with /api/user/:id/messages
router.route('/').post(createThought);
router.route('/:message_id').get(getThought).delete(deleteThought);

module.exports = router;