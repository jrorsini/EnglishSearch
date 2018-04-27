const prepositions = [
	'up',
	'on',
	'in',
	'off',
	'out',
	'from',
	'down',
	'away',
	'over'
]
/**
 * @param {String} sentence to break down into words.
 * @return {Array} words list that the sentence has been broken into.
 */
const words = sentence => {
	return sentence
		.trim()
		.split(/\s/)
		.map(e => e.replace(/[.,:?!]/gi, ''))
}

/**
 * @param {String} sentence to pick up the first word for
 * @return {String} first word
 */
const first = sentence => words(sentence)[0]

/**
 * @param {String} sentence to pick up the last word for
 * @return {String} last word
 */
const last = sentence => words(sentence)[words(sentence).length - 1]

/**
 * @param {String} word to check if preposition.
 * @return {Boolean} wether or not the last word is a preposition.
 */
const is_preposition = word => {
	return prepositions.indexOf(word) !== -1 ? true : false
}

const format = sentence =>
	words(sentence).length > 1
		? is_preposition(last(sentence))
			? `${first(sentence)} ${last(sentence)}`
			: first(sentence)
		: first(sentence)

module.exports = {
	is_preposition,
	format,
	words
}
