import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;
 
//middlewawre
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

app.get("/data", (req, res) => {
    res.json({
        name: "Russell",
        password: "password123",
        username: "rusty",
    });
  });

  app.post("/login", (req, res) =>{
    console.log(req.body);
    res.json(" I got your information")
  })
 
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});
 