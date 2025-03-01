function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-6">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <div className="flex flex-col md:flex-row items-center max-w-4xl">
                {/* Profile Image */}
                <img src="/images/profile.png" alt="Henry Agustin" className="w-48 h-48 rounded-full shadow-lg mb-6 md:mb-0 md:mr-6" />

                {/* About Content */}
                <div className="text-left">
                    <p className="text-lg text-gray-300">
                        From the **heat of the kitchen** to the **world of code**, my journey as a software developer is built on creativity, precision, and problem-solving.
                    </p>
                    <p className="mt-4 text-gray-400">
                        My passion for tech started while optimizing workflows in the kitchen—precision, timing, and adaptability are key in both cooking and software development.
                        I love **crafting both exquisite food and high-quality code**, blending art with logic to build seamless, human-centered digital experiences.
                    </p>
                    <p className="mt-4 text-gray-400">
                        My experience spans **fintech, automation, and AI-driven applications**, where I bring my attention to detail and problem-solving mindset from the culinary world into tech.
                        Currently, I am focusing on building **accessible, secure, and innovative fintech solutions**.
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-yellow-400">Technologies I work with:</h2>
                        <div className="flex flex-wrap mt-2 space-x-3">
                            <span className="bg-gray-800 text-white px-3 py-1 rounded">JavaScript</span>
                            <span className="bg-gray-800 text-white px-3 py-1 rounded">TypeScript</span>
                            <span className="bg-gray-800 text-white px-3 py-1 rounded">React</span>
                            <span className="bg-gray-800 text-white px-3 py-1 rounded">Node.js</span>
                            <span className="bg-gray-800 text-white px-3 py-1 rounded">GraphQL</span>
                            <span className="bg-gray-800 text-white px-3 py-1 rounded">MongoDB</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
