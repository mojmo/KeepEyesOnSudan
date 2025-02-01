import '@styles/statistics.css';
import StatisticsChart from './StatisticsChart';

const Statistics = () => {
    return (
        <section className="statistics">
            <div className="blurred__shape blurred__shape-left"></div>
            <div className="blurred__shape blurred__shape-right"></div>
            <div className="statistics__container container" id="statistics">
                <h2>Statistics</h2>
                <StatisticsChart />
                <p className='source'>Source: <a href="https://data.unhcr.org/en/situations/sudansituation">UNHCR Refugee Data</a></p>
            </div>
        </section>
    );
}

export default Statistics;