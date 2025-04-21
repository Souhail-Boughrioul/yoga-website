import { useState } from 'react';
import './slider.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Slider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = 2;
  const maxIndex = Math.max(0, items.length - slidesPerView);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };


  return (
    <div className="slider-container">
      <div 
        className="slider-wrapper"
        style={{ transform: `translateX(-${(currentIndex * 50)}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="slide">
            <div className="slider-content">
                <div className="img-container">
                    <img src={item.src} alt="" />
                </div>
                <div className="expert-info">
                    <div className='header-info'>
                      <h2>{item.name}</h2>
                      <span>{item.job}</span>
                      <p>{item.desc}</p>
                    </div>
                    
                    <div>
                      <div className="social-links">
                          {item.icons.map((icon,index)=>(
                              <div className='icon' key={index}>{icon}</div>
                          ))}
                      </div>
                      <button className='btn-expert'>Learn more</button>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button 
          className="slider-button"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft />
        </button>
        <button 
          className="slider-button"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Slider;