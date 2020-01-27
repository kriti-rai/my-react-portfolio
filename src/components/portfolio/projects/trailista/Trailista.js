import React from 'react';

const Trailista = () => {
  return (
    <div className='project-card'>
    <img className='project-card-image' src={''} />
      <div className='project-card-title'>Trailista</div>
      <div className='project-card-description'>A react-based app for avid hikers</div>
      <img className='project-card-img' src={require("./images/cover.jpg")} alt-text="Trailista cover image"></img>
    </div>
  )
}

export default Trailista;
