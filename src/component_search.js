import React from 'react';
import ReactDOM from 'react-dom';

/**
 * @class creates Search component.
 */
export class Search extends React.Component {
	render() {
		return <input type="text" id="search_bar" />;
	}
}

/**
 * @class creates Result's example items.
 */
export class ExampleItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			definition: this.props.definition,
			partOfSpeech: this.props.partOfSpeech,
			hasTypes: this.props.hasTypes,
			examples: this.props.examples,
			synonyms: this.props.synonyms,
			typeOf: this.props.typeOf
		};
	}

	render() {
		return (
			<div>
				<small>type of: {this.props.typeOf.join(', ')}</small>
				<p>
					({this.props.partOfSpeech}) {this.props.definition}
				</p>
				<p>
					types:{' '}
					{this.props.hasTypes !== 'None' ? (
						<i>{Object.values(this.props.hasTypes).join(', ')}</i>
					) : (
						''
					)}
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
				<b>
					synonyms:{' '}
					{this.props.synonyms !== 'None' ? (
						<i>{Object.values(this.props.synonyms).join(', ')}</i>
					) : (
						''
					)}
				</b>
			</div>
		);
	}
}
