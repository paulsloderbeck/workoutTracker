const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//creates the exercise schema to be used as child of workout schema
const exerciseSchema = new Schema({
  type: {
    type: String
  },
  name: {
    type: String
  },
  duration: {
    type: Number
  },
  distance: {
    type: Number
  },
  weight: {
    type: Number
  },
  reps: {
    type: Number
  },
  sets: {
    type: Number
  }
});

//creates the workout schema with exercises as an array of subdocuments
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [exerciseSchema]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
