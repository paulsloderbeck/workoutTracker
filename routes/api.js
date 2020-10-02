const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
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
router.put("/api/workouts/:id", (req, res) => {
  console.log("PUT body: ", req.body);
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true }
  )
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//creates a new Workout document in mongoDb via the workout model for createWorkout
router.post("/api/workouts", (req, res) => {
  console.log("POST body: ", req.body);
  Workout.create(req.body)
    .then((dbWorkout) => {
      console.log("dbWorkout", dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
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
