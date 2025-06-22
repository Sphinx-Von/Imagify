import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js';

import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173', // local dev
  'https://serene-banoffee-10f4aa.netlify.app/', // ✅ your deployed frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like curl or Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('CORS policy: Not allowed by CORS'));
  },
  credentials: true
}));

app.use(express.json({limit: '50mb'}));
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async(req, res) => {
    res.send('Hello from Dall-E');
})

const startServer = async () => {
try{
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
}


catch(error){
console.log(error)
}
}



startServer();