import express from "express";
const rootRouter = express.Router();
import { home } from "../controllers/homeController"

rootRouter.get("/", home);

export default rootRouter;