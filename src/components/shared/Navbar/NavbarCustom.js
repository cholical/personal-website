import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarCustom.css';

class NavbarCustom extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			expanded: false,
			expandedColor: false,
		}
		this.test = this.test.bind(this);
		this.toggleNavbar = this.toggleNavbar.bind(this);

		this.navbarCollapseRef = React.createRef();
	}

	test() {
		this.setState({expanded: false});
		setTimeout(function() {
			this.setState({expandedColor: false});
		}.bind(this), 250);
	}

	toggleNavbar() {
		const expandedState = this.state.expanded;
		const expandedColor = this.state.expandedColor;
		if (expandedState) {
			this.setState({expanded: !expandedState});
			setTimeout(function() {
				this.setState({expandedColor: !expandedColor});
			}.bind(this), 250);
		} else {
			this.setState({expanded: !expandedState});
			this.setState({expandedColor: !expandedColor});
		}
	}

	render() {
		return (
			<Navbar expand="md" bg={this.state.expandedColor ? "dark" : ""} variant="dark" collapseOnSelect="true" fixed="top" onToggle={this.toggleNavbar} expanded={this.state.expanded}>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						<Nav.Link as={Link} to="/" onClick={this.test}>Home</Nav.Link>
						<Nav.Link as={Link} to="/projects/" onClick={this.test}>Projects</Nav.Link>
						<Nav.Link as={Link} to="/about/" onClick={this.test}>About</Nav.Link>
						<Nav.Link as={Link} to="/contact/" onClick={this.test}>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

}

export default NavbarCustom;