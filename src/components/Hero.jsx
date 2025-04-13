
const Hero = () => {
  return (
    <div className="hero">
        <div className="container hero-box">
            <div className="img-container">
                <img src="./src/assets/heywellness-hero.webp" alt="bg" />
            </div>
           
            <ul className="hero-links">
                <li><a href="#">Muscle building</a></li>
                <li><a href="#">Pilates</a></li>
                <li><a href="#">Workouts</a></li>
                <li><a href="#">Personal plans</a></li>
                <li><a href="#">Weight-loss</a></li>
                <li><a href="#">Podcasts</a></li>
            </ul>
            
            <div className="hero-content">
                <h2><span>Welcome</span><br /> to your wellness era</h2>
                <p>Feeling good shouldn’t be complicated. At HeyWellness, we create apps that fit your life, meet your needs, and help you find balance, build strength, and become your best self.</p>
                <button className="hero-btn">Our Products</button>
            </div>

        </div>
    </div>
  )
}

export default Hero