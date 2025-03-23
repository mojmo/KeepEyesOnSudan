import  express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.VITE_REDDIT_CLIENT_ID;
const CLIENT_SECRET = process.env.VITE_REDDIT_CLIENT_SECRET;
const USERNAME = process.env.VITE_REDDIT_USERNAME;
const PASSWORD = process.env.VITE_REDDIT_PASS;
const REDDIT_API_URL = "https://oauth.reddit.com";

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
        res.status(500).send("Error fetching Reddit posts");
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));