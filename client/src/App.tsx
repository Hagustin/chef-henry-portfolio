import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails"; // Import the project details page

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000); // Show loading screen for 3 seconds
    }, []);

    return loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
    ) : (
        <Router>
            <Navbar />
            <SocialSidebar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Home />
                        <About />
                        <Projects />
                        <Contact />
                    </>
                } />
                <Route path="/project/:projectId" element={<ProjectDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
