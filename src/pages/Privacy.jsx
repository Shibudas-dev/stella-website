import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const sections = [
    { id: 'info-collect', title: '1. Information We Collect' },
    { id: 'how-use', title: '2. How We Use Your Data' },
    { id: 'storage', title: '3. Data Storage & Security' },
    { id: 'retention', title: '4. Data Retention' },
    { id: 'rights', title: '5. Your Rights' },
    { id: 'opting-out', title: '6. Opting Out' },
    { id: 'anonymous', title: '7. Anonymous Messaging' },
    { id: 'third-party', title: '8. Third-Party Services' },
    { id: 'children', title: '9. Children\'s Privacy' },
    { id: 'changes', title: '10. Changes to This Policy' },
    { id: 'contact', title: '11. Contact Us' },
];

const Privacy = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-[#060508] text-white">
            {/* Hero Header */}
            <div className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-blue-600/8 rounded-full blur-[120px]" />
                    <div className="absolute top-20 right-1/3 w-[500px] h-[300px] bg-[var(--primary)]/6 rounded-full blur-[100px]" />
                </div>
                <div className="container px-4 relative z-10 text-center">
                    <p className="text-[var(--primary)] text-sm font-semibold uppercase tracking-widest mb-4">Legal</p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        How Stella collects, uses, and protects your information.
                    </p>
                    <p className="text-gray-500 text-sm mt-6">Last Updated: February 18, 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="container px-4 pb-20">
                <div className="max-w-6xl mx-auto flex gap-10">
                    {/* Sidebar - Table of Contents */}
                    <aside className="hidden lg:block w-72 shrink-0">
                        <div className="sticky top-28">
                            <div
                                className="rounded-2xl p-5"
                                style={{
                                    background: 'linear-gradient(145deg, rgba(14,12,20,0.9) 0%, rgba(8,7,12,0.9) 100%)',
                                    border: '1px solid rgba(255,255,255,0.04)',
                                }}
                            >
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">On this page</p>
                                <nav className="flex flex-col gap-1">
                                    {sections.map(({ id, title }) => (
                                        <button
                                            key={id}
                                            onClick={() => scrollTo(id)}
                                            className={`text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 ${activeSection === id
                                                    ? 'text-white bg-white/5 border-l-2 border-[var(--primary)]'
                                                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'
                                                }`}
                                        >
                                            {title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        <div
                            className="rounded-3xl p-6 md:p-10"
                            style={{
                                background: 'linear-gradient(145deg, rgba(14,12,20,0.8) 0%, rgba(8,7,12,0.8) 100%)',
                                border: '1px solid rgba(255,255,255,0.04)',
                            }}
                        >
                            {/* Intro */}
                            <p className="text-gray-300 text-base leading-relaxed mb-10">
                                This Privacy Policy describes how <strong className="text-white">Stella</strong> ("the Bot", "we", "us") collects, uses, and protects your information when you interact with the Bot on Discord. By using Stella, you agree to the collection and use of information in accordance with this policy.
                            </p>

                            {/* Section 1 */}
                            <section id="info-collect" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>

                                <h3 className="text-lg font-semibold text-white mb-4">1.1 Automatically Collected Data</h3>
                                <p className="text-gray-400 mb-4">When you use Stella, we automatically collect and store:</p>
                                <div className="overflow-x-auto mb-8">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Data</th>
                                                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Purpose</th>
                                                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Stored As</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-400">
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Discord User ID</td>
                                                <td className="py-3 px-4">Identify your account across servers</td>
                                                <td className="py-3 px-4">Numeric ID only</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Discord Server (Guild) ID</td>
                                                <td className="py-3 px-4">Server-specific settings & configurations</td>
                                                <td className="py-3 px-4">Numeric ID only</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Music Listening Stats</td>
                                                <td className="py-3 px-4">Weekly leaderboards & personal stats</td>
                                                <td className="py-3 px-4">Song count, listening time</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Play History</td>
                                                <td className="py-3 px-4">Browse & replay recently played tracks</td>
                                                <td className="py-3 px-4">Song title, URL, artist, thumbnail</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-4">1.2 User-Provided Data</h3>
                                <p className="text-gray-400 mb-4">When you voluntarily use specific features, we store:</p>
                                <div className="overflow-x-auto mb-8">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Data</th>
                                                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Feature</th>
                                                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-400">
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Favorite Tracks</td>
                                                <td className="py-3 px-4"><code className="bg-white/5 px-1.5 py-0.5 rounded text-xs">!favorites</code> / <code className="bg-white/5 px-1.5 py-0.5 rounded text-xs">!grab</code></td>
                                                <td className="py-3 px-4">Save songs you love for quick access</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Custom Playlists</td>
                                                <td className="py-3 px-4"><code className="bg-white/5 px-1.5 py-0.5 rounded text-xs">!playlist create</code></td>
                                                <td className="py-3 px-4">Create, manage, and share playlists</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Spotify Profile Link</td>
                                                <td className="py-3 px-4"><code className="bg-white/5 px-1.5 py-0.5 rounded text-xs">!spotify-link</code></td>
                                                <td className="py-3 px-4">Link your Spotify profile</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Server Settings</td>
                                                <td className="py-3 px-4"><code className="bg-white/5 px-1.5 py-0.5 rounded text-xs">!setprefix</code>, <code className="bg-white/5 px-1.5 py-0.5 rounded text-xs">!anonymous</code>, etc.</td>
                                                <td className="py-3 px-4">Custom prefix, anonymous channels, 24/7 mode, autoplay</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-4">1.3 Data We Do NOT Collect</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                        <span><strong className="text-white">Usernames, nicknames, or display names</strong> — We only store your numeric Discord User ID</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                        <span><strong className="text-white">Message content</strong> — Messages are read in real-time for command parsing only; they are never logged or saved</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                        <span><strong className="text-white">Voice audio or recordings</strong> — We never record voice channel audio</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                        <span><strong className="text-white">Email addresses or passwords</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                        <span><strong className="text-white">IP addresses</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                        <span><strong className="text-white">Direct Messages (DM) content</strong></span>
                                    </li>
                                </ul>
                            </section>

                            {/* Section 2 */}
                            <section id="how-use" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Data</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">We use the collected data exclusively for:</p>
                                <ul className="space-y-2 text-gray-400 mb-6">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        <span><strong className="text-white">Providing Bot functionality</strong> — Playing music, managing queues, processing commands</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        <span><strong className="text-white">Personal features</strong> — Favorites, playlists, play history, listening stats</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        <span><strong className="text-white">Leaderboards & gamification</strong> — Weekly leaderboard rankings and music match games</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        <span><strong className="text-white">Premium services</strong> — Managing premium subscriptions and guild premium activations</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        <span><strong className="text-white">Profile badges</strong> — Checking your roles in our support server to display badges across all servers</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        <span><strong className="text-white">Server configuration</strong> — Saving per-server settings like custom prefixes and channel restrictions</span>
                                    </li>
                                </ul>

                                <p className="text-gray-400 leading-relaxed mb-3">We do <strong className="text-white">NOT</strong>:</p>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        Sell your data to third parties
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        Use your data for advertising
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        Share your data with external services (except our database provider)
                                    </li>
                                </ul>
                            </section>

                            {/* Section 3 */}
                            <section id="storage" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">3. Data Storage & Security</h2>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        All data is stored in <strong className="text-white">MongoDB Atlas</strong>, which provides <strong className="text-white">AES-256 encryption at rest</strong>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Data is transmitted over <strong className="text-white">TLS-encrypted connections</strong>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Access to the database is restricted to the Bot's authorized systems only
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        We follow Discord's <a href="https://discord.com/developers/docs/policies-and-agreements/developer-terms-of-service" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Developer Terms of Service</a> and <a href="https://discord.com/developers/docs/policies-and-agreements/developer-policy" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Developer Policy</a>
                                    </li>
                                </ul>
                            </section>

                            {/* Section 4 */}
                            <section id="retention" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Data Type</th>
                                                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Retention Period</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-400">
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">User preferences (favorites, playlists)</td>
                                                <td className="py-3 px-4">Until you request deletion</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Listening stats (weekly)</td>
                                                <td className="py-3 px-4">Reset every Monday</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Listening stats (all-time)</td>
                                                <td className="py-3 px-4">Until you request deletion</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Play history</td>
                                                <td className="py-3 px-4">Until you request deletion</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Server settings</td>
                                                <td className="py-3 px-4">Until the bot is removed from the server or deletion is requested</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Premium data</td>
                                                <td className="py-3 px-4">Until premium expires or deletion is requested</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Spotify link data</td>
                                                <td className="py-3 px-4">Until you unlink or request deletion</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Section 5 */}
                            <section id="rights" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights — Data Deletion</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    You have the right to request deletion of all your data at any time. To do so:
                                </p>
                                <div className="space-y-4 ml-2">
                                    <div className="flex items-start gap-4">
                                        <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm text-white font-semibold shrink-0">1</span>
                                        <p className="text-gray-400 pt-1">
                                            <strong className="text-white">Join our Support Server:</strong>{' '}
                                            <a href="https://discord.gg/V5kyZXWVxc" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">https://discord.gg/V5kyZXWVxc</a>
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm text-white font-semibold shrink-0">2</span>
                                        <p className="text-gray-400 pt-1"><strong className="text-white">Open a ticket</strong> or contact the bot owner directly</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm text-white font-semibold shrink-0">3</span>
                                        <p className="text-gray-400 pt-1">Request deletion of your data — we will remove all stored information associated with your Discord User ID</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 mt-5">
                                    We will process deletion requests within <strong className="text-white">7 days</strong>.
                                </p>
                            </section>

                            {/* Section 6 */}
                            <section id="opting-out" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">6. Opting Out</h2>
                                <ul className="space-y-4 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        <span><strong className="text-white">Message Content:</strong> The bot does not track or store any message content. Messages are only read in real-time for command parsing and anonymous messaging. You can opt out of anonymous messaging by not sending messages in the designated anonymous channel.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        <span><strong className="text-white">Listening Stats:</strong> Stats are tracked automatically when you play music. Contact us via the support server to request stat removal.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        <span><strong className="text-white">Favorites & Playlists:</strong> You can delete individual favorites using <code className="bg-white/5 px-1.5 py-0.5 rounded text-xs">!favorites remove</code> and playlists using <code className="bg-white/5 px-1.5 py-0.5 rounded text-xs">!playlist delete</code>.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        <span><strong className="text-white">Spotify Link:</strong> You can unlink your Spotify at any time using <code className="bg-white/5 px-1.5 py-0.5 rounded text-xs">!spotify-unlink</code>.</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Section 7 */}
                            <section id="anonymous" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">7. Anonymous Messaging</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    The anonymous messaging feature (<code className="bg-white/5 px-1.5 py-0.5 rounded text-xs">!anonymous</code>) works as follows:
                                </p>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        When enabled in a channel, the bot reads messages sent in that channel
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        The original message is <strong className="text-white">immediately deleted</strong>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        The content is <strong className="text-white">reposted anonymously</strong> by the bot
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        <strong className="text-white">No message content is stored</strong> at any point — it is processed in real-time only
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Only text, emojis, and special characters are forwarded; links, images, and attachments are ignored
                                    </li>
                                </ul>
                            </section>

                            {/* Section 8 */}
                            <section id="third-party" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Services</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">Stella uses the following third-party services:</p>
                                <div className="overflow-x-auto mb-4">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Service</th>
                                                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-400">
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">MongoDB Atlas</td>
                                                <td className="py-3 px-4">Database storage (encrypted at rest)</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Lavalink</td>
                                                <td className="py-3 px-4">Music audio streaming engine</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4 text-white font-medium">Discord API</td>
                                                <td className="py-3 px-4">Core bot functionality</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-gray-400">We do not share your personal data with any other third-party services.</p>
                            </section>

                            {/* Section 9 */}
                            <section id="children" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Stella does not knowingly collect information from children under the age of 13. If you are under 13, please do not use the Bot. This aligns with Discord's own <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Terms of Service</a>, which require users to be at least 13 years old.
                                </p>
                            </section>

                            {/* Section 10 */}
                            <section id="changes" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Last Updated" date. Continued use of the Bot after changes constitutes acceptance of the updated policy.
                                </p>
                            </section>

                            {/* Section 11 */}
                            <section id="contact" className="mb-4 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    If you have any questions, concerns, or data deletion requests regarding this Privacy Policy, please reach out to us:
                                </p>
                                <div
                                    className="rounded-xl p-5"
                                    style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        border: '1px solid rgba(255,255,255,0.06)',
                                    }}
                                >
                                    <div className="space-y-3 text-gray-400">
                                        <p>
                                            <span className="text-gray-500">Support Server:</span>{' '}
                                            <a href="https://discord.gg/V5kyZXWVxc" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
                                                https://discord.gg/V5kyZXWVxc
                                            </a>
                                        </p>
                                        <p>
                                            <span className="text-gray-500">Bot Owner Discord ID:</span>{' '}
                                            <code className="text-white bg-white/5 px-2 py-0.5 rounded text-sm">1219624638628233247</code>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm mt-6 italic">
                                    This Privacy Policy is effective as of February 18, 2026.
                                </p>
                            </section>
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Privacy;
