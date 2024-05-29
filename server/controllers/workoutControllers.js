import Workout from "../models/workoutModel.js";

// GET all workouts
const getWorkouts = (req, res) => {
  res.json({ message: "GET all workouts" });
};

// CREATE a new workout
const createWorkout = async (req, res) => {
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
const getAWorkout = (req, res) => {
  res.json({ message: "GET a single workout" });
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
  createWorkout,
  getAWorkout,
  updateAWorkout,
  deleteAWorkout,
};
