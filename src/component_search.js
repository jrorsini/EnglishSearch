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
			data: this.props
		};
	}

	render() {
		return (
			<div>
				<small>type of: communicating, communication</small>
				<p>(Noun) trying something to find out about it</p>
				<p>
					types: trial balloon, road test, alpha test, field test, field trial,
					beta test
				</p>
				<i>"the test was standardized on a large sample of students"</i> <br />
				<b>synonyms: mental test, mental testing, psychometric test</b>
			</div>
		);
	}
}
