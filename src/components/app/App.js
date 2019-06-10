import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarCustom from '../shared/Navbar/NavbarCustom';
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
          <NavbarCustom></NavbarCustom>
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
