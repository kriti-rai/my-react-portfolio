import React from 'react';

const SwoleNews = () => {
  return (
    <div className='project-card'>
      <img className='project-card-image' src={''} />
      <div className='project-card-title'>SwoleNews</div>
      <div className='project-card-description'>A CLI-app to get articles on the latest workout trends from BodyBuilding.com.</div>
      <img className='project-card-img' src={require("./images/results.png")} alt-text='Swole News Greet image'></img>
    </div>
  )
}

export default SwoleNews;
