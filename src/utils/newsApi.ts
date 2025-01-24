import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/everything";

export const fetchNews = async (pageSize: number = 5) => {
    console.log("API_KEY", API_KEY);
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
        return response.data.articles;
    } catch (erorr) {
        console.error(erorr);
        return [];
    }
};