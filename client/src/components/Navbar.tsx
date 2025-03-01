import { Link } from "react-scroll";
import { useState } from "react";
import ResumeModal from "./ResumeModal"; // Import modal

function Navbar() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full flex justify-between items-center z-50">
                {/* HA Logo with Chef Hat */}
                <div className="flex items-center space-x-2 text-3xl font-bold tracking-wider relative group">
                    <span className="text-yellow-400 transition-transform transform group-hover:scale-110 group-hover:-rotate-3">H</span>
                    <img src="/images/chef-hat.png" alt="Chef Hat" className="w-8 h-8 transition-transform transform group-hover:rotate-12" />
                    <span className="text-red-400 transition-transform transform group-hover:scale-110 group-hover:rotate-3">A</span>
                </div>

                {/* Navbar Links */}
                <div className="space-x-6 flex items-center">
                    <Link to="home" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer transition">Home</Link>
                    <Link to="about" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer transition">About</Link>
                    <Link to="projects" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer transition">Projects</Link>
                    <Link to="contact" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer transition">Contact</Link>

                    {/* Resume Button */}
                    <button 
                        onClick={() => setShowModal(true)}
                        className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
                    >
                        Resume
                    </button>
                </div>
            </nav>

            {/* Resume Modal */}
            {showModal && <ResumeModal onClose={() => setShowModal(false)} />}
        </>
    );
}

export default Navbar;
