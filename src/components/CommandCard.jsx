import { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

const CommandCard = ({ command }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(`/${command.name}`);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div
            className="group relative p-5 md:p-6 rounded-[20px] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
            style={{
                background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                border: '1px solid rgba(255,255,255,0.04)',
                boxShadow: '0 4px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)'
            }}
        >
            {/* Corner gradient glow - top left */}
            <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-3xl bg-[var(--primary)]" />

            {/* Corner gradient glow - bottom right */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-3xl bg-purple-500" />

            {/* Hover border glow */}
            <div
                className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 35px rgba(171,0,255,0.12), inset 0 0 1px rgba(171,0,255,0.25)' }}
            />

            {/* Top gradient line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex items-start justify-between gap-3 mb-3">
                {/* Command Name with Icon */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-purple-600 flex items-center justify-center shadow-lg">
                        <Terminal className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-white font-mono group-hover:text-[var(--primary)] transition-colors">
                        /{command.name}
                    </h3>
                </div>

                {/* Copy Button */}
                <button
                    onClick={handleCopy}
                    className={`
                        flex items-center justify-center w-9 h-9 rounded-lg
                        transition-all duration-300
                        ${copied
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-[var(--primary)]/20 hover:text-[var(--primary)] hover:border-[var(--primary)]/30'
                        }
                    `}
                    title="Copy command"
                >
                    {copied ? (
                        <Check className="w-4 h-4" />
                    ) : (
                        <Copy className="w-4 h-4" />
                    )}
                </button>
            </div>

            {/* Category Badge */}
            <div className="relative mb-3">
                <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/5 uppercase tracking-wider group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)] group-hover:border-[var(--primary)]/20 transition-all">
                    {command.category}
                </span>
            </div>

            {/* Description */}
            <p className="relative text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {command.description || "No description available."}
            </p>
        </div>
    );
};

export default CommandCard;
