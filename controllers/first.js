const Firstyrs = require("../models/first");

exports.getfirstyrs = (req, res, next) => {
    Firstyrs.find()
        .sort({ name: +1 })
        .then((firstyrs) => {
            res.render('members/firstyrs', {
                firstyrs: firstyrs,
                pageTitle: 'First Year',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
