import { Link } from 'react-router-dom';
import { Music, Headphones, BarChart3, Star } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-24 pb-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_#050505_100%)]"></div>

            <div className="container relative z-10 px-4 lg:px-8 xl:px-16">
                {/* Desktop Layout: Two columns */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16">

                    {/* Left Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-1 lg:max-w-xl lg:ml-4 xl:ml-8">
                        {/* Floating elements (decorations) - Hidden on mobile */}
                        <div className="hidden lg:block absolute top-0 left-10 md:left-20 w-24 h-24 bg-gradient-to-br from-[var(--primary)] to-purple-600 rounded-2xl rotate-12 blur-2xl opacity-20 animate-[float_4s_ease-in-out_infinite]"></div>
                        <div className="hidden lg:block absolute bottom-20 right-10 md:right-20 w-32 h-32 bg-gradient-to-tr from-[var(--primary)] to-orange-500 rounded-full blur-3xl opacity-10 animate-[pulse-glow_5s_infinite]"></div>

                        {/* Tagline pill */}
                        <div className="mb-6 lg:mb-8 px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 flex items-center gap-2 animate-[fadeIn_0.6s_ease-out]">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-[var(--primary)] text-xs font-bold tracking-wider uppercase">Next Gen Audio</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 lg:mb-8 leading-[1.1] animate-[fadeIn_0.8s_ease-out] text-white">
                            Your Server's <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-purple-400 to-pink-400">Soundtrack</span>
                        </h1>

                        <p className="text-base md:text-lg text-gray-400 max-w-lg mb-8 lg:mb-10 leading-relaxed animate-[fadeIn_1s_ease-out]">
                            Elevate your Discord to a <span className="text-white font-semibold">premium music experience</span>.
                            Ultra-low latency, crystal-clear audio, and powerful features that keep the vibes flowing 24/7.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 lg:mb-16 animate-[fadeIn_1.2s_ease-out]">
                            <Link
                                to="/invite"
                                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--primary)] text-white text-base font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--primary-glow)]"
                            >
                                <span className="text-lg">+</span>
                                Add to Discord
                            </Link>

                            <Link
                                to="/support"
                                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-white/20 text-white text-base font-bold rounded-full transition-all hover:bg-white/5 hover:border-white/40"
                            >
                                <span className="text-lg">▶</span>
                                Join Support
                            </Link>
                        </div>

                        {/* Social proof - Mobile centered, Desktop left-aligned */}
                        <div className="flex items-center gap-6 animate-[fadeIn_1.4s_ease-out]">
                            <div className="flex items-center">
                                {/* Avatar stack */}
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 border-2 border-[#0a0a0a]"></div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-[#0a0a0a]"></div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-[#0a0a0a]"></div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-[#0a0a0a] flex items-center justify-center text-white text-xs font-bold">
                                        +2k
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400/50 fill-yellow-400/50'}`} />
                                    ))}
                                </div>
                                <span className="text-gray-400 text-sm">Loved by <span className="text-white font-semibold">600,000+</span> users</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Robot Card (Desktop Only) */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center mt-16 lg:mt-0 animate-[fadeIn_1s_ease-out]">
                        <div className="relative">
                            {/* Floating music note - top right */}
                            <div className="absolute -top-4 -right-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-[float_3s_ease-in-out_infinite]">
                                <Music className="w-6 h-6 text-pink-400" />
                            </div>

                            {/* Floating equalizer - bottom right */}
                            <div className="absolute -bottom-6 -right-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-[float_4s_ease-in-out_infinite_0.5s]">
                                <BarChart3 className="w-6 h-6 text-[var(--primary)]" />
                            </div>

                            {/* Main Robot Card */}
                            <div
                                className="relative w-[320px] h-[360px] rounded-[32px] overflow-hidden"
                                style={{
                                    background: 'linear-gradient(145deg, #1a1625 0%, #0d0a12 50%, #150f1a 100%)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    boxShadow: '0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
                                }}
                            >
                                {/* Corner glow */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-purple-500/30 blur-3xl"></div>
                                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[var(--primary)]/20 blur-3xl"></div>

                                {/* Robot Face */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        {/* Robot head/face container */}
                                        <div
                                            className="w-48 h-48 rounded-[28px] flex items-center justify-center relative overflow-hidden"
                                            style={{
                                                background: 'linear-gradient(180deg, #2a1f3d 0%, #1a1228 100%)',
                                                boxShadow: 'inset 0 -4px 20px rgba(171,0,255,0.2), 0 10px 40px rgba(0,0,0,0.3)'
                                            }}
                                        >
                                            {/* Headphone band hint */}
                                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-16 rounded-full bg-gray-600/50"></div>
                                            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-3 h-16 rounded-full bg-gray-600/50"></div>

                                            {/* Screen/Face */}
                                            <div
                                                className="w-36 h-28 rounded-2xl flex items-center justify-center gap-3"
                                                style={{
                                                    background: 'linear-gradient(180deg, #0a0810 0%, #060408 100%)',
                                                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)'
                                                }}
                                            >
                                                {/* Equalizer bars */}
                                                <div className="flex items-end gap-1.5 h-16">
                                                    <div className="w-2 bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-full animate-[equalizer_0.8s_ease-in-out_infinite]" style={{ height: '40%' }}></div>
                                                    <div className="w-2 bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-full animate-[equalizer_0.6s_ease-in-out_infinite_0.1s]" style={{ height: '70%' }}></div>
                                                    <div className="w-2 bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-full animate-[equalizer_0.7s_ease-in-out_infinite_0.2s]" style={{ height: '50%' }}></div>
                                                    <div className="w-2 bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-full animate-[equalizer_0.5s_ease-in-out_infinite_0.3s]" style={{ height: '85%' }}></div>
                                                    <div className="w-2 bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-full animate-[equalizer_0.9s_ease-in-out_infinite_0.15s]" style={{ height: '60%' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Headphone ear cups */}
                                        <div
                                            className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-20 rounded-l-2xl"
                                            style={{
                                                background: 'linear-gradient(180deg, #3d3d3d 0%, #2a2a2a 100%)',
                                                boxShadow: '-4px 0 15px rgba(0,0,0,0.3)'
                                            }}
                                        ></div>
                                        <div
                                            className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-20 rounded-r-2xl"
                                            style={{
                                                background: 'linear-gradient(180deg, #3d3d3d 0%, #2a2a2a 100%)',
                                                boxShadow: '4px 0 15px rgba(0,0,0,0.3)'
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Status indicator at bottom */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/5">
                                    <Headphones className="w-4 h-4 text-cyan-400" />
                                    <span className="text-xs text-gray-400">Streaming</span>
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section - Full Width Below */}
                <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 animate-[fadeIn_1.4s_ease-out] border-t border-white/5 pt-10 mt-16 lg:mt-20">
                    <div className="p-4 flex flex-col items-center hover:scale-105 transition-transform group">
                        <span className="text-3xl font-bold text-white mb-1 drop-shadow-md group-hover:text-[var(--primary)] transition-colors">
                            <AnimatedCounter end={1000} suffix="+" />
                        </span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Communities</span>
                    </div>
                    <div className="p-4 flex flex-col items-center hover:scale-105 transition-transform group">
                        <span className="text-3xl font-bold text-white mb-1 drop-shadow-md group-hover:text-[var(--primary)] transition-colors">
                            <AnimatedCounter end={600} suffix="k+" />
                        </span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Users</span>
                    </div>
                    <div className="p-4 flex flex-col items-center hover:scale-105 transition-transform group">
                        <span className="text-3xl font-bold text-white mb-1 drop-shadow-md group-hover:text-[var(--primary)] transition-colors">
                            <AnimatedCounter end={99.9} decimals={1} suffix="%" />
                        </span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Uptime Stats</span>
                    </div>
                    <div className="p-4 flex flex-col items-center hover:scale-105 transition-transform group">
                        <span className="text-3xl font-bold text-white mb-1 drop-shadow-md group-hover:text-[var(--primary)] transition-colors">
                            15ms
                        </span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Audio Latency</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
