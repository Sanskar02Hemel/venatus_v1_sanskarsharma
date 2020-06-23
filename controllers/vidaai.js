const Vidaais= require("../models/vidaai");

exports.getvidaais = (req, res, next) => {
    Vidaais.find()
        .sort({ name: +1 })
        .then((vidaais) => {
            res.render('events/vidaais', {
                vidaais: vidaais,
                pageTitle: 'Future Events',
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
