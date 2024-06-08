require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const userRoutes = require("../routes/user.route");
const authRoutes = require("../routes/auth.route");
const postRoutes = require("../routes/post.route");
const commentRoutes = require("../routes/comment.route.js");
const app = express();

app.use(express.json());
app.use(cookieParser());



app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);



//Middleware for error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const MongoDB_uri = process.env.MongoDB_URL;
mongoose
  .connect(MongoDB_uri)
  .then(() => {
    console.log(`DataBase connect successfully`);
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
