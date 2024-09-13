import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import apiRouter from "./routes/index";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1", apiRouter);

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/filterableGallery")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log("Server is running at port " + PORT));
  })
  .catch((err) => {
    console.log(err);
  });
