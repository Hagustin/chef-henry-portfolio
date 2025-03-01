import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000); // Show loading screen for 3 seconds
    }, []);

    return loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
    ) : (
        <div className="scroll-smooth">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
