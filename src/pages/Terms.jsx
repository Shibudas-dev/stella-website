import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'description', title: '2. Description of Service' },
    { id: 'eligibility', title: '3. Eligibility' },
    { id: 'acceptable-use', title: '4. Acceptable Use' },
    { id: 'premium', title: '5. Premium Services' },
    { id: 'anonymous', title: '6. Anonymous Messaging' },
    { id: 'music', title: '7. Music & Content' },
    { id: 'availability', title: '8. Availability & Uptime' },
    { id: 'data', title: '9. Data & Privacy' },
    { id: 'ip', title: '10. Intellectual Property' },
    { id: 'liability', title: '11. Limitation of Liability' },
    { id: 'termination', title: '12. Termination' },
    { id: 'modifications', title: '13. Modifications to Terms' },
    { id: 'governing', title: '14. Governing Law' },
    { id: 'contact', title: '15. Contact Us' },
];

const Terms = () => {
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
                    <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-purple-600/8 rounded-full blur-[120px]" />
                    <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-[var(--primary)]/6 rounded-full blur-[100px]" />
                </div>
                <div className="container px-4 relative z-10 text-center">
                    <p className="text-[var(--primary)] text-sm font-semibold uppercase tracking-widest mb-4">Legal</p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Please read these terms carefully before using Stella.
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
                                By inviting, using, or interacting with <strong className="text-white">Stella</strong> ("the Bot", "we", "us"), you agree to these Terms of Service ("Terms"). If you do not agree, please remove the Bot from your server and stop using it.
                            </p>

                            {/* Section 1 */}
                            <section id="acceptance" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    By adding Stella to your Discord server or using any of its commands, you acknowledge that you have read, understood, and agree to be bound by these Terms. These Terms apply to all users, server administrators, and any individual who interacts with the Bot.
                                </p>
                            </section>

                            {/* Section 2 */}
                            <section id="description" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    Stella is a Discord music bot that provides:
                                </p>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Multi-platform music streaming (YouTube, Spotify, SoundCloud, Deezer, Apple Music, and more)
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Audio filters and sound effects
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Playlist creation, management, and sharing
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Listening stats, leaderboards, and weekly rankings
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Server customization (custom prefix, anonymous messaging, 24/7 mode)
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Premium features for subscribed users and servers
                                    </li>
                                </ul>
                            </section>

                            {/* Section 3 */}
                            <section id="eligibility" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">3. Eligibility</h2>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        You must be at least <strong className="text-white">13 years old</strong> to use Stella, in accordance with <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Discord's Terms of Service</a>.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        You must comply with Discord's <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Terms of Service</a> and <a href="https://discord.com/guidelines" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Community Guidelines</a> while using the Bot.
                                    </li>
                                </ul>
                            </section>

                            {/* Section 4 */}
                            <section id="acceptable-use" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    When using Stella, you agree to <strong className="text-white">NOT</strong>:
                                </p>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        Use the Bot for any illegal or unauthorized purpose
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        Attempt to exploit, abuse, or manipulate the Bot's systems or commands
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        Spam commands or intentionally overload the Bot
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        Use the Bot to harass, threaten, or harm other users
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        Attempt to reverse-engineer, decompile, or modify the Bot's source code
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        Use automated tools, scripts, or bots to interact with Stella
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        Abuse the anonymous messaging feature to send harmful, abusive, or illegal content
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        Share, sell, or transfer premium subscriptions without authorization
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        Attempt to gain unauthorized access to the Bot's database or backend systems
                                    </li>
                                </ul>
                                <p className="text-gray-400 mt-4">
                                    Violation of these terms may result in being <strong className="text-white">blacklisted</strong> from using the Bot.
                                </p>
                            </section>

                            {/* Section 5 */}
                            <section id="premium" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">5. Premium Services</h2>

                                <h3 className="text-lg font-semibold text-white mb-3 mt-6">5.1 Premium Subscriptions</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Premium features are provided as an optional paid upgrade
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Premium plans include: <strong className="text-white">Standard</strong> (under 30 days), <strong className="text-white">High Quality</strong> (monthly to yearly), <strong className="text-white">Ultra Quality</strong> (yearly and above), and <strong className="text-white">Legendary Rare</strong> (lifetime)
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Premium benefits include extended interaction timeouts, additional playlist slots, custom bot profiles, and guild-wide premium activation
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold text-white mb-3 mt-6">5.2 Payments & Refunds</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Premium is purchased through our support server
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Refunds are handled on a <strong className="text-white">case-by-case basis</strong> at the discretion of the Bot owner
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        We reserve the right to revoke premium access if these Terms are violated
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold text-white mb-3 mt-6">5.3 Premium Guild Slots</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Premium users can activate premium for a limited number of servers based on their plan
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        If a premium user leaves a server where they activated guild premium, the guild premium may be automatically deactivated
                                    </li>
                                </ul>
                            </section>

                            {/* Section 6 */}
                            <section id="anonymous" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">6. Anonymous Messaging</h2>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        The anonymous messaging feature allows server administrators to designate a channel for anonymous messages
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Messages sent in anonymous channels are deleted and reposted by the Bot without identifying the sender
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        <strong className="text-white">Server administrators</strong> are responsible for moderating anonymous channels in their servers
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        We are <strong className="text-white">not responsible</strong> for the content posted through anonymous messaging
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Abuse of anonymous messaging (e.g., harassment, threats, illegal content) may result in the feature being disabled and the user being blacklisted
                                    </li>
                                </ul>
                            </section>

                            {/* Section 7 */}
                            <section id="music" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">7. Music & Content</h2>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Stella streams music from third-party platforms and does <strong className="text-white">not</strong> host any audio content
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        We are not responsible for the availability, accuracy, or legality of content on third-party platforms
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Users are responsible for ensuring their use of music content complies with applicable copyright laws
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        We respect intellectual property rights and will respond to valid takedown requests
                                    </li>
                                </ul>
                            </section>

                            {/* Section 8 */}
                            <section id="availability" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">8. Availability & Uptime</h2>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        We strive to keep Stella operational <strong className="text-white">24/7</strong>, but we do not guarantee uninterrupted service
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        The Bot may experience downtime for maintenance, updates, or unforeseen technical issues
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        We are not liable for any loss or inconvenience caused by service interruptions
                                    </li>
                                </ul>
                            </section>

                            {/* Section 9 */}
                            <section id="data" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">9. Data & Privacy</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    Our data collection and handling practices are described in our <Link to="/privacy" className="text-[var(--primary)] hover:underline">Privacy Policy</Link>. By using Stella, you also agree to the terms of our Privacy Policy.
                                </p>
                                <p className="text-gray-400 leading-relaxed mb-3"><strong className="text-white">Key points:</strong></p>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        We store only your Discord User ID (not usernames or message content)
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        All data is encrypted at rest using AES-256 encryption
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        You can request deletion of your data at any time via our support server
                                    </li>
                                </ul>
                            </section>

                            {/* Section 10 */}
                            <section id="ip" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">10. Intellectual Property</h2>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        The Stella bot, including its name, logo, code, and design, is the intellectual property of the Bot owner
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        You may not copy, modify, distribute, or create derivative works based on the Bot without explicit permission
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        All trademarks and service marks of third-party platforms (Discord, YouTube, Spotify, etc.) belong to their respective owners
                                    </li>
                                </ul>
                            </section>

                            {/* Section 11 */}
                            <section id="liability" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">11. Limitation of Liability</h2>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Stella is provided <strong className="text-white">"as is"</strong> and <strong className="text-white">"as available"</strong> without any warranties of any kind
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        We are not responsible for any damages, data loss, or issues arising from the use of the Bot
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        We are not liable for any actions taken by users through the Bot's features (e.g., anonymous messaging)
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Our total liability shall not exceed the amount paid by you for premium services, if any
                                    </li>
                                </ul>
                            </section>

                            {/* Section 12 */}
                            <section id="termination" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        We reserve the right to <strong className="text-white">blacklist</strong> any user or server from using Stella at any time, for any reason, without prior notice
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        You may stop using the Bot at any time by removing it from your server
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Upon termination, your server settings will be deleted; personal data (favorites, playlists, stats) can be deleted upon request
                                    </li>
                                </ul>
                            </section>

                            {/* Section 13 */}
                            <section id="modifications" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">13. Modifications to Terms</h2>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        We reserve the right to update or modify these Terms at any time
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Changes will be reflected on this page with an updated "Last Updated" date
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Continued use of the Bot after modifications constitutes acceptance of the updated Terms
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                        Significant changes may be announced in the support server
                                    </li>
                                </ul>
                            </section>

                            {/* Section 14 */}
                            <section id="governing" className="mb-12 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">14. Governing Law</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    These Terms shall be governed by and interpreted in accordance with applicable laws. Any disputes arising from these Terms or the use of the Bot shall be resolved through communication in our support server.
                                </p>
                            </section>

                            {/* Section 15 */}
                            <section id="contact" className="mb-4 scroll-mt-28">
                                <h2 className="text-2xl font-bold text-white mb-4">15. Contact Us</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    If you have any questions or concerns about these Terms, please contact us:
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
                                    These Terms of Service are effective as of February 18, 2026.
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

export default Terms;
