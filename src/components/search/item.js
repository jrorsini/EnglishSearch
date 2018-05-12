import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * @class creates Result's example items.
 */
class ExampleItem extends Component {
	render() {
		const {
			typeOf,
			partOfSpeech,
			definition,
			hasTypes,
			examples,
			synonyms
		} = this.props;

		return (
			<div className="block search-item">
				{typeOf ? (
					<small>
						<b>type of: </b>
						{Object.values(typeOf).join(', ')}
					</small>
				) : (
					''
				)}

				<p>
					<b>{partOfSpeech}_</b> {definition}
				</p>

				{hasTypes ? (
					<p>
						<u>types:</u>
						{Object.values(hasTypes)
							.slice(0, 2)
							.join(', ')}
					</p>
				) : (
					''
				)}

				{examples ? (
					<i>
						{Object.values(examples)
							.map(e => `"${e}"`)
							.join(', ')}
					</i>
				) : (
					''
				)}

				<p>
					<b>
						{synonyms ? `synonyms: ${Object.values(synonyms).join(', ')}` : ''}
					</b>
				</p>
			</div>
		);
	}
}

export default ExampleItem;
