import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

class About extends React.Component {
	render() {
		return (
			<div className="custom-container">
				<Container>
				<Row className="justify-content-md-center">
					<Col md="auto">About</Col>
				</Row>
				</Container>
			</div>
		);
	}
}

export default About;