const express    = require("express"),
      app        = express(),
      bodyParser = require("body-parser"),
      mongoose   = require("mongoose");

var aboutRoutes = require("./routes/abouts");
var memberRoutes = require("./routes/members");
var eventRoutes = require("./routes/events");
var galleryRoutes = require("./routes/gallerys");

const MONGODB_URI =
    'mongodb+srv://raghav:raghavHHH@cluster0-yxvwm.mongodb.net/venatus?retryWrites=true&w=majority';

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(aboutRoutes);
app.use("/members",memberRoutes);
app.use("/events",eventRoutes);
app.use(galleryRoutes);

mongoose
    .connect(MONGODB_URI)
    .then((result) => {
        app.listen(3000);
        console.log("server is ready");
    })
    .catch((err) => {
        console.log(err);
    });

