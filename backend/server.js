const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const passport = require("passport");


const users = require("./routes/users");
const postPhoto = require("./routes/photos/postPhoto");
const getPhoto = require("./routes/photos/getPhoto");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
require("dotenv").config();

// Create mongo connection
const conn = mongoose.createConnection(process.env.ATLAS_URI);

// Init gfs
let gfsImage;

conn.once("open", () => {
  // Init stream

  gfsImage = Grid(conn.db, mongoose.mongo);
  gfsImage.collection("Images");
});

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to db"))
  .catch(err => console.error("Cant connect" + err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.use("/images", (req, res, next) => {
  eval(
    `Grid.prototype.findOne = ${Grid.prototype.findOne
      .toString()
      .replace("nextObject", "next")}`
  );
  res.locals.gfs = gfsImage;
  next();
});

//Routes
app.use("/users", users);
app.use("/api/photos", postPhoto);
app.use("/api/photos", getPhoto);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});