import { useState , useEffect} from 'react'
import carousel_1 from '@assets/carousel_1.jpg'
import carousel_2 from '@assets/carousel_2.jpg'
import carousel_3 from '@assets/carousel_3.jpg'
import '@styles/carousel.css'

const images = [
    carousel_1,
    carousel_2,
    carousel_3,
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
                        <img
                            key={index}
                            src={image}
                            alt={`carousel-image-${index}`}
                            className={className}
                        />
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