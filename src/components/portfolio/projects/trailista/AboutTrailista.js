import React from 'react';

const AboutTrailista = () => {
  return (
    <div className="about-trailista">
      <div className="about-header">Trailista</div>
      <div className="divider"></div>
        <p>
          I built Trailista with React on the frontend and a Rails backend API. This app utilizes &nbsp;
          <a href='https://www.hikingproject.com/data' target='blank' style={{textDecoration:'underline', color:'white'}}>Hiking Project</a>'s API to
          fetch a list of hiking trails within the 30-mile radius of user-input location. Under the hood, the app uses <a href='https://docs.mapbox.com/api/search/#forward-geocoding' target='blank' style={{textDecoration:'underline', color:'white'}}>Map Box</a>
          's API in order to convert the user-given location into GPS coordinates that is in turn sent to Hiking Project. While the clientside handles the API calls and responses, the Rails API on the
          backend handles the user-related CRUD actions such as authentication, authorization, saving favorite hiking trails and so on.
        </p>
    </div>
  )
}

export default AboutTrailista;
