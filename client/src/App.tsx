import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SocialSidebar from "./components/SocialSidebar";
import EmailSidebar from "./components/EmailSidebar";

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
            <SocialSidebar />
            <EmailSidebar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
