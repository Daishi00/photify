const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const config = require("config");

const authMiddleware = require("./middleware/auth");
const users = require("./routes/users");
const photos = require("./routes/photos/postPhoto");
const getphotos = require("./routes/photos/getPhoto");
const image = require("./routes/photos/getImage");
const auth = require("./routes/auth");
const postComment = require("./routes/comments/postComment");
const getComment = require("./routes/comments/getComment");

const app = express();
const port = process.env.PORT || 5000;

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

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

app.use("/Images.files/", (req, res, next) => {
  eval(
    `Grid.prototype.findOne = ${Grid.prototype.findOne
      .toString()
      .replace("nextObject", "next")}`
  );
  res.locals.gfs = gfsImage;
  next();
});

app.use("/auth", auth);
app.use("/users", users);
app.use("/photos", photos);
app.use("/comment/", postComment);
app.use("/comment/", getComment);

app.use("/photos", getphotos);
app.use("/Images.files/", image);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
