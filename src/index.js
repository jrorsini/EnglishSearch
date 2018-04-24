import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ExampleItem from './components/search/item.js'
import keyHandler from './logic/keyboard'
import eng from './logic/english'
import wapi from './logic/word_api_handler'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

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
			.search(eng.format(document.getElementById('js-search_bar').value))
			.then(show_examples)
			.catch(err => console.log(err))
	)
)
