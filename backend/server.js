const express = require("express");
const cors = require("cors");
const { chats } = require("./data/data.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
dotenv.config(); // Correct way to initialize dotenv

const app = express();
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  console.log("hey ram");
  res.send(chats);
});

app.get("/single/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  console.log(singleChat);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000; // Using environment variable for PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
