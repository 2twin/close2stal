import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";

import musicRoutes from "./routes/musicRoutes.js";
import tourRoutes from "./routes/tourRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import storeRoutes from "./routes/storeRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use("/api/v1/music", musicRoutes);
app.use("/api/v1/tour", tourRoutes);
app.use("/api/v1/video", videoRoutes);
app.use("/api/v1/store", storeRoutes);

app.get("/", async (req, res) => {
  res.send("Hello!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server has started on port http://localhost:8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
