import React from 'react';
import Trailista from './projects/trailista/Trailista';
import OutfitsOnTheGo from './projects/outfits-on-the-go/OutfitsOnTheGo';
import SwoleNews from './projects/swole-news/SwoleNews';
import WanderList from './projects/wanderlist/WanderList';

const Projects = ()=> {
  return (
    <div className='projects-list'>
      <Trailista />
      <OutfitsOnTheGo />
      <SwoleNews />
      <WanderList />
    </div>
  )
}

export default Projects;
