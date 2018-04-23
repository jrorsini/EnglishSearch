import React from 'react'
import ReactDOM from 'react-dom'
import { Search, ExampleItem } from './component_search'
import keyHandler from './keyboard'
import eng from './english'
import wapi from './word_api_handler'

ReactDOM.render(
	<div>
		<Search />
		<div id="examples" />
	</div>,
	document.getElementById('app')
)

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

const show_result = res => {
	console.log(res)
}

const show_examples = res => {
	ReactDOM.render(
		<div>
			{res.results.map((e, i) => (
				<ExampleItem
					key={i}
					definition={wapi.get_prop_value(e, 'definition')}
					partOfSpeech={wapi.get_prop_value(e, 'partOfSpeech')}
					hasTypes={wapi.get_prop_value(e, 'hasTypes')}
					synonyms={wapi.get_prop_value(e, 'synonyms')}
					typeOf={wapi.get_prop_value(e, 'typeOf')}
					examples={wapi.get_prop_value(e, 'examples')}
				/>
			))}
		</div>,
		document.getElementById('examples')
	)
}

event_handler_setter(document.body, 'keydown', event =>
	keyHandler(event, 13, () =>
		wapi
			.search(eng.format(document.getElementById('search_bar').value))
			.then(show_examples)
			.catch(err => console.log(err))
	)
)
