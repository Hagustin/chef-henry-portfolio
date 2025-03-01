import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import panAnimation from "../animations/pan.json";

function LoadingScreen({ onFinish }: { onFinish: () => void }) {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 500);

        const timeout = setTimeout(() => {
            onFinish(); // Hide loading after 3 seconds
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [onFinish]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
            <div className="w-48 h-48 mb-4">
                <Lottie animationData={panAnimation} loop />
            </div>
            <h1 className="text-3xl font-bold">Cooking up something amazing{dots}</h1>
        </div>
    );
}

export default LoadingScreen;
