import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/books", booksRoute);

// Root route
app.get("/", (req, res) => {
  return res.status(200).send("Welcome To MERN Stack Tutorial");
});

// Connect to MongoDB and start server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("DB connection error:", error);
  });
