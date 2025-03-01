import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import ChatbotWidget from "../components/ChatbotWidget";

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    return loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
    ) : (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-6">
            <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
                Welcome to Henry's Portfolio
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed text-gray-300">
                A **former sous chef** turned **full-stack developer**, blending precision and creativity 
                to craft **fintech solutions, automation tools, and AI-driven applications**.
            </p>
            <ChatbotWidget />
        </div>
    );
}

export default Home;
