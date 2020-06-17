const express = require("express");
const router = express.Router();
const photoModel = require("./../../models/photo.model.js");

router.get("/", async (req, res) => {
  try {
    const photos = await photoModel.find({});
    res.status(200).json(photos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
