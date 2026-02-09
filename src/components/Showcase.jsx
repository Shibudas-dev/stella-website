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
                    {showcaseItems.map((item, index) => {
                        const IconMap = {
                            'play': Play,
                            'filters': SlidersHorizontal,
                            'playlist': ListMusic,
                            'queue': List,
                            'spotify': Music2
                        };
                        const TabIcon = IconMap[item.id] || Play;

                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveIndex(index)}
                                className={`group relative flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 overflow-hidden
                                    ${activeIndex === index
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                                style={{
                                    background: activeIndex === index
                                        ? 'linear-gradient(145deg, rgba(171,0,255,0.3) 0%, rgba(171,0,255,0.1) 100%)'
                                        : 'linear-gradient(145deg, #0e0c14 0%, #08070c 100%)',
                                    border: activeIndex === index
                                        ? '1px solid rgba(171,0,255,0.4)'
                                        : '1px solid rgba(255,255,255,0.04)',
                                    boxShadow: activeIndex === index
                                        ? '0 0 30px rgba(171,0,255,0.2), inset 0 0 20px rgba(171,0,255,0.1)'
                                        : '0 4px 20px rgba(0,0,0,0.2)'
                                }}
                            >
                                {/* Hover glow */}
                                <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl bg-[var(--primary)]" />

                                <TabIcon className={`w-4 h-4 transition-colors ${activeIndex === index ? 'text-[var(--primary)]' : 'text-gray-500 group-hover:text-[var(--primary)]'}`} />
                                <span className="relative">{item.title.split(' ').slice(-2).join(' ')}</span>
                            </button>
                        );
                    })}
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
                                    className="relative p-5 rounded-2xl transition-all duration-500 group/card overflow-hidden hover:scale-[1.02] hover:-translate-y-1"
                                    style={{
                                        background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                                        border: '1px solid rgba(255,255,255,0.04)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    {/* Corner glow */}
                                    <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full opacity-30 group-hover/card:opacity-60 transition-opacity duration-700 blur-2xl bg-[var(--primary)]" />

                                    {/* Hover border glow */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{ boxShadow: '0 0 30px rgba(171,0,255,0.15), inset 0 0 1px rgba(171,0,255,0.3)' }}
                                    />

                                    <div className="relative flex items-center gap-3 mb-2">
                                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--primary)] to-purple-600 flex items-center justify-center text-white shadow-lg">
                                            {feature.icon}
                                        </div>
                                        <span className="font-semibold text-white text-sm">{feature.title}</span>
                                    </div>
                                    <p className="relative text-gray-500 text-xs pl-12">{feature.desc}</p>
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
                        <div
                            className="relative rounded-[28px] overflow-hidden group max-w-md mx-auto lg:mx-0 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                            style={{
                                background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                boxShadow: '0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)'
                            }}
                        >
                            {/* Corner gradient glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-3xl bg-[var(--primary)]" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-3xl bg-purple-500" />

                            {/* Hover border glow */}
                            <div
                                className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ boxShadow: '0 0 40px rgba(171,0,255,0.15), inset 0 0 2px rgba(171,0,255,0.3)' }}
                            />

                            {/* Image */}
                            <img
                                src={activeItem.image}
                                alt={activeItem.title}
                                className="relative w-full h-auto max-h-[400px] object-contain p-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
