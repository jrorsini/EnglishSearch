import React, { Component } from 'react'
import SearchBar from './search/search-bar'
import ExampleItem from './search/item'

class Search extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				<div id="js-examples" />
			</div>
		)
	}
}

export default Search
