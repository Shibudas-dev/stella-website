import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 md:pt-48 pb-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_#050505_100%)]"></div>

            <div className="container relative z-10 flex flex-col items-center text-center px-4">

                {/* Floating elements teaser (decorations) */}
                <div className="absolute top-0 left-10 md:left-20 w-24 h-24 bg-gradient-to-br from-[var(--primary)] to-purple-600 rounded-2xl rotate-12 blur-2xl opacity-20 animate-[float_4s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-20 right-10 md:right-20 w-32 h-32 bg-gradient-to-tr from-[var(--primary)] to-orange-500 rounded-full blur-3xl opacity-10 animate-[pulse-glow_5s_infinite]"></div>

                {/* Tagline pill */}
                <div className="mb-8 px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold tracking-wide uppercase animate-[fadeIn_0.6s_ease-out]">
                    🚀 The #1 Discord Music Experience
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] animate-[fadeIn_0.8s_ease-out] text-white">
                    Feel the <span className="text-[var(--primary)] drop-shadow-[0_0_40px_var(--primary-glow)]">Beat</span> <br />
                    in your Server
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed animate-[fadeIn_1s_ease-out]">
                    The ultimate music bot designed for high-performance communities.
                    Rotating <span className="text-white font-semibold">proxies</span>, <span className="text-white font-semibold">24/7 uptime</span>, and seamless Spotify integration.
                </p>

                <div className="flex flex-col md:flex-row gap-5 w-full max-w-md md:max-w-none justify-center mb-24 animate-[fadeIn_1.2s_ease-out]">
                    <Link
                        to="/invite"
                        className="group px-8 py-4 bg-[var(--primary)] text-white text-lg font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--primary-glow)]"
                    >
                        Add to Discord
                    </Link>

                    <Link
                        to="/support"
                        className="group px-8 py-4 bg-transparent border border-white/20 text-white text-lg font-bold rounded-full transition-all hover:bg-white/5 hover:border-white/40"
                    >
                        Join Support
                    </Link>
                </div>

                {/* Stats Section */}
                <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 animate-[fadeIn_1.4s_ease-out] border-t border-white/5 pt-10">
                    <div className="p-4 flex flex-col items-center hover:scale-105 transition-transform">
                        <span className="text-3xl font-bold text-white mb-1 drop-shadow-md">10,000+</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Communities</span>
                    </div>
                    <div className="p-4 flex flex-col items-center hover:scale-105 transition-transform">
                        <span className="text-3xl font-bold text-white mb-1 drop-shadow-md">1M+</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Active Users</span>
                    </div>
                    <div className="p-4 flex flex-col items-center hover:scale-105 transition-transform">
                        <span className="text-3xl font-bold text-white mb-1 drop-shadow-md">99.9%</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Uptime Stats</span>
                    </div>
                    <div className="p-4 flex flex-col items-center hover:scale-105 transition-transform">
                        <span className="text-3xl font-bold text-white mb-1 drop-shadow-md">0ms</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Audio Latency</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
