import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';

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

    const stabilityResponse = await axios.post(
      'https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image',
      {
        text_prompts: [{ text: prompt }],
        cfg_scale: 7,
        height: 512,
        width: 512,
        steps: 30,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );

    const artifact = stabilityResponse.data.artifacts?.[0];

    if (!artifact || !artifact.base64) {
      return res.status(500).json({ error: 'No image returned by Stability AI.' });
    }

    res.status(200).json({ photo: artifact.base64 });

  } catch (error) {
    console.error('Stability AI error:', error?.response?.data || error.message);
    res.status(500).json({
      error:
        error?.response?.data?.error?.message ||
        error?.response?.data ||
        'Image generation failed',
    });
  }
});

export default router;
