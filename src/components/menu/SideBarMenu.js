import React from 'react';
import { Link } from 'react-router-dom';

const SideBarMenu = () => {
  return (
    <div className='sidebar-menu'>
      <p><Link to ='/'><span className="sidebar-menu-item">Home</span></Link></p>
      <p><Link to ='/bio'><span className="sidebar-menu-item">Bio</span></Link></p>
      <p><a target='_blank' href='https://kriti-rai.github.io/' className="sidebar-menu-item">Blog</a></p>
      <p><Link to ='/portfolio'><span className="sidebar-menu-item">Portfolio</span></Link></p>
      <p><a target='_blank' href='https://github.com/kriti-rai/' className="sidebar-menu-item">GitHub</a></p>
      <p><a target='_blank' href='https://www.linkedin.com/in/kriti-rai/' className="sidebar-menu-item">Linkedin</a></p>
      <p><Link to ='/contact'><span className="sidebar-menu-item">Contact</span></Link></p>
    </div>
  )
};

export default SideBarMenu;
