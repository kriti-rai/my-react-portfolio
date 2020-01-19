import React from 'react';
import { Link } from 'react-router-dom';
import { reveal as Menu } from 'react-burger-menu';

const BurgerMenu = () => {
  return (
    <div className='burger-menu'>
      <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <Link to ='/'><span className="menu-item">Home</span></Link>
          <Link to ='/bio'><span className="menu-item">Bio</span></Link>
          <a target='_blank' href='https://kriti-rai.github.io/' className="menu-item">Blog</a>
          <Link to ='/portfolio'><span className="menu-item">Portfolio</span></Link>
          <a target='_blank' href='https://github.com/kriti-rai/' className="menu-item">GitHub</a>
          <a target='_blank' href='https://www.linkedin.com/in/kriti-rai/' className="menu-item">Linkedin</a>
          <Link to ='/contact'><span className="menu-item">Contact</span></Link>
      </Menu>
    </div>
  )
};

export default BurgerMenu;
