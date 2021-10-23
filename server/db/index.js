const mongoose = require('mongoose');

// Step 2
mongoose.connect(
    process.env.MONGO_URL || 'mongodb://localhost/mern_blog',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    },
    () => {
      console.log("Connected to MongoDB");
    },
    (err) => {
      console.error("Connection error", err.message);
    }
);

const db = mongoose.connection

module.exports = db