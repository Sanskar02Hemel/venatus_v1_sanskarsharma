const express = require("express");
      router  = express.Router();

router.get("/about", function(req, res){
    res.render("about");
});
router.get("/", function(req, res){
    res.render("landing");
});
router.get("/developer", function(req, res){
    res.render("developer");
});


module.exports = router;