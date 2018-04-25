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
			<div className="block search-item">
				{this.props.typeOf !== false ? (
					<small>
						<b>type of: </b>
						{Object.values(this.props.typeOf).join(', ')}
					</small>
				) : (
					''
				)}

				<p>
					<b>{this.props.partOfSpeech}_</b> {this.props.definition}
				</p>

				{this.props.hasTypes !== false ? (
					<p>
						<u>types:</u>
						{Object.values(this.props.hasTypes)
							.slice(0, 2)
							.join(', ')}
					</p>
				) : (
					''
				)}

				{this.props.examples !== false ? (
					<i>
						{Object.values(this.props.examples)
							.map(e => `"${e}"`)
							.join(', ')}
					</i>
				) : (
					''
				)}

				<b>
					{this.props.synonyms !== false
						? `synonyms: ${Object.values(this.props.synonyms).join(', ')}`
						: ''}
				</b>
			</div>
		)
	}
}

export default ExampleItem
