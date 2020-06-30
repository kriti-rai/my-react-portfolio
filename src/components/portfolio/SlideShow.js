import React from 'react';
import { Fade } from 'react-slideshow-image';


const SlideShow = (props) => {
  const fadeProperties = {
    duration: 2300,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }

  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        { props.fadeImages.map((img, i) => <div className="each-fade"><div className="image-container"><img className='project-card-img'  key = { i } src ={ require(`${img}`) } /></div></div> )}
      </Fade>
    </div>
  )
}

export default SlideShow;
