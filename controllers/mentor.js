const Mentor = require("../models/mentor");

exports.getmentors = (req, res, next) => {
    Mentor.find()
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
