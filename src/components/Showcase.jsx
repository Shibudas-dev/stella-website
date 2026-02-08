import { useState } from 'react';
import { Play, SlidersHorizontal, ListMusic, List, Music2, Zap, Clock, Sparkles } from 'lucide-react';

const showcaseItems = [
    {
        id: 'play',
        image: '/showcase/1play.png',
        title: 'Stunning Interactive Player',
        description: 'Experience music through an interface designed for the modern Discord user. Intuitive, responsive, and visually beautiful.',
        features: [
            { icon: <Zap className="w-4 h-4" />, title: 'Real-time Sync', desc: 'Live progress and state tracking' },
            { icon: <SlidersHorizontal className="w-4 h-4" />, title: 'Visual Control', desc: 'Interactive track management' },
            { icon: <Clock className="w-4 h-4" />, title: 'Reliable', desc: '24/7 uptime and crystal-clear audio' }
        ]
    },
    {
        id: 'filters',
        image: '/showcase/filtermanagement.png',
        title: 'Advanced Audio Filters',
        description: 'Transform your audio experience with powerful filters. From bassboost to nightcore, customize every beat exactly how you want.',
        features: [
            { icon: <SlidersHorizontal className="w-4 h-4" />, title: 'Preset Filters', desc: 'One-click audio presets' },
            { icon: <Sparkles className="w-4 h-4" />, title: 'Custom Mix', desc: 'Create your unique sound' },
            { icon: <Music2 className="w-4 h-4" />, title: 'Real-time Effects', desc: 'Instant audio transformation' }
        ]
    },
    {
        id: 'playlist',
        image: '/showcase/playlist.png',
        title: 'Playlist Management',
        description: 'Create, save, and manage your playlists effortlessly. Your favorite tracks, always at your fingertips.',
        features: [
            { icon: <ListMusic className="w-4 h-4" />, title: 'Unlimited Playlists', desc: 'Create as many as you want' },
            { icon: <Play className="w-4 h-4" />, title: 'Quick Play', desc: 'One-click playlist playback' },
            { icon: <Sparkles className="w-4 h-4" />, title: 'Smart Shuffle', desc: 'Intelligent song ordering' }
        ]
    },
    {
        id: 'queue',
        image: '/showcase/queuemangement.png',
        title: 'Queue Management',
        description: 'Take full control of your music queue. Reorder, remove, or shuffle tracks with intuitive queue controls.',
        features: [
            { icon: <List className="w-4 h-4" />, title: 'Drag & Drop', desc: 'Easy track reordering' },
            { icon: <Zap className="w-4 h-4" />, title: 'Skip & Jump', desc: 'Navigate queue instantly' },
            { icon: <ListMusic className="w-4 h-4" />, title: 'Loop Modes', desc: 'Track, queue, or autoplay' }
        ]
    },
    {
        id: 'spotify',
        image: '/showcase/spotifyplaylist.png',
        title: 'Spotify Integration',
        description: 'Seamlessly import and play your Spotify playlists. Connect your favorite streaming platform directly to Discord.',
        features: [
            { icon: <Music2 className="w-4 h-4" />, title: 'Import Playlists', desc: 'Sync your Spotify library' },
            { icon: <Sparkles className="w-4 h-4" />, title: 'Auto-match', desc: 'Best quality sources' },
            { icon: <Play className="w-4 h-4" />, title: 'Instant Play', desc: 'No setup required' }
        ]
    }
];

const Showcase = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = showcaseItems[activeIndex];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container px-8 md:px-16 lg:px-24 max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white italic">Everything You Need for</span>
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)] italic mb-6">
                        Perfect Harmony
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We've engineered every detail to deliver the most powerful and aesthetically pleasing music experience ever built for Discord.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {showcaseItems.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveIndex(index)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                                ${activeIndex === index
                                    ? 'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/30'
                                    : 'bg-neutral-900/80 text-gray-400 border border-white/10 hover:border-[var(--primary)]/50 hover:text-white'
                                }`}
                        >
                            {item.title.split(' ').slice(-2).join(' ')}
                        </button>
                    ))}
                </div>

                {/* Showcase Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 italic">
                            {activeItem.title}
                        </h3>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            {activeItem.description}
                        </p>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {activeItem.features.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 hover:border-[var(--primary)]/30 transition-all duration-300 group"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:scale-110 transition-transform">
                                            {feature.icon}
                                        </div>
                                        <span className="font-semibold text-white text-sm">{feature.title}</span>
                                    </div>
                                    <p className="text-gray-500 text-xs pl-11">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 lg:order-2 relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 text-[var(--primary)]">
                            <Sparkles className="w-full h-full" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 text-[var(--primary)]">
                            <Sparkles className="w-full h-full" />
                        </div>
                        <div className="absolute top-1/4 -left-8 w-4 h-4 text-[var(--primary)]">
                            <Sparkles className="w-full h-full" />
                        </div>

                        {/* Image Container */}
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group max-w-md mx-auto lg:mx-0">
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/0 via-[var(--primary)]/5 to-[var(--primary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <img
                                src={activeItem.image}
                                alt={activeItem.title}
                                className="w-full h-auto max-h-[400px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 right-8 bg-neutral-900/90 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3 shadow-xl">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-white font-medium text-sm">Reliable</span>
                            </div>
                            <p className="text-gray-500 text-xs mt-1">24/7 uptime and crystal-clear audio</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
