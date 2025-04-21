import { useEffect, useState } from 'react';
import './Hellopage.css'
import { motion } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';
import { sliderItems, STEPS } from '../../constants';
import Slider from '../../components/slider/Slider';
import { FaCheckCircle } from 'react-icons/fa';
import { Outlet, useNavigate } from 'react-router-dom';

const CardStep = ({step,title,desc,show})=>{
    return(
        <>
            <motion.div 
             className={`card-step step-${step} `}
             initial={{ opacity: 0, x: '-100%'  }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, 
                         amount: 0  }}
             transition={{ duration: 1, delay: 0.2 * step }} >
                <h1 className='step-title'>{step}</h1>
                <div className="card-info">
                    <h2 className='title'>{title}</h2>
                    <p className='desc'>{desc}</p>
                    {show && <button className='btn'>Take a quiz</button>}
                </div>
            </motion.div>
        </>
    )
}

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
                            <div className="item-2">
                                <img src="src/assets/anxiety.svg" alt="" />
                                <p>Anxiety  Attack Prevention</p>
                            </div>
                            <div className="item-1">
                                <img src="src/assets/exercise-1.webp" alt="" />
                            </div>
                            
                            <div className="item-3">
                                <img src="src/assets/anxiety.svg" alt="meditation" />
                                <p>Holistic Treatment for Trauma</p>
                            </div>
                            <div className="item-4">
                                <video  src="src/assets/exercise_1.mp4" loop muted autoPlay></video> 
                            </div>
                            <div className="item-5">
                                <img src="src/assets/neuro-yoga.svg" alt="" />
                                <p>Neuro-Yoga</p>
                            </div>
                            <div className="item-1">
                                <img src="src/assets/exercise-1.webp" alt="" />
                            </div>
                            <div className="item-2">
                                <img src="src/assets/anxiety.svg" alt="" />
                                <p>Anxiety  Attack Prevention</p>
                            </div>
                            <div className="item-3">
                                <img src="src/assets/anxiety.svg" alt="meditation" />
                                <p>Holistic Treatment for Trauma</p>
                            </div>
                            <div className="item-4">
                                <video  src="src/assets/exercise_1.mp4" loop muted autoPlay></video>
                            </div>
                            <div className="item-5">
                                <img src="src/assets/neuro-yoga.svg" alt="" />
                                <p>Neuro-Yoga</p>
                            </div>
                    </div> 
                </div>
        
        </div>

        {/* ********* programs */}
        <motion.div className="programs"
            initial={{ opacity: 0, y: 100 }}   
            whileInView={{ opacity: 1, y: 0 }}   
            viewport={{ once: true, amount: 0  }}         
            transition={{ duration: 1 }}>
            <h1 className='program-title'>Unique programs made for you</h1>
            <div className="programs-content container">
                
                <div className="prog-info">
                    <h2>Unique programs made for you</h2>
                    <div className="card-prog card-1">
                        <h3>Yoga</h3>
                        <div className="card-info">
                            <p>Explore the neuro-yoga approach for mind and body alignment.</p>
                            <button className='btn'><MdArrowOutward /></button>
                        </div>
                    </div>
                </div>

                <div className="card-prog card-2">
                        <h3>ADHD Relief</h3>
                        <div className="card-info">
                            <p>Become more centered with specific exercises and mindfulness practices.</p>
                            <button className='btn'><MdArrowOutward /></button>
                        </div>
                </div>

                <div className="card-prog card-3">
                        <h3>Anxiety Break</h3>
                        <div className="card-info">
                            <p>Manage your anxiety with proven strategies based on Cognitive Behavioral Therapy (CBT).</p>
                            <button className='btn'><MdArrowOutward /></button>
                        </div>
                </div>

                <div className="card-prog card-4">
                        <h3>Meditation</h3>
                        <div className="card-info">
                            <p>Stress less, sleep better and get happier day by day.</p>
                            <button className='btn'><MdArrowOutward /></button>
                        </div>
                </div>

                <div className="card-prog card-5">
                        <h3>Trauma Recovery</h3>
                        <div className="card-info">
                            <p>Release trauma storead in the body with clinically proven treatments.</p>
                            <button className='btn'><MdArrowOutward /></button>
                        </div>
                </div>

                <div className="card-prog card-6">
                        <h3>Podcasts</h3>
                        <div className="card-info">
                            <p>Learn practical mental health tips to take control of yourself.</p>
                            <button className='btn'><MdArrowOutward /></button>
                        </div>
                </div>
                
            </div>
        </motion.div>

        {/*********steps */ }
        <div className="steps">
            <div className="steps-container">
                {STEPS.map((step,index)=> (
                    <CardStep key={index} step={step.id} title={step.title} desc={step.desc} show={step.show}/>
                ))}
                
            </div>
        </div>

        {/* ***** coachs */}
        <div className="coachs">
            <div className="coachs-content">
                <h1 className='header'>Created by Fitness and Wellness Experts</h1>
                <Slider items={sliderItems.slice(0,4)}/>
            </div>
            
        </div>

        {/* *** well experts */}
        <motion.div className="well-experts" 
                initial={{ opacity: 0, y: 100 }}   
                whileInView={{ opacity: 1, y: 0 }}   
                viewport={{ once: true, amount: 0  }}   
                transition={{ duration: 1 }}>
            <div className="well-content">
                <div className="well-info">
                    <h1 className='title'>Created with wellness experts</h1>
                    <div className="type">
                        <div className="icon">
                           <FaCheckCircle/> 
                        </div>
                      <p className='desc'><span>Scientifically Backed:</span> Developed by experts with the latest research.</p>
                    </div>
                    <div className="type">
                        <div className="icon">
                           <FaCheckCircle/> 
                        </div>
                      
                      <p className='desc'><span>Holistic Approach:</span> Integrating mental, physical, and emotional wellness across all aspects of your journey.</p>
                    </div>
                    <div className="type">
                        <div className="icon">
                           <FaCheckCircle/> 
                        </div>
                      <p className='desc'><span>Сustomized Programs:</span> Tailored to meet your specific needs and preferences.</p>
                    </div>

                    <button className='btn'>Take mental health test</button>
                </div>
            </div>
        </motion.div>

        {/* ***** research */}
        <motion.div 
            initial={{ opacity: 0, y: 100 }}   
            whileInView={{ opacity: 1, y: 0 }}   
            viewport={{ once: true, amount: 0  }}         
            transition={{ duration: 1 }} className="research">
            <div className="research-content">
                <div className="extensive">
                    <div className="research-info">
                        <h1 className='research-title'>Extensive research</h1>
                        <p className='research-desc'>We’ve invested 1008 hours into research to ensure our content is grounded in the latest scientific findings.</p>
                    </div>
                    <div className="research-bottom">
                        <h1>89%</h1>
                        <p>of our users reported less stress in just 1 week</p>
                    </div>
                    <button className='btn'><MdArrowOutward /></button>
                </div>

                <div className='expert'>
                    <div className="info">
                        <h1>Expert contributions</h1>
                        <p>Benefit from insights by 7 guest experts who are leaders in the fields of mental health and wellness.</p>
                    </div>
                    <button className='btn'>Learn more</button>
                </div>

                <div className='familiar'>
                    <h1>Familiar voices</h1>
                    <p>Enjoy content narrated by 4 voice actors you’ll recognize, bringing a comforting touch to your experience.</p>
                    <button className='btn'><MdArrowOutward /></button>
                </div>
            </div>
        </motion.div>

        <div className="well-journey">
            <div className="journey-cont">
                <div className="journey-info">
                    <h1 className='title-journey'>Start Your <span>Wellness Journey</span> Today</h1>
                    <p className='journey-desc'>Join others who’ve transformed their lives with our expert-guided programs, reducing stress and finding balance.</p>
                    <div className="qr-container">
                        <img className='qr-jr' src="src/assets/qr-code.png" alt="" />
                        <div className="links">
                            <img className='ios-jr' src="src/assets/heyzen-ios-short.webp" alt="" />
                            <img className='and-jr' src="src/assets/heyzen-android-short.webp" alt="" />
                        </div>
                    </div>
                </div>

                <div className="journey-img">
                    <img className='phone-jr' src="src/assets/heywellness-app-mockup.webp" alt="" />
                </div>
            </div>
        </div>

        <Outlet/>

    </>
  )
}

export default HelloPage