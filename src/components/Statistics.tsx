import '@styles/statistics.css';
import StatisticsChart from './StatisticsChart';

const Statistics = () => {
    return (
        <section className="statistics">
            <div className="blurred__shape blurred__shape-left"></div>
            <div className="blurred__shape blurred__shape-right"></div>
            <div className="statistics__container container">
                <h2>Statistics</h2>
                <StatisticsChart />
            </div>
        </section>
    );
}

export default Statistics;