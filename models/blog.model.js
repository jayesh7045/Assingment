const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "userRegistration",
      require: [true, "user id is required"],
    },
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "commentsSchema",
      },
    ],
  },
  { timestamps: true }
);

const blogModel = mongoose.model("blogModel", blogSchema);
module.exports = blogModel;
