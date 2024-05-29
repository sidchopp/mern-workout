import express from "express";
import "dotenv/config";

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app!" });
});

// listen for requests
const PORT = 4000;

app.listen(PORT, () => {
  console.log("listening on port..", PORT);
});
