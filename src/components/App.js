import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import '../assets/index.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
class App extends React.Component {
  render() {
    return (
      <div className="principal">
        <Navbar/>
        <Home/>
      </div>
    );
  }
}

export default App;