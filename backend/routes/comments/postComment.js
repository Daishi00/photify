const express = require("express");
const router = express.Router();
const Comment = require("./../../models/Comment");

router.post("/", async (req, res) => {
  const comment = new Comment({
    user: req.body.user,
    text: req.body.text,
    photo: req.body.photo
  });
  try {
    const newComment = await comment.save();
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
