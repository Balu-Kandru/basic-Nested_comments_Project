const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const signupModal = mongoose.model("usersignup", signupSchema);
module.exports = signupModal;