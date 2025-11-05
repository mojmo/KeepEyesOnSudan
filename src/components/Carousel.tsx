import { useState , useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import carousel_1 from '@assets/war_child.jpg' // image source: https://www.rescue.org/article/war-sudan-over-8-million-people-displaced
import carousel_2 from '@assets/displacement.jpg' // image source: https://news.un.org/en/story/2023/11/1143317
import carousel_3 from '@assets/destruction.jpg' // image source: https://arabcenterdc.org/resource/war-and-displacement-in-sudan/
import '@styles/carousel.css'

const Carousel = () => {

    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [carousel_1, carousel_2, carousel_3,];

    const imageTexts = [
        t('hero.carousel1'),
        t('hero.carousel2'),
        t('hero.carousel3'),
    ];

    const handleIndicatorClick = (index: number) => {
        setCurrentSlide(index);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Preload the first image */}
            <link rel="preload" href={images[0]} as="image" />

            <div className="carousel container">
                <div className="carousel__image-container">
                    {images.map((image, index) => {
                        let className = 'carousel__image';
                        if (index === currentSlide) {
                        className += ' active';
                        } else if (index < currentSlide) {
                        className += ' prev';
                        } else {
                        className += ' next';
                        }
                        return (
                            <div key={index} className={`carousel__slide ${currentSlide === index ? 'active' : ''}`}>
                                <img
                                    key={index}
                                    src={image}
                                    alt={`carousel-image-${index}`}
                                    className={className}
                                />
                                <div className="carousel__overlay">
                                    <h2 className="carousel__text">{imageTexts[index]}</h2>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="carousel__indicators">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`carousel__indicator ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => handleIndicatorClick(index)}
                        ></div>
                    ))}
                </div>
                
            </div>
        </>
    )

}

export default Carousel;