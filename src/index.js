import React from 'react';
import ReactDOM from 'react-dom';
import { Search, ExampleItem } from './component_search';
import keyHandler from './keyboard';
import eng from './english';

ReactDOM.render(
	<div>
		<Search />
		<ExampleItem />
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

const random_funct = () => {
	const bar = document.getElementById('search_bar');
	console.log(bar.value);
};

event_handler_setter(document.body, 'keydown', event =>
	keyHandler(event, 13, () =>
		hit_word_api(document.getElementById('search_bar').value)
			.then(show_definition_result)
			.catch(err => console.log(err))
	)
);

const hit_word_api = word =>
	new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', `https://wordsapiv1.p.mashape.com/words/${word}/`);
		xhr.setRequestHeader(
			'X-Mashape-Key',
			'EM2LjqPX7NmshWE6CHvwADy0hGEkp1R0TUGjsnD7oIZjmUisZt'
		);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.send();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				resolve(JSON.parse(xhr.responseText));
			} else if (xhr.status !== 200) {
				reject(xhr.statusText);
			}
		};
	});

const show_definition_result = res => {
	console.log(res);
};
