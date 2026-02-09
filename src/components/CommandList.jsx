import { useState, useMemo } from 'react';
import { Search, Sliders, Music, ListMusic, Settings, Crown, LayoutGrid, Music2 } from 'lucide-react';
import CommandCard from './CommandCard';
import commandData from '../assets/commands.json';

// Generate categories dynamically from commands
const categories = ['All', ...new Set(commandData.map(cmd => cmd.category))].sort((a, b) => {
    if (a === 'All') return -1;
    if (b === 'All') return 1;
    return a.localeCompare(b);
});

// Icon mapping for categories
const categoryIcons = {
    'All': LayoutGrid,
    'Music': Music,
    'Filters': Sliders,
    'Playlists': ListMusic,
    'Settings': Settings,
    'Premium': Crown,
    'General': LayoutGrid,
    'Spotify': Music2
};

const CommandList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('All');

    const filteredCommands = useMemo(() => {
        return commandData.filter(cmd => {
            const matchesCategory = activeTab === 'All' || cmd.category === activeTab;
            const matchesSearch = cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (cmd.description && cmd.description.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, activeTab]);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            {/* Controls Section */}
            <div className="flex flex-col gap-8 mb-12">
                {/* Search Bar */}
                <div className="relative w-full max-w-2xl mx-auto group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-purple-600 rounded-full opacity-20 group-hover:opacity-40 blur transition-opacity"></div>
                    <div className="relative flex items-center bg-black/80 border border-white/10 rounded-full px-6 py-4 shadow-xl focus-within:border-[var(--primary)] focus-within:shadow-[0_0_20px_var(--primary-transparent)] transition-all">
                        <Search className="text-gray-400 w-6 h-6 mr-4" />
                        <input
                            type="text"
                            placeholder="Search for commands..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-transparent text-white text-lg placeholder-gray-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => {
                        const CategoryIcon = categoryIcons[cat] || LayoutGrid;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`group relative flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 overflow-hidden
                                    ${activeTab === cat
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                                style={{
                                    background: activeTab === cat
                                        ? 'linear-gradient(145deg, rgba(171,0,255,0.3) 0%, rgba(171,0,255,0.1) 100%)'
                                        : 'linear-gradient(145deg, #0e0c14 0%, #08070c 100%)',
                                    border: activeTab === cat
                                        ? '1px solid rgba(171,0,255,0.4)'
                                        : '1px solid rgba(255,255,255,0.04)',
                                    boxShadow: activeTab === cat
                                        ? '0 0 30px rgba(171,0,255,0.2), inset 0 0 20px rgba(171,0,255,0.1)'
                                        : '0 4px 20px rgba(0,0,0,0.2)'
                                }}
                            >
                                {/* Hover glow */}
                                <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl bg-[var(--primary)]" />

                                <CategoryIcon className={`w-4 h-4 transition-colors ${activeTab === cat ? 'text-[var(--primary)]' : 'text-gray-500 group-hover:text-[var(--primary)]'}`} />
                                <span className="relative">{cat}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCommands.length > 0 ? (
                    filteredCommands.map((cmd) => (
                        <CommandCard key={cmd.name} command={cmd} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <p className="text-2xl text-gray-500">No commands found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommandList;
