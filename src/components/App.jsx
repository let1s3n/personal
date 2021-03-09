import React, { useEffect, useRef } from 'react'

import Home from './Home/Home'
import Projects from './Projects/Projects'
import About from './About/About'
import { Navbar, Icon, Footer } from 'react-materialize'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import logo from '../assets/img/logo.jpg'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import '../assets/index.css'

const App = () => {
  

  useEffect(() => {
    window.scrollTo(0, 0);
  });


  return (
    <Router>
      <Navbar
        className="grey darken-3"
        alignLinks="right"
        brand={<Link className="brand-logo" to="/"><img id="img-logo" src={logo} alt="logo" /></Link>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <Link to="/projects">Projects</Link>
        <Link to="/About">About</Link>

      </Navbar>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Footer
        className="example grey darken-3"
        copyrights="&copy; 2021 Copyright Text"
        links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
        moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
      >
        <h5 className="white-text">
          Footer Content
            </h5>
        <p className="grey-text text-lighten-4">
          You can use rows and columns here to organize your footer content.
            </p>
      </Footer>
    </Router>
  );
}

export default App;