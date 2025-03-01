import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import chatbotRoutes from './routes/chatbotRoutes';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI as string;

app.use(cors());
app.use(express.json());
app.use('/api/chatbot', chatbotRoutes);


// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to Chef Henry\'s Portfolio API!');
});

// MongoDB Atlas connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Failed to connect to MongoDB Atlas:', err);
  });
