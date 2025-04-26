import { MAGAZINE } from '../../constants';
import CardMagazine from './CardMagazine';
import './Magazine.css';

const Magazine = () => {
  return (
    <div className="magazine">
        <div className="container magazine-content">
            <h1><span>Health Magazine</span> by HeyWellness</h1>
            <p className='title'>Nourish your mind with our motivational reads, research-backed mental health guides, and self-care tips. Dive in and discover your next favorite read! </p>
            <div className="cards-container">
                {MAGAZINE.slice(0,3).map((card,index)=>(
                    <CardMagazine date={card.date} time={card.time} key={index} item={card.id} title={card.title} src={card.src} />
                ))}
                
            </div>
            <div className="btn-cont">
                <button className='btn-article'>All Articles</button>
            </div>
        </div>
    </div>
  )
}

export default Magazine