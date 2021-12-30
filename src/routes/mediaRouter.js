import express from "express";
import { mediaHome } from "../controllers/mediaController";
const mediaRouter = express.Router();

mediaRouter.get("/", mediaHome);

export default mediaRouter;