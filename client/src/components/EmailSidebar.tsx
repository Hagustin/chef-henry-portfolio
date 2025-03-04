function EmailSidebar() {
    return (
        <div className="fixed right-6 bottom-10 flex flex-col items-center text-gray-400 text-sm">
            <a 
                href="mailto:henry.n.agustin@outlook.com" 
                className="hover:text-yellow-400 transition transform rotate-90"
            >
                henry.n.agustin@outlook.com
            </a>

            {/* Vertical Line */}
            <div className="w-1 h-20 bg-gray-400 mt-3"></div>
        </div>
    );
}

export default EmailSidebar;
