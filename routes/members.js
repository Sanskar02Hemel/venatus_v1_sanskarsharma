const express = require("express"),
      router  = express.Router(),
      founderController = require('../controllers/founder'),
      coreController    = require("../controllers/core"),
      mentorController    = require("../controllers/mentor"),
      execommController    = require("../controllers/execomm"),
      firstyrsController   = require("../controllers/first"),
      secondyrsController  = require("../controllers/second"),
      thirdyrsController = require("../controllers/third"),
      fourthyrsController = require("../controllers/fourth");

router.get("/founders", founderController.getfounders);

router.get("/cores", coreController.getcores);

router.get("/mentors", mentorController.getmentors);

router.get("/execomms", execommController.getexecomms);

router.get("/firstyrs", firstyrsController.getfirstyrs);

router.get("/secondyrs", secondyrsController.getsecondyrs);

router.get("/thirdyrs", thirdyrsController.getthirdyrs);

router.get("/fourthyrs", fourthyrsController.getfourthyrs);

module.exports = router; 