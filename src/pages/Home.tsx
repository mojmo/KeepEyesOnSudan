import React, { Suspense } from 'react';
import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import Summary from '@components/Summary';
import Footer from '@components/Footer';
import Statistics from '@components/Statistics'
import SkeletonCard from '@components/SkeletonCard';

const LatestNews = React.lazy(() => import('@components/LatestNews'));
const SocialMedia = React.lazy(() => import('@components/SocialMedia'));

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Summary />
            <Statistics />
            <Suspense fallback={<SkeletonCard />}>
                <LatestNews />
                <SocialMedia />
            </Suspense>
            <Footer />
        </>
    )
}

export default Home;