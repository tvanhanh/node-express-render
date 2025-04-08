const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/hello", (req, res) => {
  res.send("Welcome to Express deployed on Render!");
});

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
app.get("/", (req, res) => {
    res.send("Welcome to my Express app on Render!");
  });
  
