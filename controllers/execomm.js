const Execomm = require("../models/execomm");

exports.getexecomms = (req, res, next) => {
    Execomm.find()
        .sort({ name: +1 })
        .then((execomms) => {
            res.render('members/execomms', {
                execomms: execomms,
                pageTitle: 'Executive Comittee',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
