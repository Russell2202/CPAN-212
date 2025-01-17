const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

// Serve static files from the "pages" folder
app.use(express.static(path.join(__dirname, "pages")));

// Handle specific routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "contact.html"));
});

// Catch-all for 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
