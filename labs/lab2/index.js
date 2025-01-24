const express = require("express");
const lab_router = require("./routers/lab_router")
const PORT = process.env.PORT || 8000;
const app = express();

app.use("/lab2", lab_router);

app.get("/", (req, res) => {
    res.send("Welcome to my server");
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});