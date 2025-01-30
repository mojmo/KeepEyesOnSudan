import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import Summary from '@components/Summary';
import LatestNews from '@components/LatestNews';
import SocialMedia from '@components/SocialMedia';
import Footer from '@components/Footer';
import Statistics from '@components/Statistics'
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Summary />
            <Statistics />
            <LatestNews />
            <SocialMedia />
            <Footer />
        </>
    )
}

export default Home;