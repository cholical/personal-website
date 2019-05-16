import React from 'react';
import './GearColumn.css';
import gearImage from '../../media/img/gear.png';
import Gear from './Gear';

class GearColumn extends React.Component {
	
	constructor(props) {
    super(props);

    this.state = {
      numberOfGears: 5,
      rotSpeedDivisor: 10,
      rot: window.scrollY,
      side: props.side.toLowerCase() === 'right' ? 'right' : 'left'
    }

  }

	componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
	}
	
	handleScroll(event) {
    this.setState(() => ({rot: this.calculateRotationPosition()}));
  }

  calculateRotationPosition() {
    return this.state.side === 'right' ? (window.scrollY / this.state.rotSpeedDivisor % 360) : -(window.scrollY / this.state.rotSpeedDivisor % 360);
  }

  calculateGearDimension(height) {
    return height / this.state.numberOfGears;
  }

  calculateSideIndent(height) {
    return '-' + height / this.state.numberOfGears / 2 + 'px';
  }
	
	render() {
    
    let gears = [];
    for (let i = 0; i < this.state.numberOfGears; i++) {
      gears.push(<Gear src={gearImage} dimension={this.calculateGearDimension(this.props.height)} style={{transform: 'rotate(' + this.state.rot + 'deg)'}} key={i}></Gear>)
    }

    return (
      <div className="gear-column" style={{[this.props.side]: this.calculateSideIndent(this.props.height)}}>
        {gears}
      </div>
    )
  }

}

export default GearColumn;