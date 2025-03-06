function Contact() {
    const email = "henry.n.agustin@outlook.com"; 
    const subject = encodeURIComponent("Let's Connect!");
    const body = encodeURIComponent("Hi Henry,\n\nI came across your portfolio and would love to connect!\n\nBest,\n[Your Name]");

    return (
        <section id="contact" className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-900 text-white text-left px-6 py-16">
            <h1 className="text-4xl font-bold mb-6">Let's Connect</h1>
            <p className="text-lg max-w-2xl mb-6 text-gray-300">
                I'm actively seeking new opportunities and open to exciting projects. Whether you have a question, collaboration idea, or just want to say hello, I'd love to hear from you!
            </p>

            {/* Say Hello Button */}
            <a
                href={`mailto:${email}?subject=${subject}&body=${body}`}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
            >
                Say Hello 👋
            </a>

            {/* Social Links with Icons */}
            <div className="flex space-x-6 mt-6 text-3xl">
                {/* LinkedIn */}
                <a 
                    href="https://www.linkedin.com/in/henry-agustin-40896374/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition"
                >
                    <i className="fab fa-linkedin"></i>
                </a>

                {/* GitHub */}
                <a 
                    href="https://github.com/Hagustin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300 transition"
                >
                    <i className="fab fa-github"></i>
                </a>

                {/* Instagram */}
                <a 
                    href="https://www.instagram.com/henry.cook.fly/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition"
                >
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </section>
    );
}

export default Contact;
