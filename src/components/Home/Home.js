import React from 'react'
import Presentation from './Presentation'
import Draw from './Draw'


class Home extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="section main-section main">
          <div className="container">
            <Presentation />
            <Draw />
          </div>
        </div>
        <div className="section main-section cool">
      
            <div className="section section-mask">
              <h2>something</h2>
            </div>
         

        </div>
        <div className="section main-section">
          <h1>Other section</h1>
        </div>
      </div>
    );
  }



}


export default Home;