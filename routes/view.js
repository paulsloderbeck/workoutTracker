//view routes for sending user to different pages
const router = require("express").Router();
const path = require("path");

//index route for index.html
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//exercise route for exercise.html
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//stats route for stats.html
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
