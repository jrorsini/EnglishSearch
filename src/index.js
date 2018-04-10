import React from 'react'
import ReactDOM from 'react-dom'
import Search from './component_search'

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

/**
 *
 * @param {Object} event
 * @param {Function} callback to invok when the Enter key is pressed.
 */
const enter_key_pressed = (event, callback) => {
	if (event.keyCode === 13) {
		callback()
	}
}

const random_funct = () => {
	const bar = document.getElementById('search_bar')
	console.log(bar.value)
}

event_handler_setter(document.body, 'keydown', event =>
	enter_key_pressed(event, random_funct)
)
