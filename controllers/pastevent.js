const Pastevent = require("../models/pastEvent");

exports.getEvents = (req, res, next) => {
    Pastevent.find()
        .then((events) => {
            res.render('events/past', {
                events: events,
                pageTitle: 'Past Events',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

