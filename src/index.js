import React from 'react';
import ReactDOM from 'react-dom';
import { Search, ExampleItem } from './component_search';
import keyHandler from './keyboard';
import eng from './english';
import wapi from './word_api_handler';

ReactDOM.render(
	<div>
		<Search />
		<div id="examples" />
	</div>,
	document.getElementById('app')
);

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

const show_result = res => {
	console.log(wapi.pronunciation(res));
};

const show_examples = res => {
	console.log(res.results[1]);

	console.log(wapi.get_prop_value(res.results[1], 'definition'));
	console.log(wapi.get_prop_value(res.results[1], 'partOfSpeech'));
	console.log(wapi.get_prop_value(res.results[1], 'hasTypes'));
	console.log(wapi.get_prop_value(res.results[1], 'synonyms'));
	console.log(wapi.get_prop_value(res.results[1], 'typeOf'));
	ReactDOM.render(
		<div>{res.results.map((e, i) => <ExampleItem key={i} />)}</div>,
		document.getElementById('examples')
	);
};

/**
 *
 * @param {String} word to translate
 * @promise that fecthes data from WordApi
 * @resolve Fetched Data
 * @reject couldn't reach
 */
const hit_wordapi = word =>
	new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', `https://wordsapiv1.p.mashape.com/words/${word}/`);
		xhr.setRequestHeader(
			'X-Mashape-Key',
			'EM2LjqPX7NmshWE6CHvwADy0hGEkp1R0TUGjsnD7oIZjmUisZt'
		);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.send();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status == 200) {
				resolve(JSON.parse(xhr.responseText));
			} else if (xhr.status !== 200) {
				reject(xhr.statusText);
			}
		};
	});

event_handler_setter(document.body, 'keydown', event =>
	keyHandler(event, 13, () =>
		hit_wordapi(document.getElementById('search_bar').value.trim())
			.then(show_examples)
			.catch(err => console.log(err))
	)
);

hit_wordapi('test')
	.then(show_examples)
	.catch(err => console.log(err));
