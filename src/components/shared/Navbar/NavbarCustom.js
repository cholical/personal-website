import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarCustom.css';

class NavbarCustom extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			collapsed: true,
			navbarBg: '',
			navbarCollapseCSS: ''
		}
		this.test = this.test.bind(this);
		this.toggleCollapse = this.toggleCollapse.bind(this);

		this.navbarCollapseRef = React.createRef();
	}

	test() {
		console.log(this.state.navbarCollapseCSS);
		this.setState({navbarCollapseCSS: ''});
	}

	toggleCollapse() {
		var collapsedState = this.state.collapsed;
		if (collapsedState) {
			this.setState({collapsed: !collapsedState});
		} else {
			setTimeout(function() {
				this.setState({collapsed: !collapsedState});
			}.bind(this), 250);
		}
	}

	render() {
		return (
			<Navbar expand="md" bg={this.state.collapsed ? "" : "dark"} variant="dark" collapseOnSelect="true" fixed="top">
				<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.toggleCollapse}/>
				<Navbar.Collapse id="basic-navbar-nav" bsPrefix={this.state.navbarCollapseCSS}>
					<Nav>
						<Nav.Link onSelect={this.test} as={Link} to="/" onClick={this.test}>Home</Nav.Link>
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