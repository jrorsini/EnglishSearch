import React, { Component } from 'react';
import Nav from './components/nav';
import Search from './components/search';
import List from './components/list';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import { createStore, combineReducers } from 'redux';

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

export default App;

const defaultFilterState = { sortBy: 'all', option: [] };
const defaultWordState = { curr: {}, list: [] };

const wordsReducer = (state = defaultWordState, action) => {
	switch (action.type) {
		case 'ADD_NEW_WORD':
			return { ...state, list: [...state.list, action.word] };
			break;
		case 'REMOVE_WORD':
			return {
				...state,
				list: state.list.filter(word => word.word !== action.wordToRemove)
			};
			break;
		case 'SET_CURR_WORD':
			return { ...state, curr: { word: action.word } };
			break;
		default:
			return state;
			break;
	}
};

const filterReducer = (state = defaultFilterState, action) => {
	return state;
};

const store = createStore(
	combineReducers({
		word: wordsReducer,
		filter: filterReducer
	})
);

store.subscribe(() => {
	console.log(store.getState());
});

const addWord = word => ({
	type: 'ADD_NEW_WORD',
	word
});
const removeWord = (wordToRemove = '') => ({
	type: 'REMOVE_WORD',
	wordToRemove
});

const setCurrWord = (currWord = '') => ({
	type: 'SET_CURR_WORD',
	currWord
});

store.dispatch(addWord({ word: 'eat', partOfSpeech: 'verb' }));
store.dispatch(addWord({ word: 'test', partOfSpeech: 'noun' }));
store.dispatch(addWord({ word: 'rack', partOfSpeech: 'noun' }));
store.dispatch(removeWord('test'));
store.dispatch(setCurrWord('test'));
