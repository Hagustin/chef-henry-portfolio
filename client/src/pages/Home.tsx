import ChatbotWidget from "../components/ChatbotWidget";

function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-6">
            <h1 className="text-5xl font-bold mb-4">Welcome to Henry's Portfolio</h1>
            <p className="text-lg max-w-2xl">
                From the **heat of the kitchen** to the **world of code**, I’m a **former sous chef** turned **full-stack developer**.  
                Passionate about building **fintech solutions, automation, and AI-driven applications**.
            </p>
            <p className="mt-4 text-gray-400">Scroll down to explore my work.</p>

            {/* Chatbot Icon */}
            <ChatbotWidget />
        </div>
    );
}

export default Home;
