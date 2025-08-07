import express from 'express'
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'
import Post from '../mongodb/models/post.js'

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

//GET ALL POSTS
router.route('/').get(async(req, res) => {
    try {
        const posts = await Post.find({});

        res.status(200).json({success: true, data: posts})
    } catch (error) {
          res.status(500).json({success: false, message: error})
    }

})
// CREATE A POST
// CREATE A POST
router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    // Upload photo to Cloudinary
    const photoUrl = await cloudinary.uploader.upload(photo);

    // Save post to MongoDB
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    return res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: newPost,
    });
  } catch (error) {
    console.error('Error creating post:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong while creating post',
    });
  }
});


export default router;