import React from 'react';

const ShopEqual = () => {
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
      <img className='project-card-img' src={require("./images/shop-equal-homepage.png")} alt-text='Shop Equal Homepage'></img>
    </div>
  )
}

export default ShopEqual;
