const express           = require("express"),
      router            = express.Router(),
      galleryController = require("../controllers/gallery");

router.get("/gallerys", galleryController.getgallerys);

module.exports = router; 