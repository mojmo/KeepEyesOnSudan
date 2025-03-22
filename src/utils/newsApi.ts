import axios from "axios";
import { CachedData, NewsArticle } from "@utils/types";

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const BASE_URL = "https://gnews.io/api/v4/search";
const CACHE_KEY = "cached_news";
const CACHE_EXPIRY = 60 * 60 * 24 * 7 * 1000; // 7 days

export class NewsAPIError extends Error {
    constructor(message: string, public statusCode?: number) {
        super(message);
        this.name = 'NewsAPIError';
    }
}

export const fetchNews = async (numberOfArticles: number = 5): Promise<NewsArticle[]> => {
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
                q: '"Sudan War" OR "Sudna crisis" OR "Sudan conflict" OR "SAF" OR "RSF" AND NOT "South Sudan"',
                from: lastMonth.toISOString().split("T")[0],
                sortBy: "publishedAt",
                apikey: API_KEY,
                max: numberOfArticles,
                language: "en,fr,ar",
            },
        });

        const articles = response.data.articles;

        const filteredArticles: NewsArticle[] = articles.filter((article: NewsArticle) => {
            const title = article.title.toLowerCase();
            const description = article.description?.toLowerCase() || "";
            return (
                title.includes("sudan") || title.includes("SAF") ||
                description.includes("sudan ") || description.includes("SAF")
            );
        });

        const cachedData: CachedData = {
            data: filteredArticles,
            timestamp: now
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cachedData));

        console.log('Fetched fresh news data');
        return filteredArticles;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new NewsAPIError(
                error.response?.data?.message || 'Failed to fetch news',
                error.response?.status
            );
        }
        throw new NewsAPIError('An unexpected error occured');
    }
};