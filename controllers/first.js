const Firstyrs = require("../models/first");

exports.getfirstyrs = (req, res, next) => {
    Firstyrs.find()
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
