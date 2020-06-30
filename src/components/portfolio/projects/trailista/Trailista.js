import React from 'react';
import SlideShow from '../../SlideShow.js'

const Trailista = () => {
  const fadeImages = [
    "./projects/trailista/images/cover.jpg", "./projects/trailista/images/register-on-pc.png", "./projects/trailista/images/results-on-pc.png", "./projects/trailista/images/hike.png"
  ]

  return (
    <div className='project-card'>
      <div className='overlay'></div>
      <div className='project-links-hover'>
        <p className='fade-in'><a target='_blank' href='https://github.com/kriti-rai/trailista' className="project-repo">GitHub</a></p>
        <p className='fade-in'><a target='_blank' href='http://trailista.herokuapp.com/' className="project-demo">Demo</a></p>
      </div>
      <div className='phone-project-content'>
        <div className='phone-project-title'>Trailista</div>
        <div className='project-links'>
          <a target='_blank' href='https://github.com/kriti-rai/trailista' className="project-repo">GitHub</a> | <a target='_blank' href='http://trailista.herokuapp.com/' className="project-demo">Demo</a>
        </div>
      </div>
      <SlideShow fadeImages = { fadeImages } />
    </div>
  )
}

export default Trailista;
