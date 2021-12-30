import app from "./server";
const PORT = 4000;

import "dotenv/config";
import "./db";
import "./models/System";
// import "./models/User";

app.listen(PORT, () => {
    console.log(`서버 실행 http://localhost:${PORT}`);
})