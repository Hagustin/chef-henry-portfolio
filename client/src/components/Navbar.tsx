import { Link as ScrollLink } from "react-scroll"; // Smooth scrolling
import { Link as RouterLink, useLocation } from "react-router-dom"; // Page navigation
import { useState, useEffect } from "react";
import ResumeModal from "./ResumeModal";

function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("");

    const isHomePage = location.pathname === "/";

    // Function to detect scroll position and highlight the correct navbar link
    useEffect(() => {
        if (!isHomePage) return;

        const sections = document.querySelectorAll("section");
        const handleScroll = () => {
            let currentSection = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute("id") || "";
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isHomePage]);

    return (
        <>
            <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full flex justify-between items-center z-50 shadow-lg border-b-2 border-gray-800">
                {/* HA Logo with Chef Hat */}
                <div className="flex items-center space-x-2 text-3xl font-bold tracking-wider relative group">
                    <RouterLink to="/" className="flex items-center space-x-2">
                        <span className="text-yellow-400 transition-transform transform group-hover:scale-110 group-hover:-rotate-3">H</span>
                        <img src="/images/chef-hat.png" alt="Chef Hat" className="w-8 h-8 transition-transform transform group-hover:rotate-12" />
                        <span className="text-red-400 transition-transform transform group-hover:scale-110 group-hover:rotate-3">A</span>
                    </RouterLink>
                </div>

                {/* Navbar Links */}
                <div className="space-x-6 flex items-center">
                    {isHomePage ? (
                        <>
                            <ScrollLink 
                                to="home" 
                                smooth={true} 
                                duration={500} 
                                className={`cursor-pointer transition text-lg px-4 py-2 rounded-md ${
                                    activeSection === "home" ? "bg-yellow-500 text-black shadow-md" : "hover:text-yellow-400"
                                }`}
                            >
                                🍳 Home
                            </ScrollLink>
                            <ScrollLink 
                                to="about" 
                                smooth={true} 
                                duration={500} 
                                className={`cursor-pointer transition text-lg px-4 py-2 rounded-md ${
                                    activeSection === "about" ? "bg-red-500 text-white shadow-md" : "hover:text-red-400"
                                }`}
                            >
                                🔪 About
                            </ScrollLink>
                            <ScrollLink 
                                to="projects" 
                                smooth={true} 
                                duration={500} 
                                className={`cursor-pointer transition text-lg px-4 py-2 rounded-md ${
                                    activeSection === "projects" ? "bg-green-500 text-black shadow-md" : "hover:text-green-400"
                                }`}
                            >
                                🍽️ Projects
                            </ScrollLink>
                            <ScrollLink 
                                to="contact" 
                                smooth={true} 
                                duration={500} 
                                className={`cursor-pointer transition text-lg px-4 py-2 rounded-md ${
                                    activeSection === "contact" ? "bg-blue-500 text-white shadow-md" : "hover:text-blue-400"
                                }`}
                            >
                                ☕ Contact
                            </ScrollLink>
                        </>
                    ) : (
                        <>
                            <RouterLink to="/" className="hover:text-yellow-400 cursor-pointer transition">Home</RouterLink>
                            <RouterLink to="/#about" className="hover:text-red-400 cursor-pointer transition">About</RouterLink>
                            <RouterLink to="/#projects" className="hover:text-green-400 cursor-pointer transition">Projects</RouterLink>
                            <RouterLink to="/#contact" className="hover:text-blue-400 cursor-pointer transition">Contact</RouterLink>
                        </>
                    )}

                    {/* Resume Button */}
                    <button 
                        onClick={() => setShowModal(true)}
                        className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition shadow-lg"
                    >
                        📜 Resume
                    </button>
                </div>
            </nav>

            {/* Resume Modal */}
            {showModal && <ResumeModal onClose={() => setShowModal(false)} />}
        </>
    );
}

export default Navbar;
