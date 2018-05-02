import React, { Component } from 'react';

class Filter extends Component {
	constructor(props) {
		super(props);
	}

	partOfSpeechFilter(event) {
		console.log(event.target.value);
	}

	render() {
		return (
			<form>
				<select onChange={this.partOfSpeechFilter}>
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
