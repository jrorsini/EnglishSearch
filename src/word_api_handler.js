const pronunciation = res =>
	res.pronunciation.all ? res.pronunciation.all : res.pronunciation;

module.exports = { pronunciation };
