import React from 'react'
import Presentation from './Presentation'



class Home extends React.Component {
  render() {
    return (
      <div className="section">
        <section className="section main-section">
          <Presentation />
        </section>
        <section className="main-section cool">
          <div className="section">
            asdasd
          </div>
          <div className="section">
            asdasd
          </div>
        </section>
        <section className="main-section">
          <h1>primera seccion</h1>
        </section>
      </div>
    );
  }



}


export default Home;