import express from 'express';
import { chatbotResponse } from '../controllers/chatbotController';

const router = express.Router();

router.post('/chat', chatbotResponse);

export default router;
