const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: true
    },
    tags: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

photoSchema.virtual("imgURL").get(function() {
  return this.image ? `/Images.files/${this.image}` : null;
});

const Photo = mongoose.model("Photo", photoSchema);
module.exports = Photo;
