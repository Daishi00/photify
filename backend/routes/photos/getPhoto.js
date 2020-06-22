const express = require("express");
const router = express.Router();
const photoModel = require("./../../models/photo.model.js");

router.get("/", async (req, res) => {
  try {
    console.log(photoModel.model);
    const photos = await photoModel.find();
    res.json(photos);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
