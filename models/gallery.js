const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    img: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Gallerys', gallerySchema);