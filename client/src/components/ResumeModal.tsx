function ResumeModal({ onClose }: { onClose: () => void }) {
    const openPdf = (filePath: string) => {
        window.open(`${window.location.origin}/resume/${filePath}`, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96 text-center">
                <h2 className="text-2xl font-bold mb-4">Resume</h2>

                <div className="space-y-4">
                    {/* Tech Resume */}
                    <button 
                        onClick={() => openPdf("Henry_Agustin_Tech_Resume.pdf")}
                        className="block bg-yellow-500 text-black w-full py-2 rounded hover:bg-yellow-400 transition"
                    >
                        Recent: Tech Resume
                    </button>

                    {/* Chef Resume */}
                    <button 
                        onClick={() => openPdf("Henry_Agustin_Chef_Resume.pdf")}
                        className="block bg-red-500 text-white w-full py-2 rounded hover:bg-red-400 transition"
                    >
                        Past Career: Chef Resume
                    </button>
                </div>

                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="mt-6 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default ResumeModal;
