import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import './NavbarCustom.css';

class NavbarCustom extends React.Component {

	render () {
		return (
			<Navbar expand="md">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link to={'/'} className="nav-link">Home</Nav.Link>
						<Nav.Link to={'/projects/'} className="nav-link">Projects</Nav.Link>
						<Nav.Link to={'/about/'} className="nav-link">About</Nav.Link>
						<Nav.Link to={'/contact'} className="nav-link">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

}

export default NavbarCustom;