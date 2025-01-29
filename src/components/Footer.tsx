import '@styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__logo">
                    <h2>KeepEyesOnSudan</h2>
                </div>
                <div className="footer__content">
                    <div className="footer__links">
                        <p>Follow these accounts for the latest updates on Sudan and urgent assistance needed.</p>
                        <a href="https://x.com/sudan_war" target="_blank">Sudan War Updates</a>
                        <a href="https://x.com/AlMigdadHassan0" target="_blank">Almigdad Hassan</a>
                        <a href="https://x.com/BSonblast" target="_blank">Munchkin</a>
                        <a href="https://x.com/KhartoumKitchen" target="_blank">Khartoum Aid Kitchen</a>
                    </div>
                    <div className="footer__copyright">
                        © 2025 KeepEyesOnSudan. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;