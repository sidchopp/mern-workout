import mongoose from "mongoose";

import Workout from "../models/workoutModel.js";

// GET all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// CREATE a new workout
const createAWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // Add a document to workouts collection
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

// GET a workout
const getAWorkout = async (req, res) => {
  const { id } = req.params;

  // To check that the id is a valid mongoose id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout ID incorrect" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ Error: "No such Workout is found!" });
  }

  return res.status(200).json(workout);
};

// UPDATE a workout
const updateAWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout ID incorrect" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// DELETE a workout
const deleteAWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout ID incorrect" });
  }

  // To find the doc in MongoDB whose _id matches with id
  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

export {
  getWorkouts,
  createAWorkout,
  getAWorkout,
  updateAWorkout,
  deleteAWorkout,
};
