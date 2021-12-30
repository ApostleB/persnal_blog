import express from "express"
const userRouter = express.Router();
import { getLogin, getJoin, postJoin} from "../controllers/userController";

userRouter.route("/login").get(getLogin);
userRouter.route("/join").get(getJoin).post(postJoin);

export default userRouter;