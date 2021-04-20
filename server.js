const express = require('express');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social-network");

app.listen(PORT, () => {
  console.log(` ==> API server now on port ${PORT}!`);
});