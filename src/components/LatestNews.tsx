import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@context/LanguageContext";
import { fetchNews } from "@utils/newsApi";
import SkeletonCard from "@components/SkeletonCard";
import article_image from "assets/KeepEyesOnSudan.png";
import "@styles/latestNews.css";

const LatestNews = () => {
    const { t } = useTranslation();
    const { currentLanguage } = useLanguage();
    const [news, setNews] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadNews = async () => {
            try {
                const articles = await fetchNews(5, currentLanguage);
                if (articles.length === 0) {
                    setError(t('latestNews.noNews'));
                    document.querySelector(".latest-news > .blurred__shape")?.remove();
                } else {
                    setNews(articles);
                }
            } catch (error) {
                console.error('Error loading news:', error);
                setError(t('latestNews.fetchError'));
                document.querySelector(".latest-news > .blurred__shape")?.remove();
            } finally {
                setIsLoading(false);
            }
        };
        loadNews();
    }, [currentLanguage, t]);

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
            <div className="latest-news__content container" id="latest-news">
                <div className="latest-news__header">
                    <h2>{t('latestNews.title')}</h2>
                </div>
                {isLoading ? (
                    <div className="latest-news__skeleton latest-news__container">
                        {[...Array(4)].map((_, index) => (
                            <SkeletonCard
                                key={index}
                                imageHeight="150px"
                                titleWidth="80%"
                                descriptionLines={3}
                                flex={window.innerWidth < 480 ? "0 0 95%" : "0 0 300px"}
                            />
                        ))}
                    </div>
                ) : error ?(
                    <div className="latest-news__container">
                        <p className="error">{error} &#128532;</p>
                    </div>
                ) : (
                    <>
                        <div className="latest-news__container">
                            {news.map((article: any, index: number) => (
                                <div key={index} className="latest-news__card" data-aos="fade-up" data-aos-delay={index * 100}>
                                    <img
                                        src={article.image || article_image}
                                        alt={article.title}
                                        className="latest-news__image"
                                    />
                                    <div className="latest-news__source">
                                        <span className="source-name">{article.source.name}</span>
                                        <span className="source-date">{article.publishedAt.split("T")[0]}</span>
                                    </div>
                                    <h3 className="latest-news__title">{article.title}</h3>
                                    <p className="latest-news__description">{article.description}</p>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="latest-news__card-link">{t('latestNews.checkArticle')}</a>
                                </div>
                            ))}
                        </div>
                        <div className="latest-news__arrows">
                            <button className="latest-news__arrow left" onClick={scrollLeft}>&lt;</button>
                            <button className="latest-news__arrow right" onClick={scrollRight}>&gt;</button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default LatestNews;