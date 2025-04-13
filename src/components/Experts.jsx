import { sliderItems } from "../constants"
import Slider from "./slider/Slider"

const Experts = () => {
  return (
    <div className="experts">
        <div className="container experts-content">
            <h1>Curated by Fitness and <br /> Wellness <span>Experts</span></h1>
            <Slider items={sliderItems}/>
        </div>
    </div>
  )
}

export default Experts