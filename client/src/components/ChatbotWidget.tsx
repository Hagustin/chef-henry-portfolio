import { useState } from "react";
import Chatbot from "./Chatbot";

function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Chatbot Icon Button */}
            <button
                className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 hover:bg-blue-600 transition"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src="/images/chef-icon.png" alt="Chef Icon" className="w-8 h-8" />
                <span className="hidden sm:inline">Hi, I'm Henry! Click to learn about me.</span>
            </button>

            {/* Chatbot Window (Toggle on Click) */}
            {isOpen && (
                <div className="fixed bottom-16 right-6 bg-gray-800 p-4 rounded-lg shadow-lg w-80">
                    <Chatbot />
                </div>
            )}
        </>
    );
}

export default ChatbotWidget;
