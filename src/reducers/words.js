const defaultWordState = { curr: {}, list: [] };

const wordsReducer = (state = defaultWordState, action) => {
	switch (action.type) {
		case 'ADD_NEW_WORD':
			return { ...state, list: [...state.list, action.word] };
			break;
		case 'REMOVE_WORD':
			return {
				...state,
				list: state.list.filter(word => word.word !== action.wordToRemove)
			};
			break;
		case 'SET_CURR_WORD':
			return { ...state, curr: { word: action.currWord } };
			break;
		default:
			return state;
			break;
	}
};

export default wordsReducer;
