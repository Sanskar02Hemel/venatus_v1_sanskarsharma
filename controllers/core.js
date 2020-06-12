const Core = require("../models/core");

exports.getcores = (req, res, next) => {
    Core.find()
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
