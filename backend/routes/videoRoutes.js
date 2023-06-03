import express from "express";

import Video from "../mongodb/models/video.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const video = await Video.find({});
    res.status(200).json({ success: true, data: video });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

router.route('/').post(async (req, res) => {
  try {
    // const { name, prompt, photo } = req.body;
    // const photoUrl = await cloudinary.uploader.upload(photo);

    // const newPost = await Post.create({
    //   name,
    //   prompt,
    //   photo: photoUrl.url,
    // });

    res.status(200).json({ success: true, data: "YYY" });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
});

export default router;
