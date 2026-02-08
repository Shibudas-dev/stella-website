import { useState } from 'react';
import { ChevronDown, Zap, Headphones, Clock, Music, Shield, Sparkles } from 'lucide-react';

const faqData = [
    {
        icon: Zap,
        question: "What makes Stella the best Discord music bot?",
        answer: "Stella offers ultra-low latency playback, supports 10+ music platforms including Spotify, YouTube, SoundCloud, and more. Features like 24/7 mode, custom playlists, and premium audio filters make it the ultimate music companion for your server."
    },
    {
        icon: Clock,
        question: "Does Stella support 24/7 music playback?",
        answer: "Yes! Premium users can enable 24/7 mode which keeps Stella in your voice channel even when no music is playing. Perfect for radio stations and always-on music servers."
    },
    {
        icon: Music,
        question: "What music platforms does Stella support?",
        answer: "Stella supports Spotify, YouTube, SoundCloud, Deezer, Bandcamp, Vimeo, Apple Music, Tidal, and many more. You can play music from almost any platform seamlessly."
    },
    {
        icon: Shield,
        question: "Is Stella free to use?",
        answer: "Yes! Stella has a generous free tier with all essential features. Premium unlocks advanced features like extended queue limits, more audio filters, 24/7 mode, and priority support."
    },
    {
        icon: Headphones,
        question: "How do I add Stella to my server?",
        answer: "Simply click the 'Invite Stella' button on our website or use the /invite command. You'll be redirected to Discord where you can select your server and authorize the bot."
    },
    {
        icon: Sparkles,
        question: "What premium features does Stella offer?",
        answer: "Premium includes 24/7 mode, unlimited queue length, exclusive audio filters, priority playback, custom playlists up to 500 songs, and dedicated support. Perfect for serious music lovers!"
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 animate-[fadeIn_0.5s_ease-out]">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Everything </span>
                        <span className="text-[var(--primary)] italic">Explained</span>
                    </h2>
                    <p className="text-gray-400 mb-2">
                        Find answers to frequently asked questions about Stella.
                    </p>
                    <a
                        href="https://discord.gg/V5kyZXWVxc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--primary)] hover:underline transition-all"
                    >
                        Still need help? Join Support Server ↗
                    </a>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((faq, index) => {
                        const Icon = faq.icon;
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`
                                    group relative overflow-hidden rounded-xl
                                    bg-[var(--bg-card)] backdrop-blur-sm
                                    border border-white/5
                                    transition-all duration-300 ease-out
                                    hover:border-[var(--primary)]/30
                                    ${isOpen ? 'border-[var(--primary)]/50 shadow-[0_0_30px_var(--primary-transparent)]' : ''}
                                `}
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center gap-4 p-5 text-left"
                                >
                                    {/* Icon */}
                                    <div className={`
                                        flex-shrink-0 w-12 h-12 rounded-lg
                                        flex items-center justify-center
                                        border border-white/10
                                        transition-all duration-300
                                        ${isOpen
                                            ? 'bg-[var(--primary)]/20 border-[var(--primary)]/50 text-[var(--primary)]'
                                            : 'bg-white/5 text-gray-400 group-hover:text-[var(--primary)] group-hover:border-[var(--primary)]/30'
                                        }
                                    `}>
                                        <Icon className="w-5 h-5" />
                                    </div>

                                    {/* Question Text */}
                                    <span className={`
                                        flex-1 font-semibold text-lg
                                        transition-colors duration-300
                                        ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}
                                    `}>
                                        {faq.question}
                                    </span>

                                    {/* Chevron */}
                                    <ChevronDown className={`
                                        w-5 h-5 text-gray-400
                                        transition-all duration-300
                                        ${isOpen ? 'rotate-180 text-[var(--primary)]' : 'group-hover:text-[var(--primary)]'}
                                    `} />
                                </button>

                                {/* Answer */}
                                <div className={`
                                    overflow-hidden transition-all duration-300 ease-out
                                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                                `}>
                                    <div className="px-5 pb-5 pl-[76px]">
                                        <p className="text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>

                                {/* Glow effect on hover */}
                                <div className={`
                                    absolute inset-0 pointer-events-none
                                    bg-gradient-to-r from-[var(--primary)]/0 via-[var(--primary)]/5 to-[var(--primary)]/0
                                    opacity-0 group-hover:opacity-100
                                    transition-opacity duration-500
                                `} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
