function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-left px-6">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <div className="flex flex-col md:flex-row items-start max-w-5xl space-x-6">
                {/* Profile Image (Square) */}
                <img 
                    src="/images/profile.jpg" 
                    alt="Henry Agustin" 
                    className="w-60 h-60 md:w-72 md:h-72 object-cover shadow-lg transition-transform duration-500 transform hover:scale-105"
                />

                {/* About Content */}
                <div className="text-left">
                    <p className="text-lg text-gray-300">
                        Hello! My name is Henry, and I take **pride in crafting both exquisite dishes and high-quality code**.  
                        My journey from the **heat of the kitchen** to the **world of technology** has been fueled by passion, precision, and problem-solving.
                    </p>

                    <p className="mt-4 text-gray-400">
                        My interest in web development started while optimizing workflows in my own kitchen, designing tools to **streamline processes, reduce waste, and improve efficiency**.  
                        It turns out that the skills I honed as a **sous chef**—**timing, adaptability, and precision**—translate perfectly into software development.
                    </p>

                    <p className="mt-4 text-gray-400">
                        Fast forward to today, I specialize in **full-stack development**, building innovative solutions in **fintech, automation, and AI-driven applications**.
                        I focus on creating **user-friendly, scalable, and impactful products** that help businesses and individuals thrive in the digital world.
                    </p>

                    <p className="mt-4 text-gray-400">
                        Here are some of the technologies I’ve been working with recently:
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
                        <span className="bg-gray-800 text-white px-3 py-1 rounded">JavaScript (ES6+)</span>
                        <span className="bg-gray-800 text-white px-3 py-1 rounded">TypeScript</span>
                        <span className="bg-gray-800 text-white px-3 py-1 rounded">React</span>
                        <span className="bg-gray-800 text-white px-3 py-1 rounded">Node.js</span>
                        <span className="bg-gray-800 text-white px-3 py-1 rounded">GraphQL</span>
                        <span className="bg-gray-800 text-white px-3 py-1 rounded">MongoDB</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
