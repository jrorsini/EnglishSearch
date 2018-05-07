const setFilter = (text = 'all') => ({
	type: 'SET_FILTER',
	text
})

module.exports = {
	setFilter
}
