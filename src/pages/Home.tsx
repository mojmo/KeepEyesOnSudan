import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import Summary from '@components/Summary';
import LatestNews from '@components/LatestNews';
import SocialMedia from '@components/SocialMedia';
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Summary />
            <LatestNews />
            <SocialMedia />
        </>
    )
}

export default Home;