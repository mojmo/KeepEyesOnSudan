import '@styles/navbar.css'
import logo from '@assets/logo.svg'
import humburger from '@assets/humburger.svg'
import cross from '@assets/cross.svg'
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/statistics">Statistics</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/social">Social</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;