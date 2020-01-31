import React from 'react';
import Projects from './Projects';
import AboutTrailista from './projects/trailista/AboutTrailista';
import AboutOutfitsOnTheGo from './projects/outfits-on-the-go/AboutOutfitsOnTheGo';
import AboutSwoleNews from './projects/swole-news/AboutSwoleNews';
import AboutWanderList from './projects/wanderlist/AboutWanderList';
import HeaderName from '.././HeaderName';

const Portfolio = () => {
  return (
    <div>
      <div className='portfolio'>
        <div className='portfolio-right-col'>
          <AboutTrailista />
          <AboutOutfitsOnTheGo/>
          <AboutSwoleNews />
          <AboutWanderList />
        </div>
        <div className='portfolio-left-col'>
          <div className='header-name-dark'><HeaderName /></div>
          <div className='portfolio-header'>Projects.</div>
            <Projects />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
