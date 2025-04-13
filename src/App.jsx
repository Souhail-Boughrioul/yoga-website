import About from "./components/About"
import Experts from "./components/Experts"
import Footer from "./components/footer/Footer"
import Hero from "./components/Hero"
import Journey from "./components/Journey"
import Magazine from "./components/magazine/Magazine"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import Questions from "./components/q&a/Questions"
import Testimonials from "./components/testimonials/Testimonials"
import Tool from "./components/Tool"



function App() {

  return (
    <main className="main">
      <NavBar/>
      <Hero/>
      <Products/>
      <About/>
      <Journey/>
      <Experts/>
      <Tool/>
      <Testimonials/>
      <Magazine/>
      <Questions/>
      <Footer/>
    </main>
  )
}

export default App
