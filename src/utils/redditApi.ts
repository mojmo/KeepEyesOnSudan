import axios from "axios";

export const getPosts = async (lang: string, limit: number) => {
    const API_URL = import.meta.env.VITE_API_URL;
    try {
        const response = await axios.get(`${API_URL}/reddit`, {
            params: {lang, limit},
        });

        const posts = response.data.data.children.map((post: any) => ({
            title: post.data.title,
            url: "https://reddit.com" + post.data.permalink,
            subreddit: post.data.subreddit_name_prefixed,
            upvotes: post.data.ups,
            comments: post.data.num_comments,
        }));

        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};
