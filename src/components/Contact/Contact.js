import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

class Contact extends React.Component {
	render() {
		return (
			<div className="custom-container">
				<Container>
				<Row className="justify-content-md-center">
					<Col md="auto">Contact</Col>
				</Row>
				</Container>
			</div>
		)
	}
}

export default Contact;