import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
            {/* HA with Chef Hat and Hover Animation */}
            <div className="flex items-center space-x-2 text-3xl font-bold tracking-wider relative group">
                <span className="text-yellow-400 transition-transform transform group-hover:scale-110 group-hover:-rotate-3">H</span>
                <img src="/images/chef-hat.png" alt="Chef Hat" className="w-8 h-8 transition-transform transform group-hover:rotate-12" />
                <span className="text-red-400 transition-transform transform group-hover:scale-110 group-hover:rotate-3">A</span>
            </div>

            {/* Navigation Links */}
            <div className="space-x-6">
                <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
                <Link to="/projects" className="hover:text-yellow-400 transition">Projects</Link>
                <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
                <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
