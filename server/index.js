const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require('morgan');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
dotenv.config();
const simpleGit = require('simple-git');
const git = simpleGit();

const USER = 'nightsailor';
const PASS = process.env.PASS;
const REPO = 'github.com/nightsailor/Apprature';

const remote = `https://${USER}:${PASS}@${REPO}`;

const PORT = process.env.PORT || 8080; // Step 1

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

// Step 2
mongoose
  .connect(process.env.MONGO_URL || 'mongodb://localhost/mern_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  console.log("came here")
  git
    .add('./images')
    .commit("auto push!")
    .push([remote, '--all'], () => console.log('done'))
    .catch((err)=> console.error('failed: ', err))
  res.status(200).json("File has been uploaded");
});

// HTTP request logger
app.use(morgan('tiny'));

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
}

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(PORT, () => {
  console.log(`Server is starting at ${PORT}`);
});
