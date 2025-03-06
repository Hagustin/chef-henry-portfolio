import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import projectDetails from "../data/projectDetails";
import { useEffect, useState } from "react";
import ProjectLoadingScreen from "../components/ProjectLoadingScreen";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const ProjectDetails = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const projectIndex = projects.findIndex((p) => p.id === projectId);
    const project = projects[projectIndex];
    const details = projectDetails[projectId as keyof typeof projectDetails];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    if (!project) {
        return <div className="text-center text-red-500 text-2xl mt-10">Project not found.</div>;
    }

    const handleNextProject = () => {
        const nextIndex = (projectIndex + 1) % projects.length;
        setLoading(true);
        setTimeout(() => {
            navigate(`/project/${projects[nextIndex].id}`);
        }, 500);
    };

    return loading ? (
        <ProjectLoadingScreen onFinish={() => setLoading(false)} />
    ) : (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-12">
            {/* Project Title */}
            <h1 className="text-5xl font-extrabold text-yellow-400 mb-8">{project.title}</h1>

            {/* Project Image */}
            <div className="w-full max-w-3xl mb-6">
                <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-lg border-4 border-gray-700" />
            </div>

            {/* Project Description */}
            <p className="text-lg text-gray-300 max-w-3xl text-center leading-relaxed">
                {project.description}
            </p>

            {/* Tech Stack */}
            <p className="mt-6 text-gray-400 text-lg font-medium">
                <span className="text-white font-bold">Tech Stack:</span> {project.techStack.join(", ")}
            </p>

            {/* Project Insights */}
            {details && (
                <div className="mt-12 max-w-3xl text-left">
                    <h2 className="text-3xl text-yellow-400 font-bold mb-4">Project Impact</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{details.impact}</p>

                    <h2 className="text-3xl text-yellow-400 font-bold mt-8 mb-4">Challenges</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{details.struggles}</p>

                    <h2 className="text-3xl text-yellow-400 font-bold mt-8 mb-4">Future Plans</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{details.future}</p>

                    {/* Performance Chart */}
                    <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mt-10">
                        <h2 className="text-3xl text-yellow-400 font-bold mb-4 text-center">Performance Metrics</h2>
                        <Bar 
                            data={{
                                labels: ["Users Impacted", details.stats.transactionsPerDay ? "Transactions Per Day" : "Articles Fetched", "Growth Rate (%)"],
                                datasets: [{
                                    label: "Performance",
                                    data: [
                                        details.stats.usersImpacted,
                                        details.stats.transactionsPerDay ?? details.stats.articlesFetched,
                                        details.stats.growthRate
                                    ],
                                    backgroundColor: "rgba(255, 193, 7, 0.8)",
                                }]
                            }}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: { y: { beginAtZero: true } }
                            }}
                            className="h-48 sm:h-56 md:h-64 lg:h-72"
                        />
                    </div>
                </div>
            )}

            {/* Buttons */}
            <div className="mt-12 flex space-x-6">
                {project.liveDemo && (
                    <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-5 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition">
                        🔗 Live Demo
                    </a>
                )}
                {project.github && (
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-5 py-3 bg-gray-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition">
                        🖥️ GitHub Repo
                    </a>
                )}
            </div>

            {/* Navigation */}
            <div className="mt-10 flex space-x-6">
                <button 
                    onClick={handleNextProject} 
                    className="px-5 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-400 transition">
                    Next Project →
                </button>
                <Link 
                    to="/" 
                    className="px-5 py-3 bg-gray-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetails;
