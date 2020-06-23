const Fourthyrs = require("../models/fourth");

exports.getfourthyrs = (req, res, next) => {
    Fourthyrs.find()
        .sort({ name: +1 })
        .then((fourthyrs) => {
            res.render('members/fourthyrs', {
                fourthyrs: fourthyrs,
                pageTitle: 'Fourth Year',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
