const express = require('express');
const router = express.Router();
const pastController = require('../controllers/pastevent');
const futureController = require('../controllers/futureevent');
const vidaaiController = require('../controllers/vidaai');

router.get('/pastevents', pastController.getEvents);

router.get('/futureevents', futureController.getEvents);

router.get('/vidaais', vidaaiController.getvidaais);

router.get("/pastevents/juego19", function (req, res) {
    res.render("events/juego19");
});

router.get("/pastevents/alfresco19", function (req, res) {
    res.render("events/alfresco19");
});

router.get("/pastevents/matdaan19", function (req, res) {
    res.render("events/matdaan19");
});

router.get("/pastevents/juegoSIG20", function (req, res) {
    res.render("events/juegoSIG20");
});

router.get("/pastevents/alfrescoSIG20", function (req, res) {
    res.render("events/alfrescoSIG20");
});

router.get("/pastevents/inno19", function (req, res) {
    res.render("events/inno19");
});

router.get("/pastevents/gcl", function (req, res) {
    res.render("events/gcl");
});

router.get("/vidaais/aditya", function (req, res) {
    res.render("events/aditya");
});

router.get("/vidaais/arshia", function (req, res) {
    res.render("events/arshia");
});

router.get("/vidaais/ashir", function (req, res) {
    res.render("events/ashir");
});

router.get("/vidaais/hritik", function (req, res) {
    res.render("events/hritik");
});

router.get("/vidaais/kundan", function (req, res) {
    res.render("events/kundan");
});

router.get("/vidaais/mitali", function (req, res) {
    res.render("events/mitali");
});

router.get("/vidaais/prajjwal", function (req, res) {
    res.render("events/prajjwal");
});

router.get("/vidaais/priyansh", function (req, res) {
    res.render("events/priyansh");
});

router.get("/vidaais/saksham", function (req, res) {
    res.render("events/saksham");
});

router.get("/vidaais/siddhant", function (req, res) {
    res.render("events/siddhant");
});

router.get("/vidaais/utsha", function (req, res) {
    res.render("events/utsha");
});

router.get("/vidaais/uttkarsh", function (req, res) {
    res.render("events/uttkarsh");
});



module.exports = router;