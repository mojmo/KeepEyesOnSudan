import axios from "axios";
import { CachedData, NewsArticle } from "@utils/types";

const API_URL = import.meta.env.VITE_API_URL;

const CACHE_EXPIRY = 60 * 60 * 24 * 7 * 1000; // 7 days

export class NewsAPIError extends Error {
    constructor(message: string, public statusCode?: number) {
        super(message);
        this.name = 'NewsAPIError';
    }
}

export const fetchNews = async (numberOfArticles: number = 5, lang: string) => {
    // create language specific cache key
    const CACHE_KEY = `cached_news_${lang}`;
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
        const response = await axios.get(`${API_URL}/news`, {
            params: {
                lang: lang,
                max: numberOfArticles,
            },
        });

        const articles = response.data.articles;

        const filteredArticles: NewsArticle[] = articles.filter((article: NewsArticle) => {
            return (
                article.publishedAt &&
                article.title &&
                article.url &&
                article.description &&
                article.source?.name &&
                article.image
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