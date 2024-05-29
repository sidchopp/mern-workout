import express from "express";
import "dotenv/config";
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

// listen for requests
const PORT = 4000;

app.listen(PORT, () => {
  console.log("listening on port..", PORT);
});
