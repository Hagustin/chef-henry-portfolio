import { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" as const };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post("http://localhost:3001/api/chatbot/chat", { message: input });
            const botMessage = { text: response.data.reply, sender: "bot" as const };

            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error("Error:", error);
            setMessages([...messages, userMessage, { text: "Oops! Something went wrong.", sender: "bot" }]);
        }

        setInput("");
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Chat with Henry 🤖</h2>
            <div className="h-64 overflow-y-auto border p-3 rounded-md bg-gray-100">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-2 p-2 rounded ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-300 text-black self-start"}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="mt-4 flex">
                <input
                    type="text"
                    className="flex-1 border rounded-l px-3 py-2"
                    placeholder="Ask me anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-r"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
