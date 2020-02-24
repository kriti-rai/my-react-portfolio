import React from 'react';

const OutfitsOnTheGo = () => {
  return (
    <div className='project-card'>
      <div className='overlay'></div>
      <div className='project-links-hover'>
        <p><a target='_blank' href='https://github.com/kriti-rai/outfits-on-the-go' className="project-repo">GitHub</a></p>
        <p><a target='_blank' href='https://www.youtube.com/watch?v=oGe6OHePVyc' className="project-demo">Demo</a></p>
      </div>
      <div className='phone-project-content'>
        <div className='phone-project-title'>Outfits On The Go</div>
        <div className='project-links'>
          <p><a target='_blank' href='https://github.com/kriti-rai/outfits-on-the-go' className="project-repo">GitHub</a></p>
          <p><a target='_blank' href='https://www.youtube.com/watch?v=oGe6OHePVyc' className="project-demo">Demo</a></p>
        </div>
      </div>
      <img className='project-card-img' src={require("./images/homepage.png")} alt-text='Outfits On The Go Cover image'></img>
    </div>
  )
}

export default OutfitsOnTheGo;
