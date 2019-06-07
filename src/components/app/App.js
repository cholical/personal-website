import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <div className="app-navbar">
            <Link to="/">Home</Link>
            <Link to="/projects/">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <Route exact path="/" component={Home}/>
          <Route path="/projects/" component={Projects}/>
          <Route path="/about/" component={About}/>
          <Route path="/contact/" component={Contact}/>
        </Router>
      </div>
    );
  }
}

export default App;
