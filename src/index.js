import React from 'react'
import ReactDOM from 'react-dom'
import Search from './component_search'
import keyHandler from './keyboard'

ReactDOM.render(<Search />, document.getElementById('app'))

/**
 *
 * @param {Object} element2Apply
 * @param {String} eventName
 * @param {Function} _function
 * @function Adds an event handler.
 */
const event_handler_setter = (element2Apply, eventName, _function) => {
	element2Apply.addEventListener(eventName, _function)
}

const random_funct = () => {
	const bar = document.getElementById('search_bar')
	console.log(bar.value)
}

event_handler_setter(document.body, 'keydown', event =>
	keyHandler(event, 13, random_funct)
)

const fetch_definition = word => {
	const xhr = new XMLHttpRequest()
	xhr.open('GET', `https://wordsapiv1.p.mashape.com/words/${word}/`)
	xhr.setRequestHeader(
		'X-Mashape-Key',
		'EM2LjqPX7NmshWE6CHvwADy0hGEkp1R0TUGjsnD7oIZjmUisZt'
	)
	xhr.setRequestHeader('Accept', 'application/json')
	xhr.send()
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			console.log(JSON.parse(xhr.responseText))
		} else if (xhr.status !== 200) {
			console.log(JSON.parse(xhr.responseText))
		}
	}
}

fetch_definition('test')
