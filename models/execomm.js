const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const execommSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Execomm', execommSchema);