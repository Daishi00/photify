const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    photo: {
      type: String
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
