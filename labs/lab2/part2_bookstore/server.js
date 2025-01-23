const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

// Serve static files from the "pages" folder
app.use(express.static(path.join(__dirname, "pages")));

// Import routes
const nameRoute = require("./routes/name");
const greetingRoute = require("./routes/greeting");
const addRoute = require("./routes/add");
const calculateRoute = require("./routes/calculate");

// Use routes
app.use("/name", nameRoute);
app.use("/greeting", greetingRoute);
app.use("/add", addRoute);
app.use("/calculate", calculateRoute);

// Catch-all for 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});