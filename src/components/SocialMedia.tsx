import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getPosts } from "@utils/redditApi";
import SkeletonCard from "@components/SkeletonCard";
import { RedditPost } from "@utils/types";
import reddit from "assets/reddit_icon.svg";
import "@styles/socialMedia.css";

const SocialMedia = () => {

    const { t } = useTranslation();

    const [posts, setPosts] = useState<RedditPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts = await getPosts();
                if (fetchedPosts.length === 0) {
                    setError(t('socialMedia.noUpdates'));
                    document.querySelector(".social-media > .blurred__shape")?.remove();
                } else {
                    setPosts(fetchedPosts);
                }
            } catch (error) {
                setError(t('socialMedia.fetchError'));
                document.querySelector(".social-media > .blurred__shape")?.remove();
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section className="social-media">
            <div className="blurred__shape blurred__shape-left"></div>
            <div className="blurred__shape blurred__shape-right"></div>
            <div className="social-media__content container" id="social-media">
                <div className="social-media__header">
                    <h2>{t('socialMedia.title')}</h2>
                </div>
                {isLoading ? (
                    <div className="social-media__skeleton">
                        {[...Array(4)].map((_, index) => (
                            <SkeletonCard
                                key={index}
                                imageHeight="100px"
                                titleWidth="60%"
                                descriptionLines={1}
                                cardWidth={window.innerWidth < 768 ? "100%" : "calc(50% - 1rem)"}
                            />
                        ))}
                    </div>
                ) : error ? (
                    <p className="error">{error} &#128532;</p>
                ) : (
                    <div className="social-media__container">
                        {posts.map((post, index) => (
                            <div className="social-media__card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="social-media__card-logo">
                                    <img src={reddit} alt="Reddit" />
                                </div>
                                <div className="social-media__card-post">
                                    <h3>{post.title}</h3>
                                    <p>{post.subreddit}</p>
                                    <p>{post.upvotes} {t('socialMedia.upvotes')}, {post.comments} {t('socialMedia.comments')}</p>
                                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="social-media__card-post-link">{t('socialMedia.checkReddit')}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default SocialMedia;