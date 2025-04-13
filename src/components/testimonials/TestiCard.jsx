import StarRating from '../star/StarRating'
import './Testimonials.css'

const TestiCard = ({src,title,profile,rating,desc,name,item,type}) => {
  return (
    <div className={`card card-${item}`}>
       {src && <img className='img-card' src={src} alt="" />} 
        <div className="card-info">
            <h3>{title}</h3>
            <StarRating rating={rating}/>
            <p className="desc-card">{desc}</p>
           
            <div className="profile-container">
                <div className="profile-info">
                   <img src={profile} alt="" /> 
                   <p className="name">{name}</p>
                </div>
                <p className='subdesc' style={{color: (type === 'HeyZen') ? '#275e9a' : ''}}>{type}</p>
            </div>
        </div>
    </div>
  )
}

export default TestiCard