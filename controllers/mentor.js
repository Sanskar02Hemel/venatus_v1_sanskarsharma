const Mentor = require("../models/mentor");

exports.getmentors = (req, res, next) => {
    Mentor.find()
        .sort({ name: +1 })
        .then((mentors) => {
            res.render('members/ex-directors', {
                mentors: mentors,
                pageTitle: 'Mentors',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
