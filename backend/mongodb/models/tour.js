import mongoose from "mongoose";

const Tour = new mongoose.Schema({
  date: { type: String, required: true },
  venue: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const TourSchema = mongoose.model("Tour", Tour);

export default TourSchema;
