import React, { Component } from 'react';
import SearchBar from './search/search-bar';

class Search extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				<div id="js-examples" />
			</div>
		);
	}
}

export default Search;
