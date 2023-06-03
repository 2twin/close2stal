import mongoose from "mongoose";

const Store = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    price: { type: Number, required: true },
  },
  { collection: "store" }
);

const StoreSchema = mongoose.model("Store", Store);

export default StoreSchema;
