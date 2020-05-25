import React from "react";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    // universal links for routing
    {
      text: "info",
      path: "/",
      logo: "fas fa-home",
    },
    {
      text: "mapa",
      path: "/map",
      logo: "fas fa-globe",
    },
    {
      text: "aktywność",
      path: "/activities",
      logo: "fas fa-heartbeat",
    },
  ];
  return (
    <div>
      <nav className='navbar-container'>
        <ul className='navbar-links'>
          {navLinks.map((navLink) => (
            <Link
              exact
              className='navbar-route'
              activeClassName='clicked-route'
              to={navLink.path}
              key={navLink.text}
            >
              <li className='clicked-route-text'>
                <i className={navLink.logo} />
                {navLink.text}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
