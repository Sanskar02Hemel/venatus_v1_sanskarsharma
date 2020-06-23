const Founder = require("../models/founder");

exports.getfounders = (req, res, next) => {
    Founder.find()
        .sort({ name: +1 })
        .then((founders) => {
            res.render('members/founders', {
                founders: founders,
                pageTitle: 'Founders',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
