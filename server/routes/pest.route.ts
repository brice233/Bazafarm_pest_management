import express from "express";
import { createPest, getPests, getPestData, updatePest, deletePest } from "../controllers/pest.controller";

const pestRouter = express.Router();

pestRouter.get("/", getPests);
pestRouter.post("/", createPest);
pestRouter.get("/:id", getPestData);
pestRouter.put("/:id", updatePest);
pestRouter.delete("/:id", deletePest);

export default pestRouter;