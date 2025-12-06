import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="flex-1 w-full">
                <Hero />
                <Features />
            </main>
            <Footer />
        </>
    );
};

export default Home;
