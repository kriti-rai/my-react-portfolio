import React from 'react';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import AboutTrailista from './projects/trailista/AboutTrailista';
import AboutOutfitsOnTheGo from './projects/outfits-on-the-go/AboutOutfitsOnTheGo';
import AboutSwoleNews from './projects/swole-news/AboutSwoleNews';
import AboutWanderList from './projects/wanderlist/AboutWanderList';
import HeaderName from '.././HeaderName';
import ScrollToTop from '.././ScrollToTop';

const Portfolio = () => {
  return (
    <div>
      <div className='portfolio'>
        <div className='portfolio-right-col'>
          <div className='about-container'>
            <AboutTrailista />
            <AboutOutfitsOnTheGo/>
            <AboutSwoleNews />
            <AboutWanderList />
          </div>
          <div className="portfolio-footer-fwd-container">
            <div className="portfolio-footer-fwd">
              <Link to='/life'>Life&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div id='portfolio-header-name' className='header-name-red'><HeaderName /></div>
        <div className='portfolio-left-col'>
          <div className='portfolio-header'>Portfolio.</div>
            <Projects />
            <div id="portfolio-footer-container">
              <ScrollToTop />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
