
import Carousel from "./Carousel";
import '@styles/hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="blurred__shape blurred__shape-left"></div>
            <div className="blurred__shape blurred__shape-right"></div>
            <Carousel/>
        </div>
    )
}

export default Hero;
