import './HeyFit.css'
import '../hello/Hellopage.css'
import { useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const HeyFit = () => {

  const [scrollY, setScrollY] = useState(0);
  
      useEffect(() => {
          const onScroll = () => setScrollY(window.scrollY);
          window.addEventListener('scroll', onScroll, { passive: true });
          return () => window.removeEventListener('scroll', onScroll);
      }, []);
  
  const translateXTop = scrollY * 0.1;
  const translateXBottom = -scrollY * 0.1;

  return (
    <>
    {/* fit journey */}
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

    {/* body-parts */}
    <div className="body-parts">
      <div className="body-content">
        <div className="body-info">
          <h1 className='title'>Start Your Fitness Journey</h1>
          <p className='desc'>Try a beginner-friendly program or sweat it out with a high-intensity workout! No matter your fitness level and body goal, we have a plan for you!</p>
        </div>
        <div className="body-img">
          <img src="src/assets/image-82.webp" alt="" />
        </div>
      </div>
    </div>

    {/* exercices */}
    <div className="mental exercices">
                <h1 className='title'>100+ exercises for your body</h1>
                <div className="rows">
                  <div className="row row-top" 
                      style={{ transform: `translateX(${translateXTop}px)` }}
                    >
                    <div className="item-1">
                        <img src="src/assets/exercise-1-1.webp" alt="" />
                    </div>
                    <div className="item-2">Weight loss</div>
                    <div className="item-3">
                        <img src="src/assets/healthy-food.svg" alt="meditation" />
                        <p>Nutrition tips</p>
                    </div>
                    <div className="item-4">
                        <img src="src/assets/exercise-2.webp" alt="" />  
                    </div>
                    <div className="item-5">
                        <img src="src/assets/icon-2.svg" alt="" />
                        <p>Whole body workout</p>
                    </div>
                    <div className="item-1">
                        <img src="src/assets/exercise-1.webp" alt="" />
                    </div>
                    <div className="item-2">
                      Weight loss
                    </div>
                    <div className="item-3">
                        <img src="src/assets/healthy-food.svg" alt="meditation" />
                        <p>Nutrition tips</p>
                    </div>
                    <div className="item-4">
                        <img src="src/assets/exercise-2.webp" alt="" />  
                    </div>
                    <div className="item-5">
                        <img src="src/assets/icon-2.svg" alt="" />
                        <p>Whole body workout</p>
                    </div>
                  </div>
                
                  <div className="row row-bottom" 
                      style={{ transform: `translateX(${translateXBottom}px)` }}>
                            <div className="item-2">
                                <img src="src/assets/workout.svg" alt="" />
                                <p>Adaptive fitness</p>
                            </div>
                            <div className="item-1">
                                <img src="src/assets/exercise-4.webp" alt="" />
                            </div>
                            
                            <div className="item-3">
                                <img src="src/assets/sportive.svg" alt="meditation" />
                                <p>Wall pilates</p>
                            </div>
                            <div className="item-4">
                                <img src="src/assets/exercise-5.webp" alt="" />
                            </div>
                            <div className="item-5">
                                <img src="src/assets/neuro-yoga.svg" alt="" />
                                <p>Chair yoga</p>
                            </div>
                            <div className="item-1">
                                <img src="src/assets/exercise-4.webp" alt="" />
                            </div>
                            <div className="item-2">
                                <img src="src/assets/workout.svg" alt="" />
                                <p>Adaptive fitness</p>
                            </div>
                            <div className="item-3">
                                <img src="src/assets/sportive.svg" alt="meditation" />
                                <p>Wall pilates</p>
                            </div>
                            <div className="item-4">
                              <img src="src/assets/exercise-5.webp" alt="" />
                            </div>
                            <div className="item-5">
                                <img src="src/assets/neuro-yoga.svg" alt="" />
                                <p>Chair yoga</p>
                            </div>
                    </div> 
                </div>
        
    </div>

    {/* fit-programs */}
    <div className="fit-programs">
      <div className="program-content">
        <h1 className='title'>Our most popular fitness programs</h1>

        <div className="grids">
          <div className="grid-col grid-col-1">
            <div className="grid-info">
              <h3 className='title-grid'>Energy Boost Express</h3>
              <p className='desc'>Reclaim your energy with quick, powerful workouts that leave you feeling refreshed and revitalized. Perfect for busy days when you need a fast pick-me-up.</p>
            </div>
          </div>

          <div className="grid-col grid-col-2">
            <div className="grid-info">
              <h3 className='title-grid'>Lazy Workouts</h3>
              <p className='desc'>Too tired to move? These simple workouts will keep you fit and energized without pushing too hard.</p>
            </div>
          </div>

          <div className="grid-col grid-col-3">
            <div className="grid-info">
              <h3 className='title-grid'>Goal-Focused Training</h3>
              <p className='desc'>Target your goals with tailored routines for toning, building strength, and increasing flexibility, perfect for any fitness level.</p>
            </div>
          </div>

          <div className="grid-col grid-col-4">
            <div className="grid-info">
              <h3 className='title-grid'>Fat-Burning HIIT</h3>
              <p className='desc'>Torch calories and boost your metabolism in minutes with personalized high-intensity interval training.</p>
            </div>
          </div>
        </div>

        <div className="workouts">
          <div className="workouts-info">
            <h2 className='title-workout'>Work out anywhere!</h2>
            <p>Download HeyFit now and start transforming your body with expert guidance!</p>
          </div>
          <div className="arrows">
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
          
          <div className="links">
            <img className='qr-img' src="src/assets/qr-code.png" alt="" />
            <div className="download">
              <img className='app-store' src="src/assets/app-store.png" alt="" />
              <img className='google-play' src="src/assets/google-play.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* transformation  */}
    <div className="transformation-bo">
      <div className="transformation-content">
        <div className="transformation-info">
          <h1 className='title-tr'>Start Your <span>Transformation</span> Today</h1>
          <p className='desc-tr'>Sweat, push limits, and achieve your goals. Join thousands who’ve reshaped their lives with HeyFit’s expert programs. Download the app now and take the first step toward a stronger, healthier you!</p>
          <div className="links-bo">
            <img className='qr-bo' src="src/assets/qr-code.png" alt="" />
            <div className="download-bo">
              <img className='app-store' src="src/assets/app-store.png" alt="" />
              <img className='google-play' src="src/assets/google-play.png" alt="" />
            </div>
          </div>
        </div>
        <div className="transformation-img">
          <img src="src/assets/image-88.webp" alt="" />
        </div>
      </div>
    </div>

    </>
  )
}

export default HeyFit