import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import About from './About/About'
import '../index.scss'


const App = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  });


  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;