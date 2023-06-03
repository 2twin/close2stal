import express from "express";

import Music from "../mongodb/models/music.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const music = await Music.find({});
    res.status(200).json({ success: true, data: music });
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
