const bodyParser = require("body-parser");
const express = require("express");
const validator = require("email-validator");
const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  res.send("Welcome to Express deployed on Render!");
});

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
app.get("/", (req, res) => {
    res.send("Welcome to my Express app on Render!");
  });
  app.get("/emailValidation", (req, res) => {
    const postData = req.body;
    if(postData.email){
       res.json({'status': validator.validate(postData.email)});

    } else {
      res.status(500).json({'status': 'wrong request input'})
    }
  });
  
