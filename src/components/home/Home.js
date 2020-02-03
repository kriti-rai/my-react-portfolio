import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='home-content'>
      <div className='profile-pic'><img src={require('./images/profile-pic.jpg')} alt-text="Profile picture"></img></div>
        <div className='home-left-col'>
          <div className='header'>
          Hello.
          </div>
          <div className='blurb'>
            My name is Kriti Rai. I am a Full Stack Web Developer based in San Francisco Bay Area.
          </div>
          <div className='home-icons-container'>
            <span><Link to ='/'><span className="home-icons"><i className="fas fa-home"></i></span></Link></span>
            <span><Link to ='/bio'><span className="home-icons"><i className="fas fa-id-card"></i></span></Link></span>
            <span><Link to ='/portfolio'><span className="home-icons"><i class="fas fa-pencil-ruler"></i></span></Link></span>
            <span><a target='_blank' href='https://kriti-rai.github.io/' className="home-icons"><i class="fas fa-blog"></i></a></span>
            <span><a target='_blank' href='https://github.com/kriti-rai/' className="home-icons"><i className="fab fa-github"></i></a></span>
            <span><a target='_blank' href='https://www.linkedin.com/in/kriti-rai/' className="home-icons"><i className="fab fa-linkedin-in"></i></a></span>
            <span><a target='_blank' href='https://open.spotify.com/playlist/7IdmpH7SHXDHFeerFRgrX5' className="home-icons"><i className="fab fa-spotify"></i></a></span>
            <span><a href="mailto:kriti.rai@gmail.com"><span className="home-icons"><i class="fas fa-envelope"></i></span></a></span>
          </div>
          <div className="divider-dark"></div>

        </div>
    </div>
  )
};

export default Home;
