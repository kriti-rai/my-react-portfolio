import React from 'react';

const AboutSwoleNews = () => {
  return (
    <div className="about-paragraph">
      <div className="about-header">SwoleNews</div>
        <p>Keywords: Ruby, CLI, Gem, OOP, Nokogiri.</p>
          <p>
            A CLI application built using Ruby, SwoleNews brings you the latest articles in bodybuilding. I used Nokogiri gem to scrape
            the list of articles from <a target='blank' style={{textDecoration:'underline', color:'white'}} href='https://bodybuilding.com'>BodyBuilding.com</a>.
            It is a published gem that can be found on <a target='blank' style={{textDecoration:'underline', color:'white'}} href='https://rubygems.org/gems/swole-news/versions/0.1.0'>RubyGems.org</a>.
          </p>
          <div className="divider"></div>
    </div>
  )
}

export default AboutSwoleNews;
