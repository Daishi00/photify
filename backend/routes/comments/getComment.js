const express = require("express");
const router = express.Router();
const Comment = require("./../../models/Comment");

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
