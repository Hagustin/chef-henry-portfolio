import Chatbot from "./components/Chatbot";

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-5">
            <h1 className="text-3xl font-bold mb-6">Chef Henry's Portfolio 🍳💻</h1>
            <Chatbot />
        </div>
    );
}

export default App;
