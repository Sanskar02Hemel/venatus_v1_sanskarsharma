const Thirdyrs = require("../models/third");

exports.getthirdyrs = (req, res, next) => {
    Thirdyrs.find()
        .sort({ name: +1 })
        .then((thirdyrs) => {
            res.render('members/thirdyrs', {
                thirdyrs: thirdyrs,
                pageTitle: 'Third Year',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
