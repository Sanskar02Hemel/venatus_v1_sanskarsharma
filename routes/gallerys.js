const express           = require("express"),
      router            = express.Router(),
      galleryController = require("../controllers/gallery");

router.get("/gallerys", function (req, res) {
    res.render("gallery");
});

module.exports = router; 