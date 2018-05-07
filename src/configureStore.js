import { createStore, combineReducers } from 'redux'
import wordsReducer from './reducers/words'
import filterReducer from './reducers/filter'

const store = createStore(
	combineReducers({
		filter: filterReducer,
		word: wordsReducer
	})
)

export default store
