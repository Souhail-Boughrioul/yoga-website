import { Route, Router, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import HelloPage from "./pages/hello/HelloPage"
import HeyFit from "./pages/hey/HeyFit"
import Health from "./pages/health/Health"



function App() {

  return (
    <div className="app-container">
      <NavBar/>
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/hello' element={<HelloPage/>}/>
          <Route path='/heyfit' element={<HeyFit/>}/>
          <Route path="/health"element={<Health/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
    
  )
}

export default App
