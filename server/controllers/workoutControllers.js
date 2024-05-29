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
const updateAWorkout = (req, res) => {
  res.json({ message: "UPDATE a workout" });
};

// DELETE a workout
const deleteAWorkout = (req, res) => {
  res.json({ message: "DELETE a workout" });
};

export {
  getWorkouts,
  createAWorkout,
  getAWorkout,
  updateAWorkout,
  deleteAWorkout,
};
