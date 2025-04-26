import { Link } from "react-router-dom";

const NavBar = () => {

    function toggleNav() {
        const navbar = document.getElementById("sidebar");
        navbar.classList.toggle("active");
      }

  return (
    <div className="navbar">
       <nav className="container nav-content">
            <Link className="logo" to="/" >HeyWellness</Link>
            <button className="hamburger" onClick={toggleNav}><i className="fa-solid fa-bars"></i></button>
            <ul className="nav-list" >
                <li><Link to="/hello" className="link">HeyZen</Link></li>
                <li><Link to='/heyfit' className="link">HeyFit</Link></li>
                <li><Link to='/health' className="link">Health Magazine</Link></li>
            </ul>

            <ul className="sidebar" id="sidebar">
                <li><i onClick={toggleNav} className="btn-close fa-solid fa-xmark"></i></li>
                <li><Link onClick={toggleNav} to='/hello' className="link">HeyZen</Link></li>
                <li><Link onClick={toggleNav} to='/heyfit' className="link">HeyFit</Link></li>
                <li><Link onClick={toggleNav}  to='/health' className="link">Health Magazine</Link></li>
            </ul>
        </nav> 
    </div>
  )
}

export default NavBar