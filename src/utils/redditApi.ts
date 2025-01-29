import axios from "axios";

export const getPosts = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/reddit", {
            params: { q: "Sudan War" },
        });

        const posts = response.data.data.children.map((post: any) => ({
            title: post.data.title,
            url: post.data.url,
            subreddit: post.data.subreddit_name_prefixed,
            upvotes: post.data.ups,
            comments: post.data.num_comments,
        }))
        .filter((post: any) => post.title.includes("Sudan"));

        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};
