const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const secondyrSchema = new Schema ({
    name: {
        type: String,
        required: true
    }, 
    img: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    linkedIn: {
        type: String,
        required: true
    },
    achievement: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Secondyrs", secondyrSchema);