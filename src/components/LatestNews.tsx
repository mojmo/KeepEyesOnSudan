import { useState, useEffect } from "react";
import { fetchNews } from "@utils/newsApi";
import article_image from "assets/images (18).jpg";
import "@styles/latestNews.css";

const LatestNews = () => {
    const [news, setNews] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {

        let isMounted = true; // Flag to track if the component is mounted
        const loadNews = async () => {
            if (isLoading) return;
            setIsLoading(true);
            try {
                const articles = await fetchNews(5); // Fetch 5 articles for the home page
                if (isMounted) {
                    setNews(articles);
                }
            } catch (error) {
                console.error('Error loading news:', error);
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };
        loadNews();

        return () => {
            isMounted = false;
        };
    }, []);

    const scrollLeft = () => {
        const container = document.querySelector(".latest-news__container");
        if (container) {
            container.scrollBy({left: -300, behavior:"smooth"});
        }
    }

    const scrollRight = () => {
        const container = document.querySelector(".latest-news__container");
        if (container) {
            container.scrollBy({left: 300, behavior:"smooth"});
        }
    }

    return (
        <section className="latest-news">
            <div className="blurred__shape blurred__shape-left"></div>
            <div className="blurred__shape blurred__shape-right"></div>
            <div className="latest-news__content container">
                <div className="latest-news__header">
                    <h2>Latest News</h2>
                    <a href="/news" className="see-all-button">See All</a>
                </div>
                <div className="latest-news__container">
                    {news.map((article: any, index: number) => (
                        <div key={index} className="latest-news__card">
                            <img
                                src={article.urlToImage || article_image}
                                alt={article.title}
                                className="latest-news__image"
                            />
                            <div className="latest-news__source">
                                <span className="source-name">{article.source.name}</span>
                                <span className="source-date">{article.publishedAt.split("T")[0]}</span>
                            </div>
                            <h3 className="latest-news__title">{article.title}</h3>
                            <p className="latest-news__description">{article.description}</p>
                        </div>
                    ))}
                </div>
                <div className="latest-news__arrows">
                    <button className="latest-news__arrow left" onClick={scrollLeft}>&lt;</button>
                    <button className="latest-news__arrow right" onClick={scrollRight}>&gt;</button>
                </div>
            </div>
        </section>
    );
}

export default LatestNews;