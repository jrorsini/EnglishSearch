import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

class Nav extends Component {
	render() {
		return (
			<nav className="nav">
				<ul>
					<li>
						<Link className="nav-link" to="/search">
							Search
						</Link>
					</li>
					<li>
						<Link className="nav-link" to="/list">
							List
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Nav
