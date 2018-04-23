import React, { Component } from 'react'

class Nav extends Component {
	render() {
		return (
			<nav>
				<a>English</a>
				<ul>
					<li>
						<a>Search</a>
					</li>
					<li>
						<a>List</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Nav
