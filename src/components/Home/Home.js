import React from 'react'
import Presentation from './Presentation'
import Draw from './Draw'
import Tech from './Tech'


class Home extends React.Component {
  render() {
    return (
      <div className="section main-section">
        <div className="section sec-section">
          <div className="container">
            <Presentation />
            {/* <Draw /> */}
          </div>
        </div>
        <div className="section sec-section cool">
      
            <div className="container">
              <Tech/>
            </div>
         

        </div>
        <div className="section sec-section">
          <h1></h1>
        </div>
      </div>
    );
  }



}


export default Home;