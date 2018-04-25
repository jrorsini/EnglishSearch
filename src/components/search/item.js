import React, { Component } from 'react'

/**
 * @class creates Result's example items.
 */
class ExampleItem extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="search-item">
				<small>
					{this.props.typeOf !== 'None'
						? `type of: ${Object.values(this.props.typeOf).join(', ')}`
						: ''}
				</small>
				<p>
					<b>({this.props.partOfSpeech})</b> {this.props.definition}
				</p>
				<p>
					{this.props.hasTypes !== 'None'
						? `types:  ${Object.values(this.props.hasTypes)
								.slice(0, 2)
								.join(', ')}`
						: ''}
				</p>
				{this.props.examples !== 'None' ? (
					<i>
						{Object.values(this.props.examples)
							.map(e => `"${e}"`)
							.join(', ')}
					</i>
				) : (
					''
				)}
				<br />
				<b>
					{this.props.synonyms !== 'None'
						? `synonyms: ${Object.values(this.props.synonyms).join(', ')}`
						: ''}
				</b>
			</div>
		)
	}
}

export default ExampleItem
