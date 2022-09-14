import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    content: String,
    photoUrl: {
      type: String,
      required: true,
    },
    username: String,
    email: String,
    userImg: String,
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.posts || mongoose.model("posts", PostSchema);
