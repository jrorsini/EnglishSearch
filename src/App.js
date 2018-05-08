import React, { Component } from 'react';
import Nav from './components/nav';
import List from './components/list';
import Search from './components/search';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './index.css';

const divStyle = {
	margin: 'auto',
	width: '70%',
	padding: '2rem 0'
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
