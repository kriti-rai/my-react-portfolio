import React from 'react';
import Trailista from './projects/trailista/Trailista';
import OutfitsOnTheGo from './projects/outfits-on-the-go/OutfitsOnTheGo';
import SwoleNews from './projects/swole-news/SwoleNews';
import WanderList from './projects/wanderlist/WanderList';
import ShopEqual from './projects/shop-equal/ShopEqual';

const Projects = ()=> {
  return (
    <div className='projects-list'>
      <Trailista />
      <ShopEqual />
      <OutfitsOnTheGo />
      <SwoleNews />
      <WanderList />
    </div>
  )
}

export default Projects;
