import '@styles/summary.css'
import escape from '@assets/escape.svg'
import medical from '@assets/medical_care.svg'
import building from '@assets/building.svg'
import peace from '@assets/peace.svg'

const Summary = () => {
    return (
        <div className="summary" >
            <div className="blurred__shape blurred__shape-left"></div>
            <div className="blurred__shape blurred__shape-right"></div>
            <div className="summary__container container" id="summary">
                <div className="summary__text">
                    <h2>What's happening in Sudan?</h2>
                </div>
                <div className="summary__card-container">
                    <div className="summary__card">
                        <img src={escape} alt="summary-1" />
                        <p>Sudan is experiencing a severe and ongoing conflict that began in April 2023. The fighting has turned many areas into dangerous zones, forcing millions of people to flee their homes in search of safety.</p>
                    </div>
                    <div className="summary__card">
                        <img src={medical} alt="summary-2" />
                        <p>Basic services like healthcare, education, and access to food and water have been disrupted. Hospitals and schools are no longer functioning in many regions, leaving communities without support.</p>
                    </div>
                    <div className="summary__card">
                        <img src={building} alt="summary-3" />
                        <p>The crisis has also caused significant economic challenges. Families have lost their livelihoods, businesses have shut down, and the country’s infrastructure has been heavily damaged, deepening the suffering.</p>
                    </div>
                    <div className="summary__card">
                        <img src={peace} alt="summary-4" />
                        <p>The humanitarian situation continues to worsen. Families are struggling to survive amidst displacement, food shortages, and growing health risks. Sudan is in urgent need of assistance to address this unfolding crisis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;
