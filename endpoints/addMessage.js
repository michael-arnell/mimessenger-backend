const Message = require("../models/messageModel");

const addMessage = function (req, res) {
    let message = Message({
        sender: req.body.email,
        conversation: req.body.conversationId,
        content: req.body.content,
    });
    message.save(function (err, message, numRows) {
        if (err) {
            res.status(400);
            res.send(err);
            return err;
        }
        res.status(200);
        res.send(message);
    });
};

module.exports = addMessage;
