import React from 'react';

const Trailista = () => {
  return (
    <div className='project-card'>
      <div className='overlay'></div>
        <img className='project-card-img' src={require("./images/cover.jpg")} alt-text="Trailista cover image"></img>
    </div>
  )
}

export default Trailista;
