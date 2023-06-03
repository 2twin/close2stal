import mongoose from "mongoose";

const Video = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  streamingLink: { type: String, required: true },
  image: { type: String, required: true },
});

const VideoSchema = mongoose.model("Video", Video);

export default VideoSchema;
