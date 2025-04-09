const bodyParser = require("body-parser");
const express = require("express");
const validator = require("email-validator");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  res.send("Welcome to Express deployed on Render!");
  console.info('GET /hello success')
});

app.get("/", (req, res) => {
  res.send("Welcome to my Express app on Render!");

});

app.post("/emailValidation", (req, res) => {
  const postData = req.body;
  if (postData.email) {
    console.info('POST /emailValidation success')
    res.json({ status: validator.validate(postData.email) });
  } else {
    console.warn('POST /emailValidation wrong input')
    res.status(400).json({ status: "wrong request input" });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
