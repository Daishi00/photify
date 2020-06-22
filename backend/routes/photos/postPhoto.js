const express = require("express");
require("dotenv").config();
const router = express.Router();
const photoModel = require("./../../models/photo.model.js");
const GridFsStorage = require("multer-gridfs-storage");
const multer = require("multer");

const storage = new GridFsStorage({
  url: process.env.ATLAS_URI,
  file: (req, file) => {
    const fileInfo = {
      filename: `Image: ${req.body.user}`,
      bucketName: "Images",
    };
    return fileInfo;
  },
});

const fileFilter = (req, file, callback) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    callback(null, true);
  } else callback(new Error("Wrong file type!"), false);
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.post(
  "/",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    const photo = new photoModel({
      user: req.body.user,
      image: req.files["image"][0].id,
      description: req.body.description,
      tags: req.body.tags,
    });

    try {
      const newPhoto = await photo.save();
      res.status(200).json(newPhoto);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

module.exports = router;
