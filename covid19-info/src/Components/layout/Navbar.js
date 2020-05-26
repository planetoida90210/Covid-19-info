import React from "react";
import { NavLink } from "react-router-dom";

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
      text: "sport",
      path: "/activities",
      logo: "fas fa-heartbeat",
    },
  ];
  return (
    <div>
      <nav className='navbar-container'>
        <ul className='navbar-links'>
          {navLinks.map((navLink) => (
            <NavLink
              exact
              className='navbar-route'
              activeClassName='navbar-route-clicked'
              to={navLink.path}
              key={navLink.text}
            >
              <li className='navbar-section-container'>
                <i className={navLink.logo} />
                <p className='navbar-section-name'>{navLink.text}</p>
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
