import express from "express";
import mongoose from "mongoose";
import { connectToDB } from "./lib/db.js";
import workoutRoutes from "./routes/workouts.js";

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/workouts", workoutRoutes);

//db connection
const PORT = 4000;

connectToDB()
  .then(() => {
    // listen to requests ONLY if we are connected with DB
    app.listen(PORT, () => {
      console.log("Listening on port..", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
