import CommandList from '../components/CommandList';
import Footer from '../components/Footer';

const Commands = () => {
    return (
        <div className="min-h-screen flex flex-col pt-32">
            <div className="container mb-8 text-center animate-[fadeIn_0.5s_ease-out]">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Commands</h1>
                <p className="text-gray-400">Explore everything Stella can do for your server.</p>
            </div>
            <CommandList />
            <Footer />
        </div>
    );
};

export default Commands;
