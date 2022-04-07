const mongoose = require("mongoose");

const convoMemberSchema = mongoose.Schema({
    user: { type: String, required: true },
    conversation: { type: String, required: true },
    created: { type: Date, default: Date.now() },
});

const ConvoMember = mongoose.model("ConvoMember", convoMemberSchema);
module.exports = ConvoMember;
