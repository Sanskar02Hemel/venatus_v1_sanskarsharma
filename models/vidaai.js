const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vidaaiSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    por: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    fb: {
        type: String,
        required: true
    },
    readmore: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Vidaais", vidaaiSchema);