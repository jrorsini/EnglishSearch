const defaultFilterState = { sortBy: 'all', option: [] }

const filterReducer = (state = defaultFilterState, action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return { ...state, sortBy: action.text }
			break
		default:
			break
	}
	return state
}

module.exports = filterReducer
