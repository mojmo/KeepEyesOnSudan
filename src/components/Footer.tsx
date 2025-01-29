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
                        <a className="tooltip" href="https://x.com/sudan_war" target="_blank">
                            Sudan War Updates
                            <span className="tooltiptext">A free platform run by independent youth specializing in reporting on daily events and summarizing the situation in Sudan.</span>
                        </a>
                        <a className="tooltip" href="https://x.com/AlMigdadHassan0" target="_blank">
                            Almigdad Hassan
                            <span className="tooltiptext">Correspondent @AlArabiya @AlHadath Channels-Sudan.</span>
                        </a>
                        <a className="tooltip" href="https://x.com/BSonblast" target="_blank">
                            Munchkin
                            <span className="tooltiptext">Content Creator</span>
                        </a>
                        <a className="tooltip" href="https://x.com/KhartoumKitchen" target="_blank">
                            Khartoum Aid Kitchen
                            <span className="tooltiptext">non-profit initiative helping to feed families in need in Sudan</span>
                        </a>
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