import React, { Component } from 'react'

/**
 * @class creates Search component.
 */
class Preview extends Component {
	render() {
		const {
			word,
			pronunciation,
			frequency,
			syllablesCount,
			syllablesList
		} = this.props

		return (
			<div className="block search-preview">
				<h3>
					{word} <small>{pronunciation}</small>
				</h3>
				{frequency ? (
					<p>
						Frequency - <b>{frequency}</b>
					</p>
				) : (
					''
				)}

				{syllablesCount ? (
					<p>
						<b>{syllablesCount}</b> Syllable(s){' '}
						{syllablesList ? <span>{syllablesList.join(" ' ")}</span> : ''}
					</p>
				) : (
					''
				)}
			</div>
		)
	}
}

export default Preview
