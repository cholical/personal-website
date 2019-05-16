import React from 'react';

class Gear extends React.Component {
  
  render() {
    return (
      <div className="gear-single">
        <img src={this.props.src} alt="gear" height={this.props.dimension} width={this.props.dimension} style={this.props.style}></img>
      </div>
    );
  }

}

export default Gear;