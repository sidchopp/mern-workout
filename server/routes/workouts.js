import express from "express";
import {
  getWorkouts,
  createAWorkout,
  getAWorkout,
  updateAWorkout,
  deleteAWorkout,
} from "../controllers/workoutControllers.js";

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// POST (CREATE) a new workout
router.post("/", createAWorkout);

// GET a workout
router.get("/:id", getAWorkout);

// UPDATE a workout
router.patch("/:id", updateAWorkout);

// DELETE a workout
router.delete("/:id", deleteAWorkout);

export default router;
