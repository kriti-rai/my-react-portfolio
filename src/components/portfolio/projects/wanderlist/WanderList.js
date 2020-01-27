import React from 'react';

const WanderList = () => {
  return (
    <div className='project-card'>
    <img className='project-card-image' src={''} />
      <div className='project-card-title'>WanderList</div>
      <div className='project-card-description'>A Sinatra app to list the best places in the world to visit.</div>
      <img className='project-card-img' src={require("./images/home.png")} alt-text='Wander List Cover image'></img>
    </div>
  )
}

export default WanderList;
