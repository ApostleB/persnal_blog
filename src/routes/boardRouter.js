import express from "express"
import { boardHome } from "../controllers/boardController.js";

const boardRouter = express.Router();

boardRouter.get("/", boardHome);

export default boardRouter;

