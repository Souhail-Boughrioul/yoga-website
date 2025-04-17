import { useEffect, useState } from 'react';
import './Hellopage.css'
import { motion } from 'framer-motion';

const HelloPage = () => {
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
    <div className="hello">
        <div className="container strength">
                <div className="strength-content">
                    <motion.h1 
                        className='strength-title'
                        initial={{ opacity: 0, y: 50 }}   
                        animate={{ opacity: 1, y: 0 }}      
                        transition={{ duration: 1 }}>
                            Find your <span>strength</span> in stillness
                    </motion.h1>
                    <motion.p 
                        className='strength-desc'
                        initial={{ opacity: 0, y: 50  }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5}}  
                        >
                        We embody a comprehensive approach to health, combining mental, physical, and emotional wellness into a personalized experience.
                    </motion.p>
                    <motion.div 
                        className="qr-rating"
                        initial={{ opacity: 0, y: 50  }}
                        animate={{ opacity: 1, y: 0  }}
                        transition={{ duration: 1, delay: 0.5}}>
                        <button className='btn-qr'>Get started</button>
                        <img className='qr' src="src/assets/qr-code.png" alt="" />
                        <img className='rating' src="src/assets/heyzen-banner-rating.png" alt="" />
                    </motion.div>
                </div>
                <div className="strength-pictures">
                    <motion.img 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5}} 
                        className='pic-1'  src="src/assets/heyzen-hero-1.webp" alt="Hero 1" />
                    <motion.img 
                        className='pic-2'  
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5}}
                        src="src/assets/heyzen-hero-2.webp" alt="Hero 2" />
                </div>
            </div>

        

        
    </div>

    {/* **** mental section */}
    <div className="mental">
            <h1 className='title'>100+ mental & physical exercise</h1>
            <div className="rows">
                    <div className="row row-top" 
                    style={{ transform: `translateX(${translateXTop}px)` }}
                >
                <div className="item-1">
                    <img src="src/assets/exercise-1.webp" alt="" />
                </div>
                <div className="item-2">Relief for ADHD</div>
                <div className="item-3">
                    <img src="src/assets/meditation.svg" alt="meditation" />
                    <p>Guided Meditation & Vizualization</p>
                </div>
                <div className="item-4">
                    <img src="src/assets/exercise_4.webp" alt="" />  
                </div>
                <div className="item-5">
                    <img src="src/assets/special-exercises.svg" alt="" />
                    <p>Custom Training Plans</p>
                </div>
                <div className="item-1">
                     <img src="src/assets/exercise-1.webp" alt="" />
                </div>
                <div className="item-2">
                    Relief for ADHD
                </div>
                <div className="item-3">
                    <img src="src/assets/meditation.svg" alt="meditation" />
                    <p>Guided Meditation & Vizualization</p>
                </div>
                <div className="item-4">
                    <img src="src/assets/exercise_4.webp" alt="" />  
                </div>
                <div className="item-5">
                    <img src="src/assets/special-exercises.svg" alt="" />
                    <p>Custom Training Plans</p>
                </div>
                    </div>
            
                    <div className="row row-bottom" 
                    style={{ transform: `translateX(${translateXBottom}px)` }}
                >
                <div className="item-1">
                    <img src="src/assets/exercise-1.webp" alt="" />
                </div>
                <div className="item-2">Relief for ADHD</div>
                <div className="item-3">
                    <img src="src/assets/meditation.svg" alt="meditation" />
                    <p>Guided Meditation & Vizualization</p>
                </div>
                <div className="item-4">
                    <img src="src/assets/exercise_4.webp" alt="" />  
                </div>
                <div className="item-5">
                    <img src="src/assets/special-exercises.svg" alt="" />
                    <p>Custom Training Plans</p>
                </div>
                <div className="item-1">
                     <img src="src/assets/exercise-1.webp" alt="" />
                </div>
                <div className="item-2">
                    Relief for ADHD
                </div>
                <div className="item-3">
                    <img src="src/assets/meditation.svg" alt="meditation" />
                    <p>Guided Meditation & Vizualization</p>
                </div>
                <div className="item-4">
                    <img src="src/assets/exercise_4.webp" alt="" />  
                </div>
                <div className="item-5">
                    <img src="src/assets/special-exercises.svg" alt="" />
                    <p>Custom Training Plans</p>
                </div>
                    </div> 
            </div>
       
    </div>
    
    </>
  )
}

export default HelloPage