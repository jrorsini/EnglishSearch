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
