import React from 'react';
import { Link } from 'react-router-dom';


const SidebarMenu = () => {
  return (
    <div className='sidebar-menu'>
      <span><Link to ='/bio'><span className="home-icons"><i className="fas fa-id-card"></i></span></Link></span>
      <span><Link to ='/portfolio'><span className="home-icons"><i class="fas fa-briefcase"></i></span></Link></span>
      <span><a target='_blank' href='https://kriti-rai.github.io/' className="home-icons"><i class="fas fa-pen-fancy"></i></a></span>
      <span><a target='_blank' href='https://github.com/kriti-rai/' className="home-icons"><i className="fab fa-github"></i></a></span>
      <span><a target='_blank' href='https://www.linkedin.com/in/kriti-rai/' className="home-icons"><i className="fab fa-linkedin-in"></i></a></span>
      <span><a href="mailto:kriti.rai@gmail.com"><span className="home-icons"><i class="fas fa-envelope"></i></span></a></span>
      <span><Link to ='/life'><span className="home-icons"><i class="fas fa-clock"></i></span></Link></span>
    </div>
  )
};

export default SidebarMenu;
