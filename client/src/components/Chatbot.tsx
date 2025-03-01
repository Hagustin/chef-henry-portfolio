import { useState } from "react";
import axios from "axios";

interface ChatbotProps {
    onClose: () => void;
}

function Chatbot({ onClose }: ChatbotProps) {
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
    const [input, setInput] = useState("");

    const sendMessage = async (message: string) => {
        if (!message.trim()) return;

        const userMessage = { text: message, sender: "user" as const };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post("http://localhost:3001/api/chatbot/chat", { message });
            const botMessage = { text: response.data.reply, sender: "bot" as const };

            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error("Error:", error);
            setMessages([...messages, userMessage, { text: "Oops! Something went wrong.", sender: "bot" }]);
        }
    };

    return (
        <div className="bg-[#3E2723] border border-[#8D6E63] rounded-lg shadow-xl p-4 relative text-white">
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-2 right-2 text-red-400 font-bold hover:text-red-600">✕</button>

            {/* Chat Header */}
            <div className="text-lg font-bold text-center mb-3 text-[#D7CCC8]">
                🍽️ Chef Henry's AI Chatbot 🍽️
            </div>

            {/* Chat Messages */}
            <div className="h-48 overflow-y-auto border border-[#8D6E63] p-3 rounded-md bg-[#5D4037]">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-2 p-2 rounded-lg ${msg.sender === "user" ? "bg-[#795548] text-white self-end" : "bg-[#D7CCC8] text-black self-start"}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* Predefined Questions */}
            <div className="mt-3 space-y-2">
                <button onClick={() => sendMessage("Who is Henry?")} className="bg-[#A1887F] text-white px-3 py-2 rounded-lg w-full hover:bg-[#8D6E63]">Who is Henry?</button>
                <button onClick={() => sendMessage("What are his passions and hobbies?")} className="bg-[#A1887F] text-white px-3 py-2 rounded-lg w-full hover:bg-[#8D6E63]">What are his passions and hobbies?</button>
                <button onClick={() => sendMessage("Do you think he's ready to embark on my project?")} className="bg-[#A1887F] text-white px-3 py-2 rounded-lg w-full hover:bg-[#8D6E63]">Do you think he's ready to embark on my project?</button>
            </div>

            {/* Chat Input */}
            <div className="mt-3 flex">
                <input
                    type="text"
                    className="flex-1 border rounded-l px-3 py-2 bg-[#D7CCC8] text-black"
                    placeholder="Ask me anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="bg-[#6D4C41] text-white px-4 py-2 rounded-r hover:bg-[#5D4037]" onClick={() => sendMessage(input)}>Send</button>
            </div>
        </div>
    );
}

export default Chatbot;
