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
    year: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    placement: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    post: {
        type: String,
        required: true,
    },
    fb: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Founder', founderSchema);