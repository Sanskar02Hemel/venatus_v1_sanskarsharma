const Futureevent = require("../models/futureEvent");

exports.getEvents = (req, res, next) => {
    Futureevent.find()
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
