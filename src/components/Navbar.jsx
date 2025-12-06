import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/', isExternal: false },
        { name: 'Commands', path: '/commands', isExternal: false },
    ];

    // Detect scroll to adjust transparency/size if needed (optional dynamic effect)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center w-full max-w-[90%] md:max-w-fit pointer-events-none">
            <nav className={`
        pointer-events-auto
        transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
        ${isOpen ? 'w-full max-w-sm rounded-[32px]' : 'rounded-full min-w-[320px] md:min-w-[600px]'}
        ${scrolled ? 'bg-black/40 border-white/5' : 'bg-black/20 border-white/10'}
        backdrop-blur-xl border shadow-[0_8px_40px_rgba(0,0,0,0.4)]
        p-2
      `}>
                <div className="flex items-center justify-between px-4 h-12 md:h-14">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3 group shrink-0" onClick={() => setIsOpen(false)}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-[var(--primary)] blur-md opacity-20 group-hover:opacity-50 transition-opacity"></div>
                            <img src="/logo.png" alt="Stella Logo" className="relative w-8 h-8 object-contain transition-transform group-hover:scale-110" />
                        </div>
                        <span className="text-white font-bold tracking-wide text-sm hidden sm:block opacity-90 group-hover:opacity-100 transition-opacity">STELLA</span>
                    </Link>

                    {/* Desktop Nav Links - Hidden on Mobile */}
                    <div className={`${isOpen ? 'hidden' : 'hidden md:flex'} items-center gap-1 absolute left-1/2 -translate-x-1/2`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`
                  px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300
                  ${location.pathname === link.path
                                        ? 'bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'}
                `}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://discord.gg/9PczU7aqTD"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-1.5 rounded-full text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                        >
                            Support
                        </a>
                    </div>

                    {/* Right Section: Mobile Toggle or CTA */}
                    <div className="flex items-center gap-2">
                        {/* CTA Button (Desktop) */}
                        <Link
                            to="/invite"
                            className={`${isOpen ? 'hidden' : 'hidden md:flex'} items-center gap-2 px-5 py-2 bg-[var(--primary)] text-white text-xs font-bold rounded-full hover:shadow-[0_0_15px_var(--primary-glow)] hover:scale-105 transition-all duration-300`}
                        >
                            Add App
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white hover:text-[var(--primary)] transition-colors active:scale-95"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Expanded Menu (Dynamic Island Expansion) */}
                <div className={`
          overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isOpen ? 'max-h-[300px] opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'}
        `}>
                    <div className="flex flex-col gap-2 px-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-all"
                            >
                                <span className="font-medium">{link.name}</span>
                                {location.pathname === link.path && <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_5px_var(--primary-glow)]"></div>}
                            </Link>
                        ))}
                        <Link
                            to="/invite"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center p-3 mt-2 rounded-xl bg-[var(--primary)] text-white font-bold text-sm shadow-[0_0_15px_rgba(255,0,60,0.3)]"
                        >
                            Add to Discord server
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
