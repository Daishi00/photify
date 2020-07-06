const express = require("express");
const router = express.Router();
const Photo = require("../../models/photo.model");

router.put("/:id", async function (req, res) {
  const photo = new Photo({
    likes: likes + 1,
    // etc etc
  });
});

module.exports = router;
