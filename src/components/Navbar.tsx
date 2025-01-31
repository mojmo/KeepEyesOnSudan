import '@styles/navbar.css'
import logo from '@assets/dark_logo.svg'
import humburger from '@assets/dark_humburger.svg'
import cross from '@assets/dark_cross.svg'
import { useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {setIsOpen(!isOpen)};

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar__logo">
                        <img className='navbar__logo-img' src={logo} alt="logo" />
                        <span>KeepEyesOnSudan</span>
                    </div>

                    <div className='navbar__toggle' onClick={toggleMenu}>
                        {isOpen ? <img className='navbar__toggle-img' src={cross} alt="cross" /> : <img className='navbar__toggle-img' src={humburger} alt="humburger" />}
                    </div>

                    <ul className={`navbar__links ${isOpen ? 'active' : ''}`}>
                        <li><a href="#summary">What's happening in Sudan?</a></li>
                        <li><a href="#statistics">Statistics</a></li>
                        <li><a href="#latest-news">Latest News</a></li>
                        <li><a href="#social-media">Social Media</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;