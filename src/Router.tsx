import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Statistics from '@pages/Statistics';
import News from '@pages/News';
import Social from '@pages/Social';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/news" element={<News />} />
                <Route path="/social" element={<Social />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;