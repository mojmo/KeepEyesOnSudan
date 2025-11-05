import '@styles/summary.css'
import escape from '@assets/escape.svg'
import medical from '@assets/medical_care.svg'
import building from '@assets/building.svg'
import peace from '@assets/peace.svg'
import { useTranslation } from 'react-i18next';

const Summary = () => {

    const { t } = useTranslation();

    return (
        <div className="summary" >
            <div className="blurred__shape blurred__shape-left"></div>
            <div className="blurred__shape blurred__shape-right"></div>
            <div className="summary__container container" id="summary">
                <div className="summary__text">
                    <h2>{t('summary.title')}</h2>
                </div>
                <div className="summary__card-container">
                    <div className="summary__card" data-aos="fade-up" data-aos-delay="100">
                        <img src={escape} alt="summary-1" />
                        <p>{t('summary.escapeCard')}</p>
                    </div>
                    <div className="summary__card" data-aos="fade-up" data-aos-delay="100">
                        <img src={medical} alt="summary-2" />
                        <p>{t('summary.medicalCard')}</p>
                    </div>
                    <div className="summary__card" data-aos="fade-up" data-aos-delay="100">
                        <img src={building} alt="summary-3" />
                        <p>{t('summary.economicCard')}</p>
                    </div>
                    <div className="summary__card" data-aos="fade-up" data-aos-delay="100">
                        <img src={peace} alt="summary-4" />
                        <p>{t('summary.peaceCard')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;
