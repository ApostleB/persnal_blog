import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/blog");

const db = mongoose.connection;
db.on("error", (err) => console.log("🚫 db.js DB ERROR db.js 파일로 이동. ", err) );

db.once("open", () => console.log("DB 연결 성공👌"));