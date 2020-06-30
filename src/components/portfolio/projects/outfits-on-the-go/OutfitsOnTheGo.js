import React from 'react';
import SlideShow from '../../SlideShow.js'

const OutfitsOnTheGo = () => {
  const fadeImages = [
    "./projects/outfits-on-the-go/images/homepage.png",
    "./projects/outfits-on-the-go/images/feed.png",
    "./projects/outfits-on-the-go/images/login.png",
    "./projects/outfits-on-the-go/images/board.png",
    "./projects/outfits-on-the-go/images/user.png",
    "./projects/outfits-on-the-go/images/my-boards.png",
    "./projects/outfits-on-the-go/images/users.png"
  ]

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
          <a target='_blank' href='https://github.com/kriti-rai/outfits-on-the-go' className="project-repo">GitHub</a> | <a target='_blank' href='https://www.youtube.com/watch?v=oGe6OHePVyc' className="project-demo">Demo</a>
        </div>
      </div>
      <SlideShow fadeImages = { fadeImages } />
    </div>
  )
}

export default OutfitsOnTheGo;
