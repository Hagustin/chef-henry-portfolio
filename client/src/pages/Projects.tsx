import projects from "../data/projects"; // Import projects data

function Projects() {
    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-6">
            <h1 className="text-4xl font-bold mb-6">Projects</h1>
            <p className="text-lg max-w-2xl mb-8">
                A showcase of my work, blending **innovation, fintech solutions, and seamless user experiences**.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-bold text-yellow-400">{project.title}</h2>
                        <p className="text-gray-300">{project.description}</p>
                        <p className="mt-2 text-sm text-gray-400">Tech Stack: {project.techStack.join(", ")}</p>
                        <div className="mt-4 space-x-3">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                    className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400">
                                    Live Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                    className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600">
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
