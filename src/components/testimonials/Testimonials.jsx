import TestiCard from './TestiCard'
import { TestimonialsInfo } from '../../constants'
import './Testimonials.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // -1 to account for rounding errors
    }
  };

  // Add scroll event listener and initial check
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      checkScrollPosition();
      slider.addEventListener('scroll', checkScrollPosition);
      return () => slider.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -50, // adjust this value
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 50, // adjust this value
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='testimonials'>
        <h1>What HeyWellness <span>community</span> says About Our Products</h1>
        <div className="testi-container" ref={sliderRef}>
          <div className="testi-wrapper" >
            {TestimonialsInfo.map((card,index)=>(
              <TestiCard key={index} src={card.img} title={card.title} item={card.id} type={card.type}
                profile={card.profile} rating={card.rating} name={card.name} desc={card.desc}/>
          ))}
          </div>
          
        </div>
        <div className="btn-container">
          <button className='btn' onClick={scrollLeft} disabled={isAtStart}><FaArrowLeft /></button>
          <button className='btn' onClick={scrollRight} disabled={isAtEnd}><FaArrowRight /></button>
        </div>
    </div>
  )
}

export default Testimonials