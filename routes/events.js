const express = require('express');
const router = express.Router();
const pastController = require('../controllers/pastevent');
const futureController = require('../controllers/futureevent');
const vidaaiController = require('../controllers/vidaai');

router.get('/pastevents', pastController.getEvents);

router.get('/futureevents', futureController.getEvents);

router.get('/vidaais', vidaaiController.getvidaais);

router.get("/pastevents/juego19", function (req, res) {
    res.render("events/events_past/juego19");
});

router.get("/pastevents/alfresco19", function (req, res) {
    res.render("events/events_past/alfresco19");
});

router.get("/pastevents/matdaan19", function (req, res) {
    res.render("events/events_past/matdaan19");
});

router.get("/pastevents/juegoSIG20", function (req, res) {
    res.render("events/events_past/juegoSIG20");
});

router.get("/pastevents/alfrescoSIG20", function (req, res) {
    res.render("events/events_past/alfrescoSIG20");
});

router.get("/pastevents/inno19", function (req, res) {
    res.render("events/events_past/inno19");
});

router.get("/pastevents/gcl", function (req, res) {
    res.render("events/events_past/gcl");
});

router.get("/vidaais/aditya", function (req, res) {
    res.render("events/vidaai_seniors/aditya");
});

router.get("/vidaais/arshia", function (req, res) {
    res.render("events/vidaai_seniors/arshia");
});

router.get("/vidaais/ashir", function (req, res) {
    res.render("events/vidaai_seniors/ashir");
});

router.get("/vidaais/hritik", function (req, res) {
    res.render("events/vidaai_seniors/hritik");
});

router.get("/vidaais/kundan", function (req, res) {
    res.render("events/vidaai_seniors/kundan");
});

router.get("/vidaais/mitali", function (req, res) {
    res.render("events/vidaai_seniors/mitali");
});

router.get("/vidaais/prajjwal", function (req, res) {
    res.render("events/vidaai_seniors/prajjwal");
});

router.get("/vidaais/priyansh", function (req, res) {
    res.render("events/vidaai_seniors/priyansh");
});

router.get("/vidaais/saksham", function (req, res) {
    res.render("events/vidaai_seniors/saksham");
});

router.get("/vidaais/siddhant", function (req, res) {
    res.render("events/vidaai_seniors/siddhant");
});

router.get("/vidaais/utsha", function (req, res) {
    res.render("events/vidaai_seniors/utsha");
});

router.get("/vidaais/uttkarsh", function (req, res) {
    res.render("events/vidaai_seniors/uttkarsh");
});
router.get("/vidaais/hari", function (req, res) {
    res.render("events/vidaai_seniors/hari");
});
router.get("/vidaais/swatantra", function (req, res) {
    res.render("events/vidaai_seniors/swatantra");
});
router.get("/vidaais/stalin", function (req, res) {
    res.render("events/vidaai_seniors/stalin");
});



module.exports = router;