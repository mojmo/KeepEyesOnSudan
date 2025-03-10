import axios from "axios";

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const BASE_URL = "https://gnews.io/api/v4/search?";
const CACHE_KEY = "cached_news";
const CACHE_EXPIRY = 60 * 60 * 24 * 7 * 1000;

export const fetchNews = async (numberOfArticles: number = 5) => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const now = new Date().getTime();
    const today = new Date();
    let lastMonth = new Date(new Date().setDate(today.getDate() - 30)); 

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
                q: '"Sudan War" OR "Sudna crisis" OR "Sudan conflict" OR "SAF" OR "RSF" -"South Sudan"',
                from: lastMonth.toISOString().split("T")[0],
                sortBy: "publishedAt",
                apikey: API_KEY,
                max: numberOfArticles,
                language: "en",
            },
        });

        const articles = response.data.articles;

        const filteredArticles = articles.filter((article: any) => {
            const title = article.title.toLowerCase();
            const description = article.description?.toLowerCase() || "";
            return (
                title.includes("sudan") ||
                description.includes("sudan")
            );
        });

        const cachedData = {
            data: filteredArticles,
            timestamp: now
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cachedData));

        console.log('Fetched fresh news data');
        return filteredArticles;
    } catch (erorr) {
        return [];
    }
};