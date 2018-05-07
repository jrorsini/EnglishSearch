import React, { Component } from 'react'
import store from '../../configureStore'
import { setFilter } from '../../actions/filter'

store.subscribe(() => {
	console.log(store.getState())
})

class Filter extends Component {
	constructor(props) {
		super(props)
	}

	partOfSpeechFilter(event) {
		store.dispatch(setFilter(event.target.value))
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
		)
	}
}

export default Filter
