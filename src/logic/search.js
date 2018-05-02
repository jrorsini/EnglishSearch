import ReactDOM from 'react-dom';
import React from 'react';
import ExampleItem from '../components/search/item';
import Preview from '../components/search/preview';
import Filter from '../components/search/filter';
import wapi from './word_api_handler';

const show_meanings = meanings =>
	meanings.map((meaning, i) => (
		<ExampleItem
			key={i}
			definition={wapi.get_prop_value(meaning, 'definition')}
			partOfSpeech={wapi.get_prop_value(meaning, 'partOfSpeech')}
			hasTypes={wapi.get_prop_value(meaning, 'hasTypes')}
			synonyms={wapi.get_prop_value(meaning, 'synonyms')}
			typeOf={wapi.get_prop_value(meaning, 'typeOf')}
			examples={wapi.get_prop_value(meaning, 'examples')}
		/>
	));

const getPartOfSpeechList = res => {
	let list = [];
	res.results.map(e => {
		if (list.indexOf(e.partOfSpeech) === -1) {
			list.push(e.partOfSpeech);
		}
	});
	return list;
};

const showResult = res => {
	// console.log(res)
	//https://glosbe.com/gapi/translate?from=eng&dest=fra&format=json&phrase=hello&pretty=true
	ReactDOM.render(
		<div>
			<Preview
				word={res.word}
				pronunciation={
					res.pronunciation
						? res.pronunciation.all
							? res.pronunciation.all
							: res.pronunciation
						: ''
				}
				frequency={res.frequency ? res.frequency : ''}
				syllablesCount={res.syllables ? res.syllables.count : ''}
				syllablesList={res.syllables ? res.syllables.list : ''}
			/>
			{getPartOfSpeechList(res).length > 1 ? (
				<Filter partOfSpeech={getPartOfSpeechList(res)} />
			) : (
				''
			)}
			<div
				style={{
					padding: '0 1rem'
				}}
			>
				{show_meanings(res.results)}
			</div>
		</div>,
		document.getElementById('js-examples')
	);
};

export default showResult;