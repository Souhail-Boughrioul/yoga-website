import { Link, NavLink } from "react-router-dom";

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
                <li><a href="#" className="link">HeyFit</a></li>
                <li className="dropdown">
                   <a href="#" className="dropdown-toggle link">FreeTools</a>
                    <ul className="dropdown-menu">
                        <li><a href="#" >ADHD Test</a></li>
                        <li><a href="#" >Anxiety Test</a></li>
                    </ul>
                </li>
                <li><a href="#" className="link">Health Magazine</a></li>
            </ul>

            <ul className="sidebar" id="sidebar">
                <li><i onClick={toggleNav} className="btn-close fa-solid fa-xmark"></i></li>
                <li><a href="#">HeyZen</a></li>
                <li><a href="#">HeyFit</a></li>
                <li className="dropdown">
                   <a href="#" className="dropdown-toggle">FreeTools</a>
                    <ul className="dropdown-menu">
                        <li><a href="#" >ADHD Test</a></li>
                        <li><a href="#" >Anxiety Test</a></li>
                    </ul>
                </li>
                <li><a href="#" className="link">Health Magazine</a></li>
            </ul>
        </nav> 
    </div>
  )
}

export default NavBar