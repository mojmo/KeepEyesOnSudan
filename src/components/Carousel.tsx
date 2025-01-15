import { useState , useEffect} from 'react'
import carousel_1 from '@assets/carousel_1.jpg'
import carousel_2 from '@assets/carousel_2.jpg'
import carousel_3 from '@assets/carousel_3.jpg'
import '@styles/carousel.css'

const images = [carousel_1, carousel_2, carousel_3,];

const imageTexts = [
    'Children bear the brunt of the war—over 13 million require urgent protection and aid to survive.',
    'Over 4.5 million people displaced since the conflict began, seeking safety within and beyond Sudan\'s borders.',
    'Daily death tolls continue to rise, with thousands of innocent lives lost to violence and unrest.',
];

const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

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