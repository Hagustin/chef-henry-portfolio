import axios from "axios";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import chatbotInstruction from "./chatbotInstructions"; // Import system instruction

dotenv.config();

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export const chatbotResponse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { message } = req.body;

        if (!message) {
            res.status(400).json({ error: "Message is required" });
            return;
        }

        const response = await axios.post(
            `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
            {
                contents: [
                    { role: "user", parts: [{ text: chatbotInstruction }] },  // System instruction as "user"
                    { role: "user", parts: [{ text: message }] } // User input
                ]
            }
        );

        // Extract chatbot response
        const botReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm not sure how to respond to that.";

        res.json({ reply: botReply });

    } catch (error: any) {
        console.error("❌ Gemini API Error:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to process request", details: error.response?.data || error.message });
    }
};
