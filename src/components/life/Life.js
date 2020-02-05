import React from 'react';
import HeaderName from '.././HeaderName';
import ScrollToTop from '../ScrollToTop';

const Life = () => {
  return (
    <div className='life-container'>
      <div className='header-name-red'><HeaderName /></div>
        <div class="life-img-container">
          <img class="life-img" src={require('./images/1.jpg')}></img>
          <img class="life-img" src={require('./images/2.jpg')}></img>
          <img class="life-img" src={require('./images/3.jpg')}></img>
          <img class="life-img" src={require('./images/4.jpg')}></img>
          <img class="life-img" src={require('./images/5c.jpg')}></img>
          <img class="life-img" src={require('./images/6.jpg')}></img>
          <img class="life-img" src={require('./images/7.jpg')}></img>
          <img class="life-img" src={require('./images/11.jpg')}></img>
          <img class="life-img" src={require('./images/9.jpg')}></img>
          <img class="life-img" src={require('./images/10.jpg')}></img>
          <img class="life-img" src={require('./images/12.jpg')}></img>
        </div>
        <div className='scroll-to-top-red'><ScrollToTop /></div>
      </div>

  )
};

export default Life;
