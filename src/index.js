// TODOS
/**
 * x Filter functional
 *
 */

// DONE

import App from './App';
import eng from './logic/english';
import wapi from './logic/word_api_handler';
import store from './stores/search';
import ReactDOM from 'react-dom';
import keyHandler from './logic/keyboard';
import registerServiceWorker from './registerServiceWorker';
import React, { Component } from 'react';
import { show_result, show_meanings } from './logic/search';
import { addWord, removeWord, setCurrWord } from './actions/search';

ReactDOM.render(<App />, document.getElementById('root'));
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

store.subscribe(() => {
	console.log(store.getState());
});

event_handler_setter(document.body, 'keydown', event =>
	keyHandler(event, 13, () =>
		wapi
			.search(eng.format(document.getElementById('js-search_bar').value))
			.then(res => {
				show_result(res);
				store.dispatch(setCurrWord(res.word));
			})
			.catch(err => console.log(err))
	)
);

store.dispatch(addWord({ word: 'eat', partOfSpeech: 'verb' }));
store.dispatch(addWord({ word: 'test', partOfSpeech: 'noun' }));
store.dispatch(addWord({ word: 'rack', partOfSpeech: 'noun' }));
store.dispatch(removeWord('test'));
