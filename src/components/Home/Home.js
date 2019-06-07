import React from 'react';
import './Home.css';
import ClearButton from '../shared/ClearButton/ClearButton';

class Home extends React.Component {

	constructor(props) {
		super(props);

		this.goToProjects = this.goToProjects.bind(this);

		this.state = {
				homeTitle: 'Ronald Ding',
				homeSubtitle: 'Software Engineer, Consultant',
				homeDescription: 'Welcome to my website. I am a software engineer and consultant. Feel free to browse through my projects, give feedback, and reach out.'
		}
	}
	
	goToProjects() {
		this.props.history.push('/projects/');
	}

	render() {
		return (
			<div className="home-container">
				<div className="home-title">
					{this.state.homeTitle}
				</div>
				<div className="home-subtitle">
					{this.state.homeSubtitle}
				</div>
				<div className="home-description">
					{this.state.homeDescription}
				</div>
				<ClearButton onClick={this.goToProjects}>Projects</ClearButton>
			</div>
		)
	}
}

export default Home;