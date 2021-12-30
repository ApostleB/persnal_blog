import express from "express";
import session from "express-session";
import morgan from "morgan";
import "dotenv/config";
import homeRouter from "./routes/homeRouter";
import mediaRouter from "./routes/mediaRouter";
import boardRouter from "./routes/boardRouter"
import adminRouter from "./routes/adminRouter";
import userRouter from "./routes/userRouter";


const app = express();
//Middleware Setting
const logger = morgan("dev");

console.log("DB_URL", process.env.DB_URL);

//Views Set
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");//views의 경로 세팅

//npm Middlewares
app.use(logger);
app.use(express.urlencoded({ extended: true }));

//statics
app.use("/static",express.static("assets"));

//Routers
app.use("/", homeRouter);
app.use("/media", mediaRouter);
app.use("/board", boardRouter);
app.use("/user", userRouter);



app.use("/admin", adminRouter);

export default app;
