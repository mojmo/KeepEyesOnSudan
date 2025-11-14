import { useTranslation } from 'react-i18next';
import '@styles/footer.css';
import x from '@assets/x.svg';
import github from '@assets/github.svg';
import linkedin from '@assets/linkedin.svg';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__logo">
                    <h2>{t('footer.title')}</h2>
                    <p>{t('footer.description')}</p>
                </div>
                <div className="footer__content">
                    <div className="footer__links-container">
                        <div className="footer__links">
                            <h3>{t('footer.updates')}</h3>
                            <a className="tooltip" href="https://x.com/sudan_war" target="_blank">
                                {t('footer.sudanWarUpdates')}
                                <span className="tooltiptext">{t('footer.sudanWarUpdatesDescription')}</span>
                            </a>
                            <a className="tooltip" href="https://x.com/AlMigdadHassan0" target="_blank">
                                {t('footer.almigdadHassan')}
                                <span className="tooltiptext">{t('footer.almigdadHassanDescription')}</span>
                            </a>
                            <a className="tooltip" href="https://x.com/BSonblast" target="_blank">
                                {t('footer.saraElhassan')}
                                <span className="tooltiptext">{t('footer.saraElhassanDescription')}</span>
                            </a>
                            <a className="tooltip" href="https://x.com/VistaMaps" target="_blank">
                                {t('footer.vistaMaps')}
                                <span className="tooltiptext">{t('footer.vistaMapsDescription')}</span>
                            </a>
                        </div>
                        <div className="footer__links">
                            <h3>{t('footer.donnations')}</h3>
                            <a className="tooltip" href="https://sapa-usa.org/Hope-for-Sudan/" target="_blank">
                                {t('footer.SAPA')}
                                <span className="tooltiptext">{t('footer.SAPADescription')}</span>
                            </a>
                            <a className="tooltip" href="https://sadagaat-usa.org/" target="_blank">
                                {t('footer.sadagaat')}
                                <span className="tooltiptext">{t('footer.sadagaatDescription')}</span>
                            </a>
                            <a className="tooltip" href="https://www.khartoumaidkitchen.org/" target="_blank">
                                {t('footer.khartoumAidKitchen')}
                                <span className="tooltiptext">{t('footer.khartoumAidKitchenDescription')}</span>
                            </a>
                            <a className="tooltip" href="https://linktr.ee/basmat_wasl" target="_blank">
                                {t('footer.basmatWasl')}
                                <span className="tooltiptext">{t('footer.basmatWaslDescription')}</span>
                            </a>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <p>{t('footer.copyright')} <a href="https://github.com/mojmo" target="_blank"><strong>{t('footer.mugtaba')}</strong></a></p>
                        <div className="footer__icons">
                            <a href="https://github.com/mojmo" target="_blank"><img src={github} alt="github" /></a>
                            <a href="https://www.linkedin.com/in/mojtaba-mohamed" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                            <a href="https://twitter.com/MOJMO_" target="_blank"><img src={x} alt="x" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;