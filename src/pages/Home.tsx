import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import Summary from '@components/Summary';
import LatestNews from '@components/LatestNews';
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Summary />
            <LatestNews />
        </>
    )
}

export default Home;