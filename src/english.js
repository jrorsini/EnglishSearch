const prepositions = ['off', 'up', 'on', 'from', 'out', 'down', 'away', 'in']

/**
 *
 * @param {String} sentence to break down into words
 * @return {Array} words list that the sentence has been broken into.
 */
const words_list = sentence => {
	return sentence
		.trim()
		.split(/\s/)
		.map(e => e.replace(/[\.\,\:\?\!]/gi, ''))
}

const has_preposition = sentence => {
	const last_word = words_list(sentence)[words_list(sentence).length - 1]
	return prepositions.indexOf(last_word) !== -1 ? true : false
}

const has_phrasal_verb = sentence => {}

module.exports = {
	has_phrasal_verb,
	has_preposition,
	words_list
}
