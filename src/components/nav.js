import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<Link to="/">English</Link>
					</li>
					<li>
						<Link to="/search">Search</Link>
					</li>
					<li>
						<Link to="/list">List</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;
