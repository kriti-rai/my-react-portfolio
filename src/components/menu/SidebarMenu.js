import React from 'react';
import { Link } from 'react-router-dom';


const SidebarMenu = () => {
  return (
    <div className='sidebar-menu'>
      <span><Link to ='/bio'><span className="sidebar-menu-item"><i className="fas fa-id-card"></i><span className='menu-label'>bio</span></span></Link></span><br />
      <span><Link to ='/portfolio'><span className="sidebar-menu-item"><i className="fas fa-briefcase"></i><span className='menu-label'>portfolio</span></span></Link></span><br />
      <span><a target='_blank' href='https://kriti-rai.github.io/' className="sidebar-menu-item"><i className="fas fa-pen-fancy"></i><span className='menu-label'>blog</span></a></span><br />
      <span><a target='_blank' href='https://github.com/kriti-rai/' className="sidebar-menu-item"><i className="fab fa-github"></i><span className='menu-label'>github</span></a></span><br />
      <span><a target='_blank' href='https://www.linkedin.com/in/kriti-rai/' className="sidebar-menu-item"><i className="fab fa-linkedin-in"></i><span className='menu-label'>linkedin</span></a></span><br />
      <span><a href="mailto:kriti.rai@gmail.com"><span className="sidebar-menu-item"><i className="fas fa-envelope"></i><span className='menu-label'>contact</span></span></a></span><br />
      <span><Link to ='/life'><span className="sidebar-menu-item"><i className="fas fa-clock"></i><span className='menu-label'>life</span></span></Link></span>
    </div>
  )
};

export default SidebarMenu;
