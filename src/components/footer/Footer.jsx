import { CiLocationOn } from "react-icons/ci"
import './Footer.css'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="container footer-content">
            <div className="footer-head">
                <div className="col-1">
                    <img src="src/assets/heywellness-logo.svg" alt="" />
                    <div className="location">
                        <CiLocationOn />
                        <p className="address">86-90 Paul Street, London, EC2A 4NE, United Kingdom</p>
                    </div>
                    <a className="link" href="#">support@heywellness.com</a>
                    <p className="desc">Our website content, services, and products are not intended to serve as medical advice and are intended for informational and educational purposes only.</p>
                </div>

                <div className="col-2">
                    <h2>Products</h2>
                    <ul>
                        <li><a href="#">HeyZen</a></li>
                        <li><a href="#">HeyFit</a></li>
                    </ul>
                </div>

                <div className="col-3">
                    <h2>Free Tools</h2>
                    <ul>
                        <li><a href="#">Anxiety Test for Adults</a></li>
                        <li><a href="#">ADHD Test for Adults</a></li>
                        <li><a href="#">Childhood Trauma Test</a></li>
                        <li><a href="#">Emotional Trauma Test</a></li>
                    </ul>
                </div>

                <div className="col-4">
                    <h2>Health Magazine</h2>
                    <ul>
                        <li><a href="#">Mental</a></li>
                        <li><a href="#">Physical</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-body">
                <div className="card">
                    <div className="qr-container">
                        <img src="src/assets/qr-code.png" alt="" />
                    </div>
                    <div className="card-info">
                        <img src="src/assets/heyzen-footer.svg" alt="" />
                        <p className="desc">Press pause, tune into calm, and turn down the stress with HeyZen</p>
                    </div>
                </div>

                <div className="card">
                    <div className="qr-container">
                        <img src="src/assets/qr-code.png" alt="" />
                    </div>
                    <div className="card-info">
                        <img src="src/assets/heyfit-footer.svg" alt="" />
                        <p className="desc">The only fitness app you’ll need to stay fit & healthy.</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="social-links">
                    <a href="#"><FaFacebookSquare /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
                <p className="right">HEYWELLNESS©2025 | All rights reserved</p>
                <ul>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer