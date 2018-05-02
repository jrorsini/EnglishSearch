import React, { Component } from 'react';

class Filter extends Component {
	constructor(props) {
		super(props);
	}

	partOfSpeechFilter(e) {
		console.log(e);
	}

	render() {
		return (
			<form>
				<select onChange={event => this.partOfSpeechFilter(event)}>
					<option value="all">All</option>
					{this.props.partOfSpeech.map((e, i) => (
						<option key={i} value={e}>
							{e}
						</option>
					))}
				</select>
			</form>
		);
	}
}

export default Filter;