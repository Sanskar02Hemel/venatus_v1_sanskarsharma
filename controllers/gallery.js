const Gallery = require('../models/gallery');

exports.getImages = (req, res, next) => {
    Gallery.find()
        .then((images) => {
            res.render('gallery', {
                images: images,
                pageTitle: 'Gallery',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
