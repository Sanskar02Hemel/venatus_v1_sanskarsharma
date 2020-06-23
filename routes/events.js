const express = require('express');
const router = express.Router();
const pastController = require('../controllers/pastevent');
const futureController = require('../controllers/futureevent');
const vidaaiController = require('../controllers/vidaai');

router.get('/pastevents', pastController.getEvents);

router.get('/futureevents', futureController.getEvents);

router.get('/vidaais', vidaaiController.getvidaais);

module.exports = router;