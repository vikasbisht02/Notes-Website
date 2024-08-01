const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { authentication } = require("./utilities.js");
const User = require("./models/user_model");
require("dotenv").config();

const data = require("console")
const app = express();
const port = 3000;
const config = require("./config.json");

mongoose
  .connect(config.connectionString, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.json({ data: "Sending Response" });
});

app.post("/create-account", async (req, res) => {
  let { fullName, email, password } = req.body;

  if (!fullName) {
    return res
      .status(400)
      .json({ error: true, message: "Full Name is required" });
  }

  if (!email) {
    return res.status(400).json({ error: true, message: "Email is required" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ error: true, message: "Password is required" });
  }

  fullName = fullName.replace(/\b\w/g, char => char.toUpperCase()); 
  email = email.toLowerCase();

  const isEmailExists = await User.findOne({ email });
  const isFullNameExists = await User.findOne({ fullName });

  if (isEmailExists) {
    return res.status(400).json({
      error: true,
      message: "User with this email already exists",
    });
  }
  if (isFullNameExists) {
    return res.status(400).json({
      error: true,
      message: "Username already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ fullName, email, password: hashedPassword });

  await user.save();

  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30m",
  });

  return res.json({
    error: false,
    user,
    accessToken,
    message: "Registration Successful",
  });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
