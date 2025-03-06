import { Link } from "react-router-dom";
import projects from "../data/projects";

function Projects() {
    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-6">
            <h1 className="text-4xl font-bold mb-6">Projects</h1>
            <p className="text-lg max-w-2xl mb-8">
                A showcase of my work, blending <span className="text-yellow-400">innovation, fintech solutions, and seamless user experiences</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
                        <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-bold text-yellow-400">{project.title}</h2>
                        <p className="text-gray-300">{project.description}</p>
                        <p className="mt-2 text-sm text-gray-400">Tech Stack: {project.techStack.join(", ")}</p>
                        <p className="mt-3 text-blue-400 hover:underline">View Details →</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Projects;
