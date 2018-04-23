import React, { Component } from 'react'

class Nav extends Component {
	render() {
		return (
			<nav>
				<a>English</a>
				<ul>
					<li>
						<a href="#">Search</a>
					</li>
					<li>
						<a href="#">List</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Nav
