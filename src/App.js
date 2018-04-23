import React, { Component } from 'react';
import Nav from './components/nav';
import Home from './components/home';
import Search from './components/search';
import List from './components/list';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const divStyle = {
	margin: 'auto',
	width: '40rem'
};

class App extends Component {
	render() {
		return (
			<Router className="App">
				<div>
					<header className="App-header">
						<Nav />
					</header>
					<div style={divStyle}>
						<Route exact path="/search" component={Search} />
						<Route path="/list" component={List} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
