import express from "express";
import morgan from "morgan";
import rootRouter from "./routes/rootRouter"
const app = express();

//Middleware Setting
const logger = morgan("dev");

//Views Set
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");//views의 경로 세팅

//npm Middlewares
app.use(logger);

//statics
app.use("/static",express.static("assets"));

//Routers
app.use("/", rootRouter);

export default app;
