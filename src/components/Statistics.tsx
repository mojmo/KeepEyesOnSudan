import { useTranslation } from 'react-i18next';
import '@styles/statistics.css';
import StatisticsChart from './StatisticsChart';

const Statistics = () => {

    const { t } = useTranslation();

    return (
        <section className="statistics">
            <div className="blurred__shape blurred__shape-left"></div>
            <div className="blurred__shape blurred__shape-right"></div>
            <div className="statistics__container container" id="statistics">
                <h2>{t('statistics.title')}</h2>
                <StatisticsChart />
                <p className='source'>{t('statistics.source')}: <a href="https://data.unhcr.org/en/situations/sudansituation">{t('statistics.statisticsSource')}</a></p>
            </div>
        </section>
    );
}

export default Statistics;