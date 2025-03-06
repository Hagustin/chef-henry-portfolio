import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../animations/fire.json";

const ProjectLoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 500);

        const timeout = setTimeout(() => {
            onFinish(); // Hide loading after 2 seconds
        }, 2000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [onFinish]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
            <div className="w-32 h-32 md:w-40 md:h-40 mb-6 flex items-center justify-center">
                <Lottie animationData={loadingAnimation} loop />
            </div>
            <h1 className="text-xl md:text-2xl font-semibold mt-4">Serving it hot!!{dots}</h1>
        </div>
    );
};

export default ProjectLoadingScreen;
