import React from 'react';
import SlideShow from '../../SlideShow.js'

const ShopEqual = () => {
  const fadeImages = [
    "./projects/shop-equal/images/homepage.png", "./projects/shop-equal/images/objective.png", "./projects/shop-equal/images/explore-page.png", "./projects/shop-equal/images/developers-page.png", "./projects/shop-equal/images/add-a-business-page.png"
  ]

  return (
    <div className='project-card'>
      <div className='overlay'></div>
      <div className='project-links-hover'>
        <p><a target='_blank' href='https://github.com/shopequal/' className="project-repo">GitHub</a></p>
        <p><a target='_blank' href='https://shop-equal.netlify.app/' className="project-demo">Demo</a></p>
      </div>
      <div className='phone-project-content'>
        <div className='phone-project-title'>ShopEqual</div>
        <div className='project-links'>
          <a target='_blank' href='https://github.com/shopequal/' className="project-repo">GitHub</a> | <a target='_blank' href='https://shop-equal.netlify.app/' className="project-demo">Demo</a>
        </div>
      </div>
      <SlideShow fadeImages = { fadeImages } />
    </div>
  )
}

export default ShopEqual;
