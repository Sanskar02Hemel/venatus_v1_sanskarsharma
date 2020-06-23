const Core = require("../models/core");

exports.getcores = (req, res, next) => {
    Core.find()
        .sort({ name: +1 })
        .then((cores) => {
            res.render('members/cores', {
                cores: cores,
                pageTitle: 'Core Members',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
