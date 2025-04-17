import About from "../components/About"
import Experts from "../components/Experts"
import Hero from "../components/Hero"
import Journey from "../components/Journey"
import Magazine from "../components/magazine/Magazine"
import Products from "../components/Products"
import Questions from "../components/q&a/Questions"
import Testimonials from "../components/testimonials/Testimonials"
import Tool from "../components/Tool"

const HomePage = () => {
  return (
    <div>
        <Hero/>
      <Products/>
      <About/>
      <Journey/>
      <Experts/>
      <Tool/>
      <Testimonials/>
      <Magazine/>
      <Questions/>
    </div>
  )
}

export default HomePage