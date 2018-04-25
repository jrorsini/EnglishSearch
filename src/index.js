import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ExampleItem from './components/search/item.js'
import Preview from './components/search/preview.js'
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

const partOfSpeechList = res => {
	let list = []
	res.results.map(e => {
		if (list.indexOf(e.partOfSpeech) === -1) {
			list.push(e.partOfSpeech)
		}
	})
	return list
}

const show_result = res => {
	// console.log(res)
	//https://glosbe.com/gapi/translate?from=eng&dest=fra&format=json&phrase=hello&pretty=true
	ReactDOM.render(
		<div>
			<Preview
				word={res.word}
				pronunciation={
					res.pronunciation
						? res.pronunciation.all
							? res.pronunciation.all
							: res.pronunciation
						: ''
				}
				frequency={res.frequency ? res.frequency : ''}
				syllablesCount={res.syllables ? res.syllables.count : ''}
				syllablesList={res.syllables ? res.syllables.list : ''}
			/>
			{partOfSpeechList(res).length > 1 ? (
				<form>
					<select>
						<option value="all">All</option>
						{partOfSpeechList(res).map((e, i) => (
							<option key={i} value={e}>
								{e}
							</option>
						))}
					</select>
				</form>
			) : (
				''
			)}

			<div
				style={{
					padding: '0 1rem'
				}}
			>
				{show_examples(res)}
			</div>
		</div>,
		document.getElementById('js-examples')
	)
}

const show_examples = res =>
	res.results.map((e, i) => (
		<ExampleItem
			key={i}
			definition={wapi.get_prop_value(e, 'definition')}
			partOfSpeech={wapi.get_prop_value(e, 'partOfSpeech')}
			hasTypes={wapi.get_prop_value(e, 'hasTypes')}
			synonyms={wapi.get_prop_value(e, 'synonyms')}
			typeOf={wapi.get_prop_value(e, 'typeOf')}
			examples={wapi.get_prop_value(e, 'examples')}
		/>
	))

event_handler_setter(document.body, 'keydown', event =>
	keyHandler(event, 13, () =>
		wapi
			.search(eng.format(document.getElementById('js-search_bar').value))
			.then(res => {
				console.log(res.results.map(e => wapi.get_prop_value(e, 'synonyms')))
				show_result(res)
				console.log()
			})
			.catch(err => console.log(err))
	)
)
