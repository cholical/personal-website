import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';

class Projects extends React.Component {
	render() {
		// Parallax in the background
		return (
			<div className="custom-container">
				<Container>
				<Row className="justify-content-md-center">
					<Col md="auto">Projects</Col>
				</Row>
				</Container>
			</div>
		)
	}
}

export default Projects;