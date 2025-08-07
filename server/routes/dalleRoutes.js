import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';
import FormData from 'form-data';

dotenv.config();
const router = express.Router();

// Test route
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from Stability AI!' });
});

// POST /api/v1/dalle
router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    // Build form-data
    const formData = new FormData();
    formData.append('prompt', prompt);
    formData.append('output_format', 'png');
    formData.append('aspect_ratio', '1:1');
    formData.append('model', 'sd3'); // latest model

    const stabilityResponse = await axios.post(
      'https://api.stability.ai/v2beta/stable-image/generate/sd3',
      formData,
      {
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          ...formData.getHeaders(),
        },
      }
    );

    const image = stabilityResponse.data.image;
    if (!image) {
      return res.status(500).json({ error: 'No image returned from Stability AI.' });
    }

    res.status(200).json({ photo: image });

  } catch (error) {
    console.error('Stability AI error:', error?.response?.data || error.message);
    res.status(500).json({
      error: error?.response?.data || 'Image generation failed',
    });
  }
});

export default router;
