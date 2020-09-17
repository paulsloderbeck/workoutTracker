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
    //.sort({ date: -1 })
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//update route to select workout and add single exercise to workout for addExercise
router.post("/api/workouts", (req, res) => {
  Workout.fineOneAndUpdate({});
});
//route to get workouts in range for getWorkoutsInRange
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
module.exports = router;
