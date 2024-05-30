import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { connectToDB } from "./lib/db.js";
import workoutRoutes from "./routes/workouts.js";

// express app
const app = express();

app.use(cors());

// middleware - app.use()
// for parsing application/json - Contains key-value pairs of data submitted in the request body
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/workouts", workoutRoutes);

// listen for requests after DB connection is set
const PORT = 4000;

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Listening on port..", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
