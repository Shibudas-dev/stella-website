import { useEffect, useRef, useState } from 'react';
import { Check, Star, Zap, Crown, Sparkles, Gift, Infinity, ShoppingBag, MessageCircle, Award, HeartHandshake, Wand2, BadgeCheck, Globe } from 'lucide-react';
import Footer from '../components/Footer';

const plans = [
    {
        name: 'Basic',
        icon: Star,
        iconBg: 'from-amber-400 to-orange-500',
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
        iconBg: 'from-[var(--primary)] to-purple-600',
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
        iconBg: 'from-pink-400 to-rose-500',
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

const exclusivePlans = [
    {
        name: 'Guild Premium Lifetime',
        icon: Gift,
        iconBg: 'from-emerald-400 to-teal-500',
        description: 'Unlock all premium features for your entire server, forever. One-time purchase.',
        price: 4.99,
        period: 'one-time',
        features: [
            'All Pro features forever',
            'Unlimited server members',
            'Priority queue processing',
            'No recurring fees'
        ]
    },
    {
        name: 'Lifetime No Prefix',
        icon: Infinity,
        iconBg: 'from-violet-400 to-purple-600',
        description: 'Remove the prefix requirement forever. Use slash commands or custom prefix.',
        price: 2.99,
        period: 'one-time',
        features: [
            'Custom command prefix',
            'Slash commands enabled',
            'Cleaner chat experience',
            'Lifetime access'
        ]
    }
];

// Scroll animation hook
const useScrollAnimation = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
};

const PlanCard = ({ plan, index, isExclusive = false }) => {
    const [cardRef, isVisible] = useScrollAnimation();
    const Icon = plan.icon;
    const discordLink = 'https://discord.gg/V5kyZXWVxc';

    return (
        <div
            ref={cardRef}
            className={`
                relative group rounded-[24px] p-6 md:p-7 overflow-hidden
                transition-all duration-700 ease-out
                hover:scale-[1.02] hover:-translate-y-2
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                ${plan.recommended ? 'md:scale-105 z-10' : ''}
            `}
            style={{
                background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                border: '1px solid rgba(255,255,255,0.04)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)',
                transitionDelay: `${index * 100}ms`
            }}
        >
            {/* Corner gradient glow - top left */}
            <div
                className={`absolute -top-20 -left-20 w-40 h-40 rounded-full transition-opacity duration-700 blur-3xl ${plan.recommended ? 'opacity-50' : 'opacity-30'} group-hover:opacity-70`}
                style={{
                    background: plan.iconBg.includes('amber') ? 'rgba(251,191,36,0.4)'
                        : plan.iconBg.includes('primary') ? 'rgba(171,0,255,0.4)'
                            : plan.iconBg.includes('emerald') ? 'rgba(52,211,153,0.4)'
                                : plan.iconBg.includes('violet') ? 'rgba(167,139,250,0.4)'
                                    : 'rgba(244,114,182,0.4)'
                }}
            />

            {/* Corner gradient glow - bottom right */}
            <div
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-3xl"
                style={{
                    background: plan.iconBg.includes('amber') ? 'rgba(251,191,36,0.3)'
                        : plan.iconBg.includes('primary') ? 'rgba(171,0,255,0.3)'
                            : plan.iconBg.includes('emerald') ? 'rgba(52,211,153,0.3)'
                                : plan.iconBg.includes('violet') ? 'rgba(167,139,250,0.3)'
                                    : 'rgba(244,114,182,0.3)'
                }}
            />

            {/* Hover border glow */}
            <div
                className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    boxShadow: plan.iconBg.includes('amber') ? '0 0 40px rgba(251,191,36,0.15), inset 0 0 1px rgba(251,191,36,0.3)'
                        : plan.iconBg.includes('primary') ? '0 0 40px rgba(171,0,255,0.2), inset 0 0 1px rgba(171,0,255,0.4)'
                            : plan.iconBg.includes('emerald') ? '0 0 40px rgba(52,211,153,0.15), inset 0 0 1px rgba(52,211,153,0.3)'
                                : plan.iconBg.includes('violet') ? '0 0 40px rgba(167,139,250,0.15), inset 0 0 1px rgba(167,139,250,0.3)'
                                    : '0 0 40px rgba(244,114,182,0.15), inset 0 0 1px rgba(244,114,182,0.3)'
                }}
            />

            {/* Recommended Badge */}
            {plan.recommended && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-[var(--primary)] to-pink-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-b-xl shadow-[0_0_20px_var(--primary-glow)]">
                        Most Popular
                    </span>
                </div>
            )}

            {/* Plan Icon */}
            <div className={`
                relative w-12 h-12 rounded-xl flex items-center justify-center mb-4
                bg-gradient-to-br ${plan.iconBg} shadow-lg
            `}>
                <Icon className="w-6 h-6 text-white" strokeWidth={2} />
            </div>

            {/* Plan Name & Tagline */}
            <h3 className="relative text-2xl font-bold text-white mb-1">{plan.name}</h3>
            <p className="relative text-gray-500 text-sm mb-5">{plan.tagline || plan.description}</p>

            {/* Price */}
            <div className="relative flex items-baseline gap-1.5 mb-5">
                <span className="text-gray-500 text-lg">$</span>
                {plan.originalPrice && (
                    <span className="text-gray-500 text-lg line-through decoration-2">
                        {plan.originalPrice}
                    </span>
                )}
                <span className={`text-4xl font-bold ${plan.recommended ? 'text-[var(--primary)]' : 'text-white'}`}>
                    {plan.price}
                </span>
                <span className="text-gray-500 text-sm">{plan.period}</span>
            </div>

            {/* Features */}
            <ul className="relative space-y-2.5 mb-6">
                {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.recommended ? 'text-[var(--primary)]' : 'text-emerald-500'}`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <a
                href={discordLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    relative w-full block text-center py-3 px-4 rounded-xl font-semibold text-sm
                    transition-all duration-300
                    ${plan.recommended || isExclusive
                        ? 'bg-gradient-to-r from-[var(--primary)] to-pink-500 text-white shadow-[0_0_20px_var(--primary-glow)] hover:shadow-[0_0_35px_var(--primary-glow)] hover:scale-105'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-[var(--primary)]/50'
                    }
                `}
            >
                {isExclusive ? 'Get Lifetime Access' : 'Get Started'}
            </a>
        </div>
    );
};

