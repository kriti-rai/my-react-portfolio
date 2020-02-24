import React from 'react';

const SwoleNews = () => {
  return (
    <div className='project-card'>
      <div className='overlay'></div>
      <div className='project-links-hover'>
        <p><a target='_blank' href='https://github.com/kriti-rai/swole-news' className="project-repo">GitHub</a></p>
        <p><a target='_blank' href='https://www.youtube.com/watch?v=BlPmqdfd7JQ' className="project-demo">Demo</a></p>
      </div>
      <div className='phone-project-content'>
        <div className='phone-project-title'>Swole News</div>
        <div className='project-links'>
          <a target='_blank' href='https://github.com/kriti-rai/swole-news' className="project-repo">GitHub</a> | <a target='_blank' href='https://www.youtube.com/watch?v=BlPmqdfd7JQ' className="project-demo">Demo</a>
        </div>
      </div>
      <img className='project-card-img' src={require("./images/results.png")} alt-text='Swole News Greet image'></img>
    </div>
  )
}

export default SwoleNews;
