import './HeyFit.css'

const HeyFit = () => {
  return (
    // fit journey
    <div className='fit-journey'>
      <div className="fit-content">
        <div className="fit-info">
          <h1 className='title'>Your Fitness <span>Journey</span> Starts Here</h1>
          <p className='desc'>Get ready to sweat, sculpt, and transform with HeyFit! With personalized plans tailored to your health goals, you’ll crush your fitness and weight-loss journey, see real results, and feel unstoppable.</p>
          <div className="links">
            <img className='qr-fit' src="src/assets/qr-code.png" alt="qr-img" />
            <img className='rat-fit' src="src/assets/heyfit-banner-rating.png" alt="rating-img" />
          </div>
        </div>
        <div className="fit-img">
          <img src="src/assets/heyfit-hero-1.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeyFit