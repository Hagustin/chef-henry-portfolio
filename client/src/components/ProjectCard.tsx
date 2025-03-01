import { Link } from "react-router-dom";

interface ProjectProps {
    title: string;
    description: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    imageUrl?: string;
}

function ProjectCard({ title, description, techStack, liveUrl, githubUrl, imageUrl }: ProjectProps) {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-white">
            {imageUrl && <img src={imageUrl} alt={title} className="rounded-lg mb-4" />}
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="mt-2">{description}</p>
            <div className="mt-4">
                <span className="font-semibold">Tech Stack:</span>
                <ul className="flex flex-wrap mt-1">
                    {techStack.map((tech, index) => (
                        <li key={index} className="bg-blue-500 text-white px-2 py-1 rounded text-sm mr-2 mt-1">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-4 flex space-x-4">
                {liveUrl && <Link to={liveUrl} target="_blank" className="bg-green-500 px-4 py-2 rounded text-white">Live Demo</Link>}
                {githubUrl && <Link to={githubUrl} target="_blank" className="bg-gray-600 px-4 py-2 rounded text-white">GitHub</Link>}
            </div>
        </div>
    );
}

export default ProjectCard;
