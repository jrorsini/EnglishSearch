const pronunciation = res =>
	res.pronunciation.all ? res.pronunciation.all : res.pronunciation;
/**
 *
 * @param {Object} e element result with definitions and examples.
 * @param {String} prop propety value to look for from result element.
 * @return {String} definition of the element.
 */
const get_prop_value = (e, prop) =>
	e[prop]
		? typeof e[prop] === 'string' ? e[prop] : e[prop].join(', ')
		: 'None';

module.exports = { pronunciation, get_prop_value };
