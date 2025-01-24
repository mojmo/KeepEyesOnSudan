import { useState, useEffect } from "react";
import { fetchNews } from "@utils/newsApi";
import article_image from "assets/images (18).jpg";
import "@styles/latestNews.css";

const LatestNews = () => {
    const [news, setNews] = useState<any[]>([]);
    // const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const loadNews = async () => {
            const articles = await fetchNews(5);
            console.log(articles);
            setNews(articles);
        };
        loadNews();
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
                        <h3 className="latest-news__title">{article.title}</h3>
                        <p className="latest-news__description">{article.description}</p>
                    </div>
                ))}
            </div>
            <button className="latest-news__arrow left" onClick={scrollLeft}>&lt;</button>
            <button className="latest-news__arrow right" onClick={scrollRight}>&gt;</button>
        </section>
    );
}

export default LatestNews;