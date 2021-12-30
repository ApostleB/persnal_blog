import express from "express";
import {
  getAdminHome,
  postAdminHome,
  userHomeManage,
} from "../controllers/adminController";
const adminRouter = express.Router();

adminRouter.route("/").get(getAdminHome).post(postAdminHome);
adminRouter.route("/userHome").get(userHomeManage);

export default adminRouter;