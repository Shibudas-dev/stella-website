import { Music, Zap, Shield, Radio, Server, Sliders } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Music className="w-6 h-6 text-[var(--primary)]" />,
            title: "24/7 Music Bot",
            description: "Keep the party going non-stop with our always-online infrastructure."
        },
        {
            icon: <Sliders className="w-6 h-6 text-[var(--primary)]" />,
            title: "Advanced Audio Filters",
            description: "Customize your sound with Bassboost, Nightcore, Vaporwave, and more."
        },
        {
            icon: <Shield className="w-6 h-6 text-[var(--primary)]" />,
            title: "Role Permissions",
            description: "Control who can skip, pause, or change volume with easy role setups."
        },
        {
            icon: <Zap className="w-6 h-6 text-[var(--primary)]" />,
            title: "Low Latency",
            description: "Optimized nodes ensure lag-free playback for the best listening experience."
        },
        {
            icon: <Radio className="w-6 h-6 text-[var(--primary)]" />,
            title: "Social Integration",
            description: "Seamlessly play from Spotify, YouTube, SoundCloud, and more."
        },
        {
            icon: <Server className="w-6 h-6 text-[var(--primary)]" />,
            title: "Music Stations",
            description: "Preset radio stations for Lo-Fi, Pop, and trending hits."
        }
    ];

    return (
        <section className="py-20 relative">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold uppercase tracking-wider mb-4">
                        Features
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Power Up Your <span className="text-[var(--primary)]">Listening</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Stella is packed with features designed to provide the perfect atmosphere for your server.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-[var(--primary)]/50 hover:bg-neutral-900/80 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
