import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Headphones, Play, Sparkles, ArrowRight, Volume2 } from 'lucide-react';

const steps = [
    {
        number: 1,
        badge: 'STEP ONE',
        badgeColor: 'from-pink-500 to-purple-500',
        title: 'Invite',
        titleHighlight: 'Stella',
        description: 'Click the button below and select your server from the list.',
        icon: Plus,
        iconBg: 'bg-gradient-to-br from-[var(--primary)] to-purple-600',
        extra: {
            type: 'button',
            text: 'Add to Discord',
            link: '/invite'
        }
    },
    {
        number: 2,
        badge: 'STEP TWO',
        badgeColor: 'from-purple-500 to-indigo-500',
        title: 'Join',
        titleHighlight: 'Channel',
        description: 'Join any voice channel in your Discord server to start the party.',
        icon: Headphones,
        iconBg: 'bg-gradient-to-br from-gray-700 to-gray-800',
        extra: {
            type: 'tag',
            text: 'HIGH QUALITY AUDIO READY',
            icon: Volume2
        }
    },
    {
        number: 3,
        badge: 'STEP THREE',
        badgeColor: 'from-indigo-500 to-blue-500',
        title: '/play',
        titleHighlight: '',
        description: 'Simply type the command followed by your favorite',
        descriptionHighlights: ['song name', 'URL'],
        icon: Play,
        iconBg: 'bg-gradient-to-br from-[var(--primary)] to-purple-600',
        extra: {
            type: 'command',
            text: '/play blinding lights ...',
            supports: 'Supports Spotify, SoundCloud, YouTube & more'
        }
    },
    {
        number: 4,
        badge: 'FINAL STEP',
        badgeColor: 'from-amber-500 to-orange-500',
        title: 'Enjoy the',
        titleHighlight: 'Vibe',
        description: 'Sit back and enjoy premium quality music with your community. Experience high-fidelity audio like never before.',
        icon: Sparkles,
        iconBg: 'bg-gradient-to-br from-[var(--primary)] to-purple-600',
        extra: {
            type: 'cta',
            text: 'Add to Discord',
            subtext: 'NO CREDIT CARD REQUIRED'
        }
    }
];

const StepCard = ({ step, index }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const Icon = step.icon;

    return (
        <div
            ref={cardRef}
            className={`
                relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12
                transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
            `}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Vertical Line Connector - Outside card */}
            {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-full w-[2px] h-16 md:h-20 bg-gradient-to-b from-[var(--primary)] via-[var(--primary)]/50 to-transparent -translate-x-1/2 z-10" />
            )}

            {/* Card Container */}
            <div className="
                w-full max-w-4xl mx-auto p-8 md:p-10 rounded-3xl
                bg-gradient-to-r from-[#0f0d13] via-[#15111d] to-[#1d1530]
                border border-white/[0.03] hover:border-white/[0.08]
                shadow-xl shadow-black/40
                transition-all duration-500 group
                hover:shadow-[0_20px_60px_-15px_rgba(171,0,255,0.2)]
                hover:translate-y-[-4px]
            ">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left Side - Icon Section */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-4">
                        {/* Step Number Badge */}
                        <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                            {step.number}
                        </div>

                        {/* Main Icon Circle */}
                        <div className="relative">
                            {/* Outer glow rings */}
                            <div className="absolute inset-0 rounded-full bg-[var(--primary)]/20 blur-xl scale-150 group-hover:scale-[1.75] transition-transform duration-700" />
                            <div className="absolute inset-0 rounded-full border-2 border-[var(--primary)]/20 scale-125 group-hover:rotate-45 transition-transform duration-700" />

                            {/* Icon container */}
                            <div className={`
                                relative w-24 h-24 md:w-28 md:h-28 rounded-full ${step.iconBg}
                                flex items-center justify-center
                                shadow-[0_0_40px_rgba(171,0,255,0.4)]
                                group-hover:shadow-[0_0_60px_rgba(171,0,255,0.6)]
                                group-hover:scale-110 transition-all duration-500
                            `}>
                                <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2} />
                            </div>

                            {/* Decorative sparkles */}
                            <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Sparkles className="absolute -bottom-2 -left-2 w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 text-center md:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800/80 border border-white/5 mb-4">
                            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                            <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">{step.badge}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-white italic">{step.title} </span>
                            {step.titleHighlight && (
                                <span className="text-[var(--primary)] italic">{step.titleHighlight}</span>
                            )}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 max-w-md">
                            {step.description}
                            {step.descriptionHighlights?.map((highlight, i) => (
                                <span key={highlight}>
                                    {i === 0 ? ' ' : ' or '}
                                    <span className="text-[var(--primary)] font-medium">{highlight}</span>
                                </span>
                            ))}
                            {step.descriptionHighlights && '.'}
                        </p>

                        {/* Extra Content */}
                        {step.extra?.type === 'button' && (
                            <Link
                                to={step.extra.link}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white font-bold rounded-full hover:shadow-[0_0_30px_var(--primary-glow)] hover:scale-105 transition-all duration-300"
                            >
                                {step.extra.text}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        )}

                        {step.extra?.type === 'tag' && (
                            <div className="inline-flex items-center gap-2 text-gray-500 text-xs font-medium tracking-wider">
                                <step.extra.icon className="w-4 h-4" />
                                {step.extra.text}
                            </div>
                        )}

                        {step.extra?.type === 'command' && (
                            <div className="space-y-3">
                                <p className="text-gray-500 text-xs flex items-center gap-2 justify-center md:justify-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    {step.extra.supports}
                                </p>
                                <div className="relative inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-800/80 border border-white/10 font-mono text-sm text-gray-300 group-hover:border-[var(--primary)]/30 transition-colors">
                                    <span className="text-[var(--primary)]">$</span>
                                    <span>{step.extra.text}</span>
                                    <span className="w-2 h-5 bg-[var(--primary)] animate-pulse rounded-sm" />
                                </div>
                            </div>
                        )}

                        {step.extra?.type === 'cta' && (
                            <div className="space-y-3">
                                <Link
                                    to="/invite"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-pink-500 text-white font-bold rounded-full hover:shadow-[0_0_40px_var(--primary-glow)] hover:scale-105 transition-all duration-300"
                                >
                                    {step.extra.text}
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <p className="text-gray-600 text-xs font-medium tracking-widest">{step.extra.subtext}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Instructions = () => {
    const sectionRef = useRef(null);
    const [headerVisible, setHeaderVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHeaderVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div
                    ref={sectionRef}
                    className={`
                        text-center mb-20
                        transition-all duration-1000 ease-out
                        ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-6">
                        <Play className="w-4 h-4 text-[var(--primary)]" />
                        <span className="text-[var(--primary)] text-xs font-bold uppercase tracking-wider">Quick Start Guide</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white italic">Play Your First</span>
                        <br />
                        <span className="text-[var(--primary)] italic">Song in Seconds</span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Getting started with Stella is incredibly easy. Follow these simple steps and you'll be jamming with your friends in no time.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-16 md:space-y-24">
                    {steps.map((step, index) => (
                        <StepCard key={step.number} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instructions;
