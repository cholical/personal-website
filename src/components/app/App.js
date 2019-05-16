import React from 'react';
import './App.css';
import Filler from '../shared/filler/Filler';
import GearColumn from '../gears/GearColumn';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
	}
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="App">
        <div>
          Ronald Ding's Website
        </div>
        <Filler count="100"></Filler>
        <GearColumn side="left" height={this.state.height} width={this.state.width}></GearColumn>
        <GearColumn side="right" height={this.state.height} width={this.state.width}></GearColumn>
      </div>
    )
  }

}

export default App;
