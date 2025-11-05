import '@styles/navbar.css'
import logo from '@assets/dark_logo.svg'
import humburger from '@assets/dark_humburger.svg'
import cross from '@assets/dark_cross.svg'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {

    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {setIsOpen(!isOpen)};

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar__logo">
                    <img className='navbar__logo-img' src={logo} alt="logo" />
                    <span>KeepEyesOnSudan</span>
                </div>

                <div className='navbar__toggle' onClick={toggleMenu}>
                    {isOpen ?
                    <img className='navbar__toggle-img' src={cross} alt="close menu" /> :
                    <img className='navbar__toggle-img' src={humburger} alt="open menu" />}
                </div>

                <ul className={`navbar__links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#summary" onClick={() => setIsOpen(false)}>{t('navbar.whatIsHappeningInSudan')}</a></li>
                    <li><a href="#statistics" onClick={() => setIsOpen(false)}>{t('navbar.statistics')}</a></li>
                    <li><a href="#latest-news" onClick={() => setIsOpen(false)}>{t('navbar.news')}</a></li>
                    <li><a href="#social-media" onClick={() => setIsOpen(false)}>{t('navbar.socialMedia')}</a></li>
                    <li><LanguageSwitcher /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;