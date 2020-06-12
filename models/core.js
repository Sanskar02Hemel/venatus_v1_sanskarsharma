const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coreSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    post: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Core', coreSchema);