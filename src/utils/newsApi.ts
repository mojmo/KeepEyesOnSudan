import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/everything";
const CACHE_KEY = "cached_news";
const CACHE_EXPIRY = 60 * 60 * 24 * 7;

export const fetchNews = async (pageSize: number = 5) => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const now = new Date().getTime();

    if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        if (now - timestamp < CACHE_EXPIRY) {
            console.log("using cached news");
            return data;
        }
    }
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: "Sudan War",
                from: "2025-01-1",
                sortBy: "publishedAt",
                apiKey: API_KEY,
                pageSize: pageSize,
            },
        });

        const articles = response.data.articles;

        const cachedData = {
            data: articles,
            timestamp: now
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cachedData));

        console.log('Fetched fresh news data');
        return articles;
    } catch (erorr) {
        console.error(erorr);
        return [];
    }
};