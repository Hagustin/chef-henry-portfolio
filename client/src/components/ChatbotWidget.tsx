import { useState, useEffect } from "react";
import Chatbot from "./Chatbot";

function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [bubbleMessage, setBubbleMessage] = useState("");

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setBubbleMessage("HEY THERE!!");
        }, 2000);

        const timer2 = setTimeout(() => {
            setBubbleMessage("YES YOU!");
        }, 4000);

        const timer3 = setTimeout(() => {
            setBubbleMessage("Ask me anything!");
        }, 6000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <>
            {/* Floating Chatbot Icon */}
            <button
                className="fixed bottom-6 right-6 bg-blue-500 p-4 rounded-full shadow-lg flex items-center hover:bg-blue-600 transition"
                onClick={() => setIsOpen(true)}
            >
                <img src="/images/chef-icon.png" alt="Chatbot" className="w-10 h-10" />
            </button>

            {/* Speech Bubble */}
            {bubbleMessage && !isOpen && (
                <div className="fixed bottom-20 right-6 bg-white text-black text-sm px-4 py-2 rounded-lg shadow-md animate-fade-in">
                    {bubbleMessage}
                </div>
            )}

            {/* Chatbot Popup */}
            {isOpen && (
                <div className="fixed bottom-16 right-6 bg-white rounded-lg shadow-lg w-80 p-4">
                    <Chatbot onClose={() => setIsOpen(false)} />
                </div>
            )}
        </>
    );
}

export default ChatbotWidget;
