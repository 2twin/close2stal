import mongoose from "mongoose";

const Music = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  streamingLink: { type: String, required: true },
  image: { type: String, required: true },
});

const MusicSchema = mongoose.model("Music", Music);

export default MusicSchema;
