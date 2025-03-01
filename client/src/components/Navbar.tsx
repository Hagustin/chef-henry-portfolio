import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between">
            <h1 className="text-2xl font-bold">Henry's Portfolio</h1>
            <div className="space-x-6">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
