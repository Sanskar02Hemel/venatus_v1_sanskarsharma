const Gallerys = require('../models/gallery');

exports.getgallerys = (req, res, next) => {
    Gallerys.find()
        .then((gallerys) => {
            res.render('gallery', {
                gallerys: gallerys,
                pageTitle: 'Gallery',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
