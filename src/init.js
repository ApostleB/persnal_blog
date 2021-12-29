import app from "./server";
const PORT = 4000;

//user Middlewares

app.listen(PORT, () => {
    console.log(`Server Start http://localhost:${PORT}`);
})