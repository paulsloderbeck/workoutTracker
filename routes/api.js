const router = require("express").Router();
const db = require("../models");

//creates a new Workout document in mongoDb via the workout model for createWorkout
router.post("/api/workouts", ({ body }, res) => {
  console.log("body:", body);
  db.Workout.create(body)
    .then((dbWorkout) => {
      console.log("dbWorkout", dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//update route to select workout and add single exercise to workout for addExercise
router.put("/api/workouts", (req, res) => {
  db.Workout.findByIdAndUpdate({});
});
//route to get workouts in range for getWorkoutsInRange
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
module.exports = router;
