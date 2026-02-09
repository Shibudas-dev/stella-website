import { Music, Zap, Headphones, Radio, ListOrdered, Sliders } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Music,
            iconBg: 'bg-gradient-to-br from-orange-400 to-orange-600',
            category: 'STREAMING SOURCES',
            title: 'Multi-Platform',
            description: 'Stream from Spotify, SoundCloud, YouTube, Apple Music, and 20+ platforms.',
            badge: '20+ Sources',
            badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30'
        },
        {
            icon: Headphones,
            iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600',
            category: 'CRYSTAL CLEAR',
            title: 'Hi-Fi Audio',
            description: 'Premium 320kbps audio streaming with lossless quality for audiophiles.',
            badge: '320kbps',
            badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
        },
        {
            icon: Zap,
            iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500',
            category: 'LOW LATENCY',
            title: 'Ultra Fast',
            description: 'Instant response with globally distributed edge infrastructure.',
            badge: '<15ms',
            badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30'
        },
        {
            icon: ListOrdered,
            iconBg: 'bg-gradient-to-br from-teal-400 to-cyan-600',
            category: 'ADVANCED CONTROLS',
            title: 'Smart Queue',
            description: 'Powerful queue management with shuffle, loop, and smart playlists.',
            badge: 'Unlimited',
            badgeBg: 'bg-teal-500/20 text-teal-400 border-teal-500/30'
        },
        {
            icon: Sliders,
            iconBg: 'bg-gradient-to-br from-purple-400 to-purple-600',
            category: 'AUDIO EFFECTS',
            title: 'Custom Filters',
            description: 'Bassboost, Nightcore, Vaporwave, 8D Audio, and many more effects.',
            badge: '15+ Filters',
            badgeBg: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
        },
        {
            icon: Radio,
            iconBg: 'bg-gradient-to-br from-pink-400 to-rose-600',
            category: '24/7 PLAYBACK',
            title: 'Always Online',
            description: 'Keep the music playing around the clock with persistent connections.',
            badge: '99.9% Uptime',
            badgeBg: 'bg-pink-500/20 text-pink-400 border-pink-500/30'
        }
    ];

    return (
        <section className="py-20 md:py-28 relative overflow-hidden">
            {/* Aurora mesh gradient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--primary)]/5 rounded-full blur-[150px]" />
            </div>

            <div className="container px-4 relative z-10">
                <div className="text-center mb-14 md:mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold uppercase tracking-wider mb-5">
                        Features
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
                        Power Up Your <span className="text-[var(--primary)]">Listening</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Stella is packed with features designed to provide the perfect atmosphere for your server.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="relative p-6 md:p-8 rounded-[24px] transition-all duration-500 group overflow-hidden hover:scale-[1.02] hover:-translate-y-1"
                                style={{
                                    background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                                    border: '1px solid rgba(255,255,255,0.04)',
                                    boxShadow: '0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)'
                                }}
                            >
                                {/* Corner gradient glow - top left */}
                                <div
                                    className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-3xl"
                                    style={{
                                        background: feature.iconBg.includes('orange') ? 'rgba(251,146,60,0.4)'
                                            : feature.iconBg.includes('blue') ? 'rgba(96,165,250,0.4)'
                                                : feature.iconBg.includes('amber') ? 'rgba(251,191,36,0.4)'
                                                    : feature.iconBg.includes('teal') ? 'rgba(45,212,191,0.4)'
                                                        : feature.iconBg.includes('purple') ? 'rgba(168,85,247,0.4)'
                                                            : 'rgba(244,114,182,0.4)'
                                    }}
                                />

                                {/* Corner gradient glow - bottom right */}
                                <div
                                    className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-3xl"
                                    style={{
                                        background: feature.iconBg.includes('orange') ? 'rgba(251,146,60,0.3)'
                                            : feature.iconBg.includes('blue') ? 'rgba(96,165,250,0.3)'
                                                : feature.iconBg.includes('amber') ? 'rgba(251,191,36,0.3)'
                                                    : feature.iconBg.includes('teal') ? 'rgba(45,212,191,0.3)'
                                                        : feature.iconBg.includes('purple') ? 'rgba(168,85,247,0.3)'
                                                            : 'rgba(244,114,182,0.3)'
                                    }}
                                />

                                {/* Hover border glow */}
                                <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        boxShadow: feature.iconBg.includes('orange') ? '0 0 40px rgba(251,146,60,0.15), inset 0 0 1px rgba(251,146,60,0.3)'
                                            : feature.iconBg.includes('blue') ? '0 0 40px rgba(96,165,250,0.15), inset 0 0 1px rgba(96,165,250,0.3)'
                                                : feature.iconBg.includes('amber') ? '0 0 40px rgba(251,191,36,0.15), inset 0 0 1px rgba(251,191,36,0.3)'
                                                    : feature.iconBg.includes('teal') ? '0 0 40px rgba(45,212,191,0.15), inset 0 0 1px rgba(45,212,191,0.3)'
                                                        : feature.iconBg.includes('purple') ? '0 0 40px rgba(168,85,247,0.15), inset 0 0 1px rgba(168,85,247,0.3)'
                                                            : '0 0 40px rgba(244,114,182,0.15), inset 0 0 1px rgba(244,114,182,0.3)'
                                    }}
                                />

                                <div className="relative flex items-start justify-between mb-6">
                                    {/* Icon - No hover animation */}
                                    <div className={`
                                        w-12 h-12 rounded-xl ${feature.iconBg}
                                        flex items-center justify-center
                                        shadow-lg
                                    `}>
                                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                                    </div>

                                    {/* Badge */}
                                    <div className={`
                                        px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide
                                        border ${feature.badgeBg}
                                    `}>
                                        {feature.badge}
                                    </div>
                                </div>

                                {/* Category */}
                                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                                    {feature.category}
                                </p>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
