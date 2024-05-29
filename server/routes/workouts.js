import express from "express";
import Workout from "../models/workoutModel.js";
import {
  getWorkouts,
  createWorkout,
  getAWorkout,
  updateAWorkout,
  deleteAWorkout,
} from "../controllers/workoutControllers.js";

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// POST (CREATE) a new workout
router.post("/", createWorkout);

// GET a workout
router.get("/:id", getAWorkout);

// UPDATE a workout
router.patch("/:id", updateAWorkout);

// DELETE a workout
router.delete("/:id", deleteAWorkout);

export default router;
