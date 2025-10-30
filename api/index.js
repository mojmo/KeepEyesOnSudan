import  express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.REDDIT_CLIENT_ID;
const CLIENT_SECRET = process.env.REDDIT_CLIENT_SECRET;
const USERNAME = process.env.REDDIT_USERNAME;
const PASSWORD = process.env.REDDIT_PASS;
const REDDIT_API_URL = "https://oauth.reddit.com";

const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const GNEWS_API_URL = "https://gnews.io/api/v4/search";

const getAccessToken = async () => {
    const response = await axios.post(
        "https://www.reddit.com/api/v1/access_token",
        new URLSearchParams({
            grant_type: "password",
            username: USERNAME,
            password: PASSWORD,
        }),
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
            },
        }
    );
    return response.data.access_token;
};

app.get("/api/hello", (req, res) => {
    res.send("Hello from KeepEyesOnSudan API");
})

// Proxy route for Reddit API
app.get("/api/reddit", async (req, res) => {
    try {
        const token = await getAccessToken();
        const { q } = req.query;

        const response = await axios.get(`${REDDIT_API_URL}/search`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "User-Agent": "KeepEyesOnSudan",
            },
            params: { q, sort: "relevance", limit: 8 },
        });

        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Error fetching Reddit posts" });
    }
});

// Proxy route for GNews API
app.get("/api/news", async (req, res) => {
    try {
        const { max = 5 } = req.query;
        const today = new Date();
        const lastMonth = new Date(new Date().setDate(today.getDate() - 30));

        const response = await axios.get(GNEWS_API_URL, {
            params: {
                q: '"Sudan War" OR "Sudan crisis" OR "Sudan conflict" OR "SAF" OR "RSF" AND NOT "South Sudan"',
                from: lastMonth.toISOString().split("T")[0],
                sortBy: "publishedAt",
                apikey: GNEWS_API_KEY,
                max: max,
                lang: "en,fr,ar",
            }
            
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching news:", error.message);
        res.status(500).json({ error: "Error fetching news articles" });
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));