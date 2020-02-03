import React from 'react';

const AboutOutfitsOnTheGo = () => {
  return (
    <div className="about-paragraph">
      <div className="about-header">Outfits On The Go</div>
          <p>Keywords: Ruby, Ruby on Rails, MVC, Omniauth, JavaScript, Facebook.</p>
          <p>
           I built this app using Ruby on Rails. It utilizes the standard Model-View-Controller (MVC) framework and
           makes perfect use of the "convention over configuration" principle of Rails. I integrated omniauth-facebook gem so one could
           login or register using Facebook as well. The app works like a planner for outfits. Upon logging in, the user
           gets to create boards where they can add outfits (with caption and hashtags) they plan to wear for specific occasions.
           They will also be able to view other users' boards as well as look up outfits by hashtags.
          </p>
          <p>There is also a JS version of this app <a href='https://github.com/kriti-rai/outfits-on-the-go-with-js' target='blank' style={{color:'white'}}>here</a>.</p>
          <div className="divider"></div>
    </div>
  )
}

export default AboutOutfitsOnTheGo;
