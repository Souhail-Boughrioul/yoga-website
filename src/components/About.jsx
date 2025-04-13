import { CARDS } from "../constants"
import Card from "./Card"

const About = () => {
  return (
    <div className="about">
        <div className="container about-content">
            <div className="about-header">
                <h1>What <span>HeyWellness</span><br /> Is All About</h1>
                <p>At HeyWellness, we’re committed to creating products that are both effective and rooted in expertise. Our mission is to offer tools that are flexible, supportive, and thoughtfully designed to align with your unique wellness journey.</p>
            </div>

            <div className="about-cards">
                {CARDS.map((card, index)=>(
                    <Card key={index} src={card.src} title={card.title} desc={card.desc} classContainer={`card-${card.id}`} />
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default About