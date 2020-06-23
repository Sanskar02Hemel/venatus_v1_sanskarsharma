const Pastevent = require('../models/pastEvent');

exports.getEvents = (req, res, next) => {
  Pastevent.find()
    //TO SORT USE THE BELOW CODE -1(or negative value) TO SORT IN DECREASING ORDER, +1(or +ve value) TO SORT IN INCREASING ORDER
    .sort({ name: -1 })
    .then((events) => {
      //SANSKAR NOOBDE CHECK KRLIYA KR IMAGE RETRIEVE HO RHI HAI KI NHI
      console.log(events[0].img);
      res.render('events/past', {
        events: events,
        pageTitle: 'Past Events',
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
