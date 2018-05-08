// TODOS
/**
 * x Filter functional
 *
 */

// DONE

import App from './App';

import eng from './logic/english';
import wapi from './logic/word_api_handler';
import showResult from './logic/search';
import keyHandler from './logic/keyboard';

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import store from './configureStore';
import { addWord, removeWord, setCurrWord } from './actions/search';

const jsx = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();

/**
 *
 * @param {Object} element2Apply
 * @param {String} eventName
 * @param {Function} _function
 * @function Adds an event handler.
 */
const event_handler_setter = (element2Apply, eventName, _function) => {
	element2Apply.addEventListener(eventName, _function);
};

class Results extends Component {}

event_handler_setter(document.body, 'keydown', event =>
	keyHandler(event, 13, () =>
		wapi
			.search(eng.format(document.getElementById('js-search_bar').value))
			.then(res => {
				showResult(res);
				store.dispatch(setCurrWord(res.word));
			})
			.catch(err => console.log(err))
	)
);
