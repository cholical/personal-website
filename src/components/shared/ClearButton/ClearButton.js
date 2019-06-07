import React from 'react';
import './ClearButton.css';

class ClearButton extends React.Component {

	render() {
		return (
			<button className="btn btn-light clear-button" type="button" onClick={this.props.onClick}>{this.props.children}</button>
		)
	}
}

export default ClearButton;