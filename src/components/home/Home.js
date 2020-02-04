import React from 'react';
import { Link } from 'react-router-dom';
import SidebarMenu from '../menu/SidebarMenu';
import HeaderName from '.././HeaderName';


const Home = () => {
  return (
    <div className='home'>
      <div className='header-name-red'><HeaderName /></div>
      <div className='home-content'>
        <div className='profile-pic'><img src={require('./images/profile-pic.jpg')} alt-text="Profile picture"></img></div>
        <div className='home-left-col'>
          <div className='header'>
          Hello.
          </div>
          <div className='blurb'>
            My name is Kriti Rai. I am a Full Stack Web Developer based in San Francisco Bay Area.
            I code in JavaScript but Ruby is my first love. A quick learner and an excessive coffee-drinker.
          </div>
          <div className="divider-red"></div>
        </div>
        <div className='home-right-col'>
          <SidebarMenu />
        </div>
      </div>
    </div>
  )
};

export default Home;
