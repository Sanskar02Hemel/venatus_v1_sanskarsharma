const Thirdyrs = require("../models/third");

exports.getthirdyrs = (req, res, next) => {
    Thirdyrs.find()
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