const Premium = () => {
    const [headerRef, headerVisible] = useScrollAnimation();
    const [exclusiveRef, exclusiveVisible] = useScrollAnimation();

    return (
        <div className="min-h-screen flex flex-col pt-24 md:pt-32">
            {/* Aurora background effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
            </div>

            {/* Header */}
            <div
                ref={headerRef}
                className={`container mb-12 md:mb-16 text-center px-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-5">
                    <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                    <span className="text-[var(--primary)] text-xs font-bold uppercase tracking-wider">Premium Plans</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="text-white">Unlock the full </span>
                    <span className="text-[var(--primary)]">power of Sound.</span>
                </h1>
                <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
                    Join thousands of creators who trust Stella for high-fidelity audio quality,
                    advanced playlist management, and 24/7 uninterrupted playback.
                </p>
            </div>

            {/* Main Pricing Cards */}
            <div className="flex-1 px-4 relative z-10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {plans.map((plan, index) => (
                        <PlanCard key={plan.name} plan={plan} index={index} />
                    ))}
                </div>
            </div>

            {/* Exclusive Premium Plans Section */}
            <div className="mt-20 md:mt-28 px-4 relative z-10">
                <div
                    ref={exclusiveRef}
                    className={`text-center mb-12 transition-all duration-700 ${exclusiveVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-5">
                        <Gift className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Exclusive Offers</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-white">Exclusive </span>
                        <span className="text-emerald-400">Premium Plans</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        One-time purchases for lifetime access. No subscriptions, no recurring fees.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {exclusivePlans.map((plan, index) => (
                        <PlanCard key={plan.name} plan={plan} index={index} isExclusive={true} />
                    ))}
                </div>
            </div>

            {/* How to Buy Premium Section */}
            <div className="mt-20 md:mt-28 px-4 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5">
                        <ShoppingBag className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Purchase Guide</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-white">How to Buy </span>
                        <span className="text-blue-400">Premium</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        Follow these simple steps to unlock premium features.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Step 1 */}
                    <div
                        className="relative p-6 rounded-[24px] overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500"
                        style={{
                            background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                            border: '1px solid rgba(255,255,255,0.04)',
                            boxShadow: '0 4px 30px rgba(0,0,0,0.3)'
                        }}
                    >
                        <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-3xl bg-blue-500" />
                        <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 35px rgba(59,130,246,0.12)' }} />
                        <div className="relative flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">1</div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Join Support Server</h3>
                                <p className="text-gray-400 text-sm mb-4">Click the button below and join our Discord. Make sure you're a Stella user!</p>
                                <a href="https://discord.gg/V5kyZXWVxc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors text-sm font-semibold">
                                    <MessageCircle className="w-4 h-4" />
                                    Join Discord
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div
                        className="relative p-6 rounded-[24px] overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500"
                        style={{
                            background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                            border: '1px solid rgba(255,255,255,0.04)',
                            boxShadow: '0 4px 30px rgba(0,0,0,0.3)'
                        }}
                    >
                        <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-3xl bg-purple-500" />
                        <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 35px rgba(168,85,247,0.12)' }} />
                        <div className="relative flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">2</div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Create a Ticket</h3>
                                <p className="text-gray-400 text-sm">Ping any Admin or Owner <span className="text-yellow-400 font-semibold">once</span>. Multiple pings will result in a ban! ⚠️</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div
                        className="relative p-6 rounded-[24px] overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500"
                        style={{
                            background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                            border: '1px solid rgba(255,255,255,0.04)',
                            boxShadow: '0 4px 30px rgba(0,0,0,0.3)'
                        }}
                    >
                        <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-3xl bg-pink-500" />
                        <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 35px rgba(236,72,153,0.12)' }} />
                        <div className="relative flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">3</div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Choose Your Plan</h3>
                                <p className="text-gray-400 text-sm">Tell us which plan you want or upload a screenshot of the plan you'd like to purchase.</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div
                        className="relative p-6 rounded-[24px] overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500"
                        style={{
                            background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                            border: '1px solid rgba(255,255,255,0.04)',
                            boxShadow: '0 4px 30px rgba(0,0,0,0.3)'
                        }}
                    >
                        <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-3xl bg-emerald-500" />
                        <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 35px rgba(52,211,153,0.12)' }} />
                        <div className="relative flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">4</div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Complete Your Order</h3>
                                <p className="text-gray-400 text-sm">Follow the payment instructions and enjoy your premium features instantly! 🎉</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Perks Section */}
            <div className="mt-20 md:mt-28 px-4 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-5">
                        <Award className="w-4 h-4 text-amber-400" />
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Benefits</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-white">Premium </span>
                        <span className="text-amber-400">Perks</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        Enjoy these exclusive benefits when you upgrade to premium.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Perk 1 */}
                    <div
                        className="relative p-6 rounded-[24px] overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 text-center"
                        style={{
                            background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                            border: '1px solid rgba(255,255,255,0.04)',
                            boxShadow: '0 4px 30px rgba(0,0,0,0.3)'
                        }}
                    >
                        <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-3xl bg-amber-500" />
                        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                            <HeartHandshake className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Priority Support</h3>
                        <p className="text-gray-400 text-sm">Get faster responses from our support team</p>
                    </div>

                    {/* Perk 2 */}
                    <div
                        className="relative p-6 rounded-[24px] overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 text-center"
                        style={{
                            background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                            border: '1px solid rgba(255,255,255,0.04)',
                            boxShadow: '0 4px 30px rgba(0,0,0,0.3)'
                        }}
                    >
                        <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-3xl bg-purple-500" />
                        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg">
                            <Wand2 className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Exclusive Commands</h3>
                        <p className="text-gray-400 text-sm">Access premium-only features and commands</p>
                    </div>

                    {/* Perk 3 */}
                    <div
                        className="relative p-6 rounded-[24px] overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 text-center"
                        style={{
                            background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                            border: '1px solid rgba(255,255,255,0.04)',
                            boxShadow: '0 4px 30px rgba(0,0,0,0.3)'
                        }}
                    >
                        <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-3xl bg-pink-500" />
                        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-lg">
                            <BadgeCheck className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Premium Badge</h3>
                        <p className="text-gray-400 text-sm">Show off your premium status with a special badge</p>
                    </div>

                    {/* Perk 4 */}
                    <div
                        className="relative p-6 rounded-[24px] overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 text-center"
                        style={{
                            background: 'linear-gradient(145deg, #0e0c14 0%, #08070c 50%, #0c0a12 100%)',
                            border: '1px solid rgba(255,255,255,0.04)',
                            boxShadow: '0 4px 30px rgba(0,0,0,0.3)'
                        }}
                    >
                        <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-3xl bg-cyan-500" />
                        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-lg">
                            <Globe className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">All Servers</h3>
                        <p className="text-gray-400 text-sm">Premium works across all your Discord servers</p>
                    </div>
                </div>
            </div>

            {/* Bottom note */}
            <div className="text-center py-12 md:py-16 text-gray-500 text-xs md:text-sm px-4 relative z-10">
                <p>Need a custom plan for your community? <a href="https://discord.gg/V5kyZXWVxc" className="text-[var(--primary)] hover:underline">Contact us on Discord</a></p>
            </div>

            <Footer />
        </div>
    );
};

export default Premium;
