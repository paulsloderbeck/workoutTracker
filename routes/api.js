const router = require("express").Router();
const Workout = require("../models/workout.js");

//creates a new Workout document in mongoDb via the workout model for createWorkout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//get route to sort workouts based on date and return most recent for getLastWorkout

//update route to select workout and add single exercise to workout for addExercise

//route to get workouts in range for getWorkoutsInRange
module.exports = router;
