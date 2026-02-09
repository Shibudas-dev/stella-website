import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, Terminal, ArrowRight, Sparkles } from 'lucide-react';
import commandData from '../assets/commands.json';

// Most important music commands to display
const quickCommands = [
    { name: 'play', usage: '/play <query>', description: 'Play a song from YouTube, Spotify, SoundCloud' },
    { name: 'queue', usage: '/queue', description: 'Display the current music queue' },
    { name: 'skip', usage: '/skip', description: 'Skip the currently playing track' },
    { name: 'pause', usage: '/pause', description: 'Pause the currently playing track' },
    { name: 'stop', usage: '/stop', description: 'Stop playback and clear the queue' },
    { name: 'loop', usage: '/loop <mode>', description: 'Set loop mode: off, track, or queue' },
    { name: 'shuffle', usage: '/shuffle', description: 'Shuffle the current queue' },
    { name: 'volume', usage: '/volume <1-100>', description: 'Adjust the playback volume' },
    { name: 'lyrics', usage: '/lyrics', description: 'Display lyrics for the current song' },
];

const QuickCommands = () => {
    const [copiedIndex, setCopiedIndex] = useState(null);
    const totalCommands = commandData.length;

    const handleCopy = async (command, index) => {
        try {
            await navigator.clipboard.writeText(`/${command}`);
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <section className="py-20 md:py-28 relative overflow-hidden">
            {/* Aurora background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--primary)]/10 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-5">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Popular Commands</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Quick </span>
                        <span className="text-[var(--primary)]">Commands</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        Most used commands to get you started
                    </p>
                </div>

                {/* Commands Grid */}
                <div
                    className="max-w-5xl mx-auto p-6 md:p-8 rounded-[32px] mb-8"
                    style={{
                        background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                        border: '1px solid rgba(255,255,255,0.04)',
                        boxShadow: '0 25px 80px rgba(0,0,0,0.4)'
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {quickCommands.map((cmd, index) => (
                            <div
                                key={cmd.name}
                                className="group relative p-4 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.02]"
                                style={{
                                    background: 'rgba(255,255,255,0.01)',
                                    border: '1px solid rgba(255,255,255,0.04)'
                                }}
                            >
                                {/* Corner glow on hover */}
                                <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl bg-[var(--primary)]" />

                                <div className="relative flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-purple-600 flex items-center justify-center">
                                            <Terminal className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="font-bold text-white font-mono text-sm">/{cmd.name}</span>
                                    </div>

                                    {/* Usage Badge + Copy */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
                                            {cmd.usage}
                                        </span>
                                        <button
                                            onClick={() => handleCopy(cmd.name, index)}
                                            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200
                                                ${copiedIndex === index
                                                    ? 'bg-emerald-500/20 text-emerald-400'
                                                    : 'bg-white/5 text-gray-400 hover:bg-[var(--primary)]/20 hover:text-[var(--primary)]'
                                                }`}
                                        >
                                            {copiedIndex === index ? (
                                                <Check className="w-3.5 h-3.5" />
                                            ) : (
                                                <Copy className="w-3.5 h-3.5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <p className="relative text-gray-500 text-xs pl-11">{cmd.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Divider Line */}
                    <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Footer: Total Commands + View All Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-[var(--primary)]" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold text-white">{totalCommands}</span>
                                <span className="text-gray-400 text-sm ml-2">Total Commands</span>
                            </div>
                        </div>

                        <Link
                            to="/commands"
                            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary)] text-white font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--primary-glow)]"
                        >
                            View All Commands
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuickCommands;
