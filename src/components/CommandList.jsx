import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import CommandCard from './CommandCard';
import commandData from '../assets/commands.json';

const categories = ['All', 'Music', 'Filters', 'Playlists', 'Spotify', 'Settings', 'YouTube'];

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
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${activeTab === cat
                                    ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-[0_0_15px_var(--primary-glow)] scale-105'
                                    : 'bg-transparent text-gray-400 border-white/10 hover:border-[var(--primary)] hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
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
