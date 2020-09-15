//view routes for sending user to different pages

const path = require("path");

module.exports = function (app) {
  //index route for index.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //exercise route for exercise.html
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  //stats route for stats.html
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
