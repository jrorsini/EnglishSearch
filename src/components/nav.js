import React, { Component } from 'react';

class Nav extends Component {
	render() {
		return (
			<nav className="nav">
				<ul>
					<li>
						<a className="nav-link" to="/search">
							Search
						</a>
					</li>
					<li>
						<a className="nav-link" to="/list">
							List
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;
