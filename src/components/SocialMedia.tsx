import { useEffect, useState } from "react";
import { getPosts } from "@utils/redditApi";
import reddit from "assets/reddit_icon.svg";
import "@styles/socialMedia.css";

type Post = {
    title: string;
    url: string;
    subreddit: string;
    upvotes: number;
    comments: number;
};

const SocialMedia = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts = await getPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };

        fetchPosts();
    }, []);

    console.log(posts);

    return (
        <section className="social-media">
            <div className="blurred__shape blurred__shape-left"></div>
            <div className="blurred__shape blurred__shape-right"></div>
            <div className="social-media__content container">
                <div className="social-media__header">
                    <h2>Social Media</h2>
                    <a href="/news" className="see-all-button">See All</a>
                </div>
                <div className="social-media__container">
                    {posts.length > 0 ? (
                        posts.map((post, index) => (
                            <div className="social-media__card" key={index}>
                                <div className="social-media__card-logo">
                                    <img src={reddit} alt="Reddit" />
                                </div>
                                <div className="social-media__card-post">
                                    <h3>{post.title}</h3>
                                    <p>{post.subreddit}</p>
                                    <p>{post.upvotes} upvotes, {post.comments} comments</p>
                                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="social-media__card-post-link">Read More</a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading posts...</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default SocialMedia;