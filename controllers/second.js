const Secondyrs = require("../models/second");

exports.getsecondyrs = (req, res, next) => {
    Secondyrs.find()
        .sort({ name: +1 })
        .then((secondyrs) => {
            res.render('members/secondyrs', {
                secondyrs: secondyrs,
                pageTitle: 'Second Year',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
