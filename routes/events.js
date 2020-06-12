const express = require('express');
const router = express.Router();
const pastController = require('../controllers/pastevent');
const futureController = require('../controllers/futureevent');

router.get('/pastevents', pastController.getEvents);

router.get('/futureevents', futureController.getEvents);

module.exports = router;