import ChatbotWidget from "../components/ChatbotWidget";

function Home() {
    return (
        <section id="home" className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-900 text-white text-left px-6 py-16">
            <div className="max-w-3xl">
                <h1 className="text-5xl font-extrabold mb-4 tracking-wide text-yellow-400">Hi, my name is</h1>
                <h2 className="text-6xl font-bold mb-4 text-white">Henry Agustin.</h2>
                <h3 className="text-4xl font-bold mb-6 text-gray-300">I build innovative digital solutions.</h3>
                <p className="text-lg max-w-2xl leading-relaxed text-gray-400">
                    I’m a **former sous chef** turned **full-stack developer**, blending precision and creativity to craft **fintech solutions, automation tools, and AI-driven applications**.  
                    Currently, I’m focused on building **scalable and user-friendly products** that solve real-world problems.
                </p>
            </div>
            {/* Chatbot Icon */}
            <ChatbotWidget />
        </section>
    );
}

export default Home;
