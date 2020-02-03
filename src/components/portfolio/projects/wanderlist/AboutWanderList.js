import React from 'react';

const AboutWanderList = () => {
  return (
    <div className="about-paragraph">
      <div className="about-header">WanderList</div>
          <p>Keywords: Ruby, Sinatra, Nokogiri.</p>
          <p>
            I built this app using Sinatra, a DSL written in Ruby.
            The app also uses Nokogiri, a Ruby gem used for web-scraping, to pull the list of best places in the world to visit
            from <a target='blank' style={{color:'white'}} href='http://www.bbc.com/travel/destinations'>BBC</a>.
            One is able to sign up or log into their existing account where they will be able to create boards and pin trips they are interested in.
            Users will be able to view other users' boards but will be able to modify and update only the ones they have created and own.
          </p>
          <div className="divider"></div>
    </div>
  )
}

export default AboutWanderList;
