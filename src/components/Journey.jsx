import { JOURNEYS } from "../constants"
import CardJourney from "./CardJourney"

const Journey = () => {
  return (
    <div className="journey">
        <div className="container journey-content">
            <div className="journey-desc">
                <h1>Start Your Wellness <span>Journey</span> Today</h1>
                <p>Get started on your journey toward a healthier lifestyle in just three steps.</p>
                <img src="/src/assets/steps.webp" alt="" />
            </div>
            <div className="cards-journey">
                {JOURNEYS.map((journey)=>(
                  <CardJourney key={journey.id} step={journey.id} title={journey.title} desc={journey.desc} classContainer={`item-${journey.id}`}/>  
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Journey