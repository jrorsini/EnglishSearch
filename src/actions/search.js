const addWord = word => ({
	type: 'ADD_NEW_WORD',
	word
});
const removeWord = (wordToRemove = '') => ({
	type: 'REMOVE_WORD',
	wordToRemove
});

const setCurrWord = (currWord = '') => ({
	type: 'SET_CURR_WORD',
	currWord
});

module.exports = {
	addWord,
	removeWord,
	setCurrWord
};
