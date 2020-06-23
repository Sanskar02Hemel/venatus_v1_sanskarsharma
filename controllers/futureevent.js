const Futureevents = require("../models/futureEvent");

exports.getEvents = (req, res, next) => {
    Futureevents.find()
        .sort({ name: +1 })
        .then((events) => {
            res.render('events/future', {
                events: events,
                pageTitle: 'Future Events',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
