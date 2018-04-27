import React, { Component } from 'react'
import Nav from './components/nav'
import Search from './components/search'
import List from './components/list'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import { createStore } from 'redux'

const divStyle = {
	margin: 'auto',
	width: '40rem',
	padding: '2rem 0'
}

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
		)
	}
}

export default App

const defaultWordState = { words: [] }

const store = createStore((state = defaultWordState, action) => {
	switch (action.type) {
		case 'ADD_NEW_WORD':
			return [...state.words, 'hello']
			break
		default:
			return state
			break
	}
})

store.subscribe(() => {
	console.log(store.getState())
})

const addWord = () => ({
	type: 'ADD_NEW_WORD'
})

store.dispatch(addWord())
store.dispatch(addWord())
