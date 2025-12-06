import React from 'react';
import { Terminal } from 'lucide-react';

const CommandCard = ({ command }) => {
    return (
        <div className="group relative p-6 bg-[var(--bg-card)] border border-white/5 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:border-[var(--primary)] hover:shadow-[0_0_20px_var(--primary-transparent)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--primary)] transition-colors font-mono">
                    {command.name}
                </h3>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-[var(--primary)] transition-all">
                    {command.category}
                </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                {command.description || "No description available."}
            </p>

            {/* Hover Icon Effect */}
            <Terminal className="absolute -bottom-4 -right-4 w-24 h-24 text-[var(--primary)] opacity-0 group-hover:opacity-10 transition-all duration-500 rotate-12" />
        </div>
    );
};

export default CommandCard;
