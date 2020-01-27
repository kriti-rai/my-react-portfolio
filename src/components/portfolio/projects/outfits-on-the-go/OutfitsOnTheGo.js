import React from 'react';

const OutfitsOnTheGo = () => {
  return (
    <div className='project-card'>
      <img className='project-card-image' src={''} />
      <div className='project-card-title'>Outfits On The Go</div>
      <div className='project-card-description'>A Rails app that works like an outfit planner.</div>
      <img className='project-card-img' src={require("./images/homepage.png")} alt-text='Outfits On The Go Cover image'></img>
    </div>
  )
}

export default OutfitsOnTheGo;
