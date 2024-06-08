require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const { fileURLToPath } = require('url');
const userRoutes = require("../routes/user.route");
const authRoutes = require("../routes/auth.route");
const postRoutes = require("../routes/post.route");
const commentRoutes = require("../routes/comment.route.js");
const app = express();


const __dirname = path.resolve();


app.use(express.json());
app.use(cookieParser());


//Api route
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

//Use the client app
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});


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

//Connect to MongoDB
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
