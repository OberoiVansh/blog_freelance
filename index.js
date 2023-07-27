const axios = require("axios");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // Import body-parser
require('dotenv').config();
const app = express();
const port= process.env.PORT || 3000;
const url =
  "https://script.google.com/macros/s/AKfycbwL_mm_NqFcnUavNjR1enYuOt6wFzrLhZ67teQ2tatyzVFCaOZRRdZOvjPjuo2bQ-imIw/exec";

app.use(cors());
app.use(bodyParser.json()); // Use body-parser to parse JSON body

app.post("/subscribe", async (req, res) => {
  const email = req.body.email;
  const data = {
    email: email,
  };
  const response = await axios.post(url, data);
  if (response.status === 200) {
    res.json({ message: `Successfully subscribed with email: ${email}` });
  }
});

app.post("/upload", async (req, res) => {
  const data={
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    tags: req.body.tags,
    date: req.body.date,
    trending: req.body.trending,
    featured: req.body.featured,
    todays_pick: req.body.todays_pick,
    image: req.body.image,
  };
  const response = await axios.post(url, data);
  if (response.status === 200) {
    res.json({ message: `Successfully Saved` });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
