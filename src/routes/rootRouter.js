import express from "express";
const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  console.log("/");
  res.render("home");
});

export default rootRouter;