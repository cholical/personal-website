import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarCustom.css';

class NavbarCustom extends React.Component {

	constructor(props) {
		super(props);
		this.test = this.test.bind(this);
	}

	test() {
		console.log('test');
	}

	render() {
		return (
			<Navbar expand="md" variant="dark" collapseOnSelect="true" fixed="top">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						<Nav.Link onSelect={this.test} as={Link} to="/">Home</Nav.Link>
						<Nav.Link as={Link} to="/projects/" >Projects</Nav.Link>
						<Nav.Link as={Link} to="/about/">About</Nav.Link>
						<Nav.Link as={Link} to="/contact/">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

}

export default NavbarCustom;