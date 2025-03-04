function SocialSidebar() {
    return (
        <div className="fixed left-6 bottom-10 flex flex-col space-y-4 text-3xl">
            <a 
                href="https://www.linkedin.com/in/henry-agustin-40896374/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
            >
                <i className="fab fa-linkedin"></i>
            </a>

            <a 
                href="https://github.com/Hagustin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition"
            >
                <i className="fab fa-github"></i>
            </a>

            <a 
                href="https://www.instagram.com/henry.cook.fly/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition"
            >
                <i className="fab fa-instagram"></i>
            </a>

            {/* Vertical Line */}
            <div className="w-1 h-20 bg-gray-400 mx-auto"></div>
        </div>
    );
}

export default SocialSidebar;
