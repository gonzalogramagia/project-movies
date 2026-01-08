import { useState, useEffect } from "react";

const RankingToast = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
            <div className="relative bg-yellow-400 text-black p-4 rounded-md shadow-lg overflow-hidden text-left">
                <div className="pr-8">
                    <h3 className="font-bold mb-1">Ranking System</h3>
                    <p className="text-sm">
                        The trending list is updated based on the most frequently searched
                        movies by testers.
                    </p>
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 text-black hover:text-gray-800 transition-colors"
                    aria-label="Close"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-black w-full animate-progress origin-left"></div>
            </div>

            <style>{`
        @keyframes progress {
          from { transform: scaleX(1); }
          to { transform: scaleX(0); }
        }
        .animate-progress {
          animation: progress 4s linear forwards;
        }
      `}</style>
        </div>
    );
};

export default RankingToast;
