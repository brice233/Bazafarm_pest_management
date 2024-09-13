import express from "express";
import pestRouter from "./pest.route";

const apiRouter = express.Router();

apiRouter.use("/pest", pestRouter);

export default apiRouter;
