import React from 'react'

const Products = () => {
  return (
    <div className='products-section'>
        <div className='container products-content'>
            <div className="products-header">
                <h1>Our Products</h1>
                <p>Our wellness apps offer personalized programs for a variety of health <br /> journeys. Let’s see which one works best for you!</p>
            </div>

            <div className="product">
                <div className="product-description">
                    <img className='heyfit-logo' src="./src/assets/heyfit-logo.png" alt="logo" />
                    <p>Your personal fitness coach, tailored to your goals. HeyFit offers high-efficiency workouts designed to keep you motivated and on track. With expert guidance and simple, effective exercises, it’s never been easier to build strength, stay active, and achieve your fitness goals.</p>
                    <button className='btn-now'>Get Now</button>
                    <div className="ratings">
                        <div className="qr">
                            <img className='qr-logo' src="./src/assets/qr-code.png" alt="" />
                        </div>
                        <img className='rating-logo' src="./src/assets/heyfit-banner-rating.png" alt="" />
                    </div>
                </div>

                <div className="product-img">
                    <img src="./src/assets/heyfit-app.webp" alt="" />
                </div>
            </div>

            <div className="product product-2">
                <div className="product-description">
                    <img className='heyfit-logo' src="./src/assets/heyzen-logo.png" alt="logo" />
                    <p>Your friendly all-in-one mental wellness app. HeyZen is here to help you find calm in daily life with mindful practices and tools for managing ADHD, easing anxiety, and relieving tension. Start your journey with our guided exercises and a supportive community.</p>
                    <button className='mental-btn'>Mental shape quiz</button>
                    <button className='btn-now'>Get Now</button>
                    <div className="ratings">
                        <div className="qr">
                            <img className='qr-logo' src="./src/assets/qr-code.png" alt="" />
                        </div>
                        <img className='rating-logo' src="./src/assets/heyzen-banner-rating.png" alt="" />
                    </div>
                </div>

                <div className="product-img">
                    <img src="./src/assets/heyzen-app.webp" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products