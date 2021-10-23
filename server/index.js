const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const morgan = require('morgan');
const multer = require("multer");
const path = require("path");
const db = require('./db');
const upload = require("./db/storage");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan('tiny'));
app.use("/images", express.static(path.join(__dirname, "/images")));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

app.post("/api/upload", upload.single("file"), (req, res) => {
  console.log("came here")
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(PORT, () => {
  console.log(`Server is starting at ${PORT}`);
});
