import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full py-8 border-t border-white/5 bg-black/50 backdrop-blur-sm mt-auto">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                    <span>&copy; {new Date().getFullYear()} Stella Bot</span>
                </div>

                <div className="flex items-center gap-2">
                    Made with <Heart className="w-4 h-4 text-[var(--primary)] fill-[var(--primary)] animate-pulse" /> by Stella Team
                </div>
            </div>
        </footer>
    );
};

export default Footer;
