import React from 'react';
import SideBarMenu from '.././menu/SideBarMenu';


const Home = () => {
  return (
    <div className='home-content'>
      <div className='home-left-col'>
        <div className='header'>
        Hello.
        </div>
        <div className='blurb'>
          My name is Kriti Rai. I am a Full Stack Web Developer based in San Francisco Bay Area.
        </div>
      </div>
      <SideBarMenu />
    </div>
  )
};

export default Home;
