# 🖼️ Imagegify – AI Prompt-to-Image Generator

**Imagegify** is a full-stack MERN application that transforms your text prompts into AI-generated images using the **Stability AI** API. You can generate, preview, **download**, and store your creations with ease — all hosted via **Cloudinary**.

---

## 📸 Screenshots

### 🧠 Prompt Interface
![Community page](https://github.com/user-attachments/assets/6cafcb28-a9d4-4bd2-a598-79cf6c8c7319)
![Generated Images](https://github.com/user-attachments/assets/996d008a-df6d-4356-8b6d-a0319c94ca05)
## 🚀 Features

- 💬 Convert text prompts into stunning images using Stability AI
- ☁️ Upload and host images with **Cloudinary**
- 💾 **Download generated images** in one click
- ⚙️ Full-stack MERN app with secure backend
- ⚡ Super-fast frontend built with **Vite + React**
- 📱 Responsive design using **Tailwind CSS**

---

## 📸 Demo

> Coming soon!  
_Link your deployed project here once live._

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **AI Provider:** Stability AI
- **Image Hosting:** Cloudinary
- **File Download:** Client-side `download` utility (via Blob or anchor tag)

---

## 📁 Project Structure

aiimagegen/
├── client/ # React frontend (Vite)
│ ├── src/
│ └── public/
├── server/ # Node/Express backend
│ ├── routes/
│ ├── controllers/
│ └── utils/
├── .gitignore
└── README.md


---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/imagegify.git
cd imagegify

# 2. Install client dependencies
cd client
npm install

# 3. Install server dependencies
cd ../server
npm install

🔐 Environment Setup

Create a .env file inside the server/ folder:

PORT=5000
MONGODB_URI=your-mongodb-uri
STABILITY_API_KEY=your-stability-api-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-secret

🧪 Run Locally

# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev

Visit the app: http://localhost:5173
💡 How It Works

    User enters a prompt like: "A futuristic cyberpunk city at night"

    Frontend sends the prompt to the backend

    Backend uses Stability AI API to generate an image

    Generated image is optionally uploaded to Cloudinary

    User can view, download, or save the image

💾 Image Download Feature

    Each generated image includes a download button

    Clicking it triggers a download using the download attribute or Blob URL

    File is saved with a unique name based on timestamp or prompt

🌐 Deployment Tips

    Frontend: Vercel / Netlify

    Backend: Render / Railway / Fly.io

    MongoDB: Atlas cloud DB

    Cloudinary: Set to auto-expire unused assets if needed


✨ Inspiration

This project was inspired by the creativity of AI + developers like you.
Imagine → Prompt → Generate → Download → Share.


---


