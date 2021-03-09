import React from 'react'
import Presentation from './Presentation'
import Tech from './Tech'
import Contacto from './Contacto'


class Home extends React.Component {
  render() {
    return (
      <div className="section main-section">
        <div className="section sec-section full">
          <div className="container center-align">
            <Presentation />
            {/* <VideoArea /> */}
            {/* <Draw /> */}
          </div>
        </div>
        <div className="section sec-section cool">
      
            <div className="container">
              <Tech/>
            </div>
         

        </div>
        <div className="section sec-section full center-align">
          <Contacto />
        </div>
      </div>
    );
  }



}


export default Home;