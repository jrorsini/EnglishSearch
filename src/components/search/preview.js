import React, { Component } from 'react'

/**
 * @class creates Search component.
 */
class Preview extends Component {
	render() {
		return (
			<div className="block search-preview">
				<h3>
					<b>{this.props.word}</b> <small>({this.props.pronunciation})</small>
				</h3>
				<p>
					Frequency - <b>{this.props.frequency}</b>
				</p>
				{this.props.syllablesCount !== '' ? (
					<p>
						<b>{this.props.syllablesCount}</b> Syllable(s){' '}
						{this.props.syllablesList !== '' ? (
							<span>{this.props.syllablesList.join(' / ')}</span>
						) : (
							''
						)}
					</p>
				) : (
					''
				)}
			</div>
		)
	}
}

export default Preview
