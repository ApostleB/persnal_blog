import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/blog");

const db = mongoose.connection;
db.on("error", (err) => console.log("π« db.js DB ERROR db.js νμΌλ‘ μ΄λ. ", err) );

db.once("open", () => console.log("DB μ°κ²° μ±κ³΅π"));