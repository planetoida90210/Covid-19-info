import React from "react";

const Header = ({ headerContent }) => {
  return (
    <div className='header-container'>
      <div className='header-information'>
        <p className='header-subtitle'>covid 19</p>
        <h2 className='header-title'>{headerContent.title}</h2>
        <span className='header-stripe'></span>
        <p className='header-description'>{headerContent.description}</p>
      </div>
      <div className='header-hero-image'>
        <img src={headerContent.icon} alt='icon' />
      </div>
    </div>
  );
};

export default Header;
