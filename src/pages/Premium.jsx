import { Check, Star, Zap, Crown } from 'lucide-react';
import Footer from '../components/Footer';

const plans = [
    {
        name: 'Basic',
        icon: Star,
        tagline: 'Quality background music',
        price: 1,
        originalPrice: null,
        period: '/mo',
        recommended: false,
        features: [
            'High-quality audio playback',
            'Play from 5+ platforms',
            'Queue up to 50 songs',
            'Basic audio filters',
            '5 custom playlists',
            'Standard support'
        ]
    },
    {
        name: 'Pro',
        icon: Zap,
        tagline: 'For power listeners',
        price: 1.99,
        originalPrice: 2.99,
        period: '/mo',
        recommended: true,
        features: [
            'Everything in Basic',
            '24/7 mode enabled',
            'Unlimited queue length',
            'All audio filters',
            '50 custom playlists',
            'Priority support',
            'Extended search results',
            'Lyrics integration'
        ]
    },
    {
        name: 'Ultimate',
        icon: Crown,
        tagline: 'Elite auditory experience',
        price: 3.99,
        originalPrice: null,
        period: '/mo',
        recommended: false,
        features: [
            'Everything in Pro',
            'Multiple bot instances',
            'Custom bot branding',
            'Unlimited playlists (500 songs each)',
            'Advanced DJ controls',
            'Exclusive beta features',
            'Direct developer support',
            'Server priority queue',
            'Custom audio presets'
        ]
    }
];

const Premium = () => {
    const discordLink = 'https://discord.gg/V5kyZXWVxc';

    return (
        <div className="min-h-screen flex flex-col pt-24 md:pt-32">
            {/* Header */}
            <div className="container mb-8 md:mb-12 text-center animate-[fadeIn_0.5s_ease-out] px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
                    <span className="text-white">Unlock the full </span>
                    <br className="md:hidden" />
                    <span className="text-[var(--primary)] italic">power of Sound.</span>
                </h1>
                <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                    Join thousands of creators who trust Stella for high-fidelity audio quality,
                    advanced playlist management, and 24/7 uninterrupted playback.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="flex-1 px-3 md:px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;

                        return (
                            <div
                                key={plan.name}
                                className={`
                                    relative group rounded-xl md:rounded-2xl p-4 md:p-6
                                    bg-[var(--bg-card)] backdrop-blur-sm
                                    border transition-all duration-500
                                    ${plan.recommended
                                        ? 'border-[var(--primary)]/50 shadow-[0_0_30px_var(--primary-transparent)] md:scale-105 z-10 order-first md:order-none'
                                        : 'border-white/10 hover:border-[var(--primary)]/30'
                                    }
                                    animate-[fadeIn_0.5s_ease-out]
                                `}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Recommended Badge */}
                                {plan.recommended && (
                                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                                        <span className="px-3 py-0.5 bg-[var(--primary)] text-white text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_0_15px_var(--primary-glow)]">
                                            Recommended
                                        </span>
                                    </div>
                                )}

                                {/* Plan Icon */}
                                <div className={`
                                    w-10 h-10 md:w-11 md:h-11 rounded-lg md:rounded-xl flex items-center justify-center mb-3
                                    border transition-all duration-300
                                    ${plan.recommended
                                        ? 'bg-[var(--primary)]/20 border-[var(--primary)]/50 text-[var(--primary)]'
                                        : 'bg-white/5 border-white/10 text-gray-400 group-hover:text-[var(--primary)] group-hover:border-[var(--primary)]/30'
                                    }
                                `}>
                                    <Icon className="w-5 h-5" />
                                </div>

                                {/* Plan Name & Tagline */}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5">{plan.name}</h3>
                                <p className="text-gray-500 text-xs md:text-sm mb-4">{plan.tagline}</p>

                                {/* Price */}
                                <div className="flex items-baseline gap-1.5 mb-4 md:mb-5">
                                    <span className="text-gray-500 text-base">$</span>
                                    {plan.originalPrice && (
                                        <span className="text-gray-500 text-lg line-through decoration-2">
                                            {plan.originalPrice}
                                        </span>
                                    )}
                                    <span className={`text-3xl md:text-4xl font-bold ${plan.recommended ? 'text-[var(--primary)]' : 'text-white'}`}>
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-500 text-sm">{plan.period}</span>
                                </div>

                                {/* Features */}
                                <ul className="space-y-2 md:space-y-2.5 mb-5 md:mb-6">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.recommended ? 'text-[var(--primary)]' : 'text-gray-500'}`} />
                                            <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <a
                                    href={discordLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        w-full block text-center py-2.5 md:py-3 px-4 rounded-lg md:rounded-xl font-semibold text-sm
                                        transition-all duration-300
                                        ${plan.recommended
                                            ? 'bg-[var(--primary)] text-white hover:bg-[var(--primary)]/80 shadow-[0_0_15px_var(--primary-glow)] hover:shadow-[0_0_25px_var(--primary-glow)]'
                                            : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-[var(--primary)]/50'
                                        }
                                    `}
                                >
                                    Get Started
                                </a>

                                {/* Background glow for recommended */}
                                {plan.recommended && (
                                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--primary)]/10 to-transparent rounded-xl md:rounded-2xl" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom note */}
            <div className="text-center py-8 md:py-10 text-gray-500 text-xs md:text-sm px-4">
                <p>Need a custom plan for your community? <a href={discordLink} className="text-[var(--primary)] hover:underline">Contact us on Discord</a></p>
            </div>

            <Footer />
        </div>
    );
};

export default Premium;
