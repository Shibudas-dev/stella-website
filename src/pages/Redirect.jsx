import { useEffect } from 'react';

const Redirect = ({ to }) => {
    useEffect(() => {
        window.location.href = to;
    }, [to]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-400 animate-pulse">Redirecting to {to.includes('discord') ? 'Discord' : 'destination'}...</p>
            </div>
        </div>
    );
};

export default Redirect;
