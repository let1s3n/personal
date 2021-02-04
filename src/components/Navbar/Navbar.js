import React from 'react'
import M from 'materialize-css/dist/js/materialize'
import logo from '../../assets/img/logo.jpg'

class Navbar extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo"><img id="img-logo" src={logo} alt="logo" /></a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Projects</a></li>
              <li><a href="badges.html">About me</a></li>

            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a href="sass.html">Projects</a></li>
          <li><a href="badges.html">About me</a></li>

        </ul>


      </div>
    );

  }

}

export default Navbar;