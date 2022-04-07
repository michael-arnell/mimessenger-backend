const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema({
    created: { type: Date, default: Date.now() },
    active: { type: Boolean, default: true }
});

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;