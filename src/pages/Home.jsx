import Hero from '../components/Hero';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import StreamPlatforms from '../components/StreamPlatforms';
import Instructions from '../components/Instructions';
import QuickCommands from '../components/QuickCommands';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <main className="flex-1 w-full">
                <Hero />
                <Features />
                <Showcase />
                <StreamPlatforms />
                <Instructions />
                <QuickCommands />
                <FAQ />
            </main>
            <Footer />
        </>
    );
};

export default Home;
