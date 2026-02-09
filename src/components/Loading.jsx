import { useState, useEffect } from 'react';

const Loading = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Animate progress
        const duration = 1500; // 1.5 seconds
        const interval = 20;
        const increment = (100 / duration) * interval;

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setFadeOut(true);
                    setTimeout(() => {
                        onComplete?.();
                    }, 500);
                    return 100;
                }
                return Math.min(prev + increment, 100);
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            {/* Background gradient effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[150px] animate-pulse" />
            </div>

            <div className="relative flex flex-col items-center">
                {/* Logo Container */}
                <div className="relative mb-8">
                    {/* Outer glow ring */}
                    <div
                        className="absolute inset-0 -m-4 rounded-full animate-spin"
                        style={{
                            background: `conic-gradient(from 0deg, transparent, var(--primary), transparent)`,
                            filter: 'blur(8px)',
                            opacity: 0.5
                        }}
                    />

                    {/* Logo */}
                    <div
                        className="relative w-24 h-24 rounded-3xl flex items-center justify-center overflow-hidden"
                        style={{
                            background: 'linear-gradient(145deg, #1a1625 0%, #0d0a12 100%)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px var(--primary-glow)'
                        }}
                    >
                        <img
                            src="/logo.png"
                            alt="Stella"
                            className="w-16 h-16 object-contain animate-pulse"
                        />
                    </div>

                    {/* Orbiting dots */}
                    <div className="absolute inset-0 -m-8 animate-spin" style={{ animationDuration: '3s' }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--primary)]" />
                    </div>
                    <div className="absolute inset-0 -m-8 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-400" />
                    </div>
                </div>

                {/* Brand Name */}
                <h1 className="text-3xl font-black tracking-tight text-white mb-6">
                    <span className="text-[var(--primary)]">STELLA</span>
                </h1>

                {/* Progress Bar */}
                <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-purple-500 transition-all duration-100 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Loading Text */}
                <p className="mt-4 text-gray-500 text-sm font-medium animate-pulse">
                    Loading your experience...
                </p>
            </div>
        </div>
    );
};

export default Loading;
