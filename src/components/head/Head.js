import { NavLink } from "react-router-dom";

function Head() {
  
  return (
    <div className="navbar-container">
      <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" to="">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="login">
              Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="Kart">
              Kart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="catalog">
              Catalog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contact">
              Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">
              About
              </NavLink>
            </li>
    
      </ul>
    </div>
  );
}

export default Head;
