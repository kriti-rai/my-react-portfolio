import React from 'react';

const AboutShopEqual = () => {
  return (
    <div className="about-paragraph">
      <div className="about-header">ShopEqual</div>
        <p> Keywords: Ruby on Rails, React, Swagger, React Hooks </p>
          <p>
            In June 2020, I teamed up with four other developers (Michael Diaz, Valentine Maillard, Kah Yap and Rashan Smith)
            to build a fully functioning web application for <a href='https://www.meetup.com/nyc-coders/events/271029282/#:~:text=NYC%20Coders%20is%20hacking%20in,and%20raise%20awareness%20for%20inequality' target='blank' style={{textDecoration:'underline', color:'white'}}>Hack for Black Lives Matter</a> hackathon organized by NYC coders.
            Our app is called Shop Equal, a centralized and open-source interface, that intends to empower the Black community by directing users to Black-owned businesses.
            Most of my contributions were on the front-end side which is bootstrapped using `create-react-app`.
            I am also helping the team with web-scraping to collect as much data as possible on black-owned businesses.
          </p>
          <div className="divider"></div>
    </div>
  )
}

export default AboutShopEqual;
