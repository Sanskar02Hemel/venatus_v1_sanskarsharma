const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const founderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    fb: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Founder', founderSchema);