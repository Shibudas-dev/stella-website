import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // Initialize based on window width to avoid "shrink-expand" flash on load
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/', isExternal: false },
        { name: 'Commands', path: '/commands', isExternal: false },
    ];

    // Detect scroll and screen resize
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calculate dynamic dimensions based on state
    const getNavbarStyles = () => {
        if (isDesktop) {
            return {
                width: '650px',
                height: '70px', // Increased height as requested
                borderRadius: '32px'
            };
        }
        // Mobile State
        return {
            width: isOpen ? '360px' : '320px',
            height: isOpen ? '320px' : '70px', // Increased height
            borderRadius: '32px'
        };
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center w-full max-w-[95%] pointer-events-none">
            <nav
                className={`
          pointer-events-auto
          transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]
          bg-black/20 border border-white/10 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)]
          overflow-hidden
          ${scrolled && !isOpen ? 'bg-black/50' : ''}
          ${isOpen ? 'bg-black/60 border-white/10' : ''}
        `}
                style={getNavbarStyles()}
            >
                <div className="flex items-center justify-between px-4 h-[70px] transition-all duration-500">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3 group shrink-0" onClick={() => setIsOpen(false)}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-[var(--primary)] blur-md opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
                            <img src="/logo.png" alt="Stella Logo" className="relative w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <span className={`text-white font-bold tracking-wide text-sm hidden sm:block opacity-90 group-hover:opacity-100 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}>
                            STELLA
                        </span>
                    </Link>

                    {/* Desktop Nav Links - Hidden on Mobile */}
                    <div className={`${isOpen ? 'opacity-0 pointer-events-none translate-y-2' : 'opacity-100 flex translate-y-0'} items-center gap-1 absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out hidden md:flex`}>
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
                        {/* CTA Button (Desktop - Hidden when Open) */}
                        <Link
                            to="/invite"
                            className={`
                 ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'} 
                 hidden md:flex items-center gap-2 px-5 py-2 bg-[var(--primary)] text-white text-xs font-bold rounded-full hover:shadow-[0_0_15px_var(--primary-glow)] hover:scale-105 transition-all duration-300
              `}
                        >
                            Add App
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white hover:text-[var(--primary)] transition-all duration-300 active:scale-90"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className={`transition-transform duration-500 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Expanded Menu (Dynamic Island Expansion) */}
                <div className={`
          flex flex-col gap-2 px-4 pt-2
          transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] delay-100
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-all duration-300 active:scale-98"
                        >
                            <span className="font-medium">{link.name}</span>
                            {location.pathname === link.path && <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_5px_var(--primary-glow)]"></div>}
                        </Link>
                    ))}
                    <a
                        href="https://discord.gg/9PczU7aqTD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-all duration-300 active:scale-98"
                    >
                        <span className="font-medium">Support Server</span>
                    </a>
                    <Link
                        to="/invite"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center p-3 mt-2 rounded-xl bg-[var(--primary)] text-white font-bold text-sm shadow-[0_0_15px_rgba(255,0,60,0.3)] transition-transform active:scale-95"
                    >
                        Add to Discord server
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
