import React, { Component } from 'react';
import Nav from './components/nav';
import Search from './components/search';
import List from './components/list';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { addWord, removeWord, setCurrWord } from './actions/search';
import './App.css';
import './index.css';
import store from './stores/search';

const divStyle = {
	margin: 'auto',
	width: '40rem',
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

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(addWord({ word: 'eat', partOfSpeech: 'verb' }));
store.dispatch(addWord({ word: 'test', partOfSpeech: 'noun' }));
store.dispatch(addWord({ word: 'rack', partOfSpeech: 'noun' }));
store.dispatch(removeWord('test'));
store.dispatch(setCurrWord('test'));

export default App;
