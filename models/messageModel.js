const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    sender: { type: String, required: true },
    conversation: { type: String, required: true },
    content: { type: String, required: true },
    created: { type: Date, default: Date.now() },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
