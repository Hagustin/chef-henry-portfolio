import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { useEffect, useState } from "react";
import ProjectLoadingScreen from "../components/ProjectLoadingScreen";

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projects.find((p) => p.id === projectId);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2-second loading effect

        return () => clearTimeout(timeout);
    }, []);

    if (!project) {
        return <div className="text-center text-red-500 text-2xl mt-10">Project not found.</div>;
    }

    return loading ? (
        <ProjectLoadingScreen onFinish={() => setLoading(false)} />
    ) : (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
            <h1 className="text-4xl font-bold text-yellow-400 mb-6">{project.title}</h1>
            <img src={project.image} alt={project.title} className="w-full max-w-lg rounded-lg shadow-lg mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl">{project.description}</p>
            <p className="mt-4 text-gray-400">
                <span className="font-bold text-white">Tech Stack:</span> {project.techStack.join(", ")}
            </p>
            <div className="mt-6 flex space-x-4">
                {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
                        className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition">
                        Live Demo
                    </a>
                )}
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition">
                        GitHub Repo
                    </a>
                )}
            </div>
            <Link to="/" className="mt-6 text-blue-400 hover:underline">← Back to Home</Link>
        </div>
    );
};

export default ProjectDetails;
