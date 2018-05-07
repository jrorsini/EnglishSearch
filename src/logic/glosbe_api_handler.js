/**
 *
 * @param {Object} e element result with definitions and examples.
 * @param {String} prop propety value to look for from result element.
 * @return {String} definition of the element.
 */
const get_prop_value = (e, prop) => (e[prop] ? e[prop] : false)

/**
 *
 * @param {String} word to translate
 * @promise that fecthes data from WordApi
 * @resolve Fetched Data
 * @reject couldn't reach
 */
const search = word =>
	new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		//https://glosbe.com/gapi/translate?from=eng&dest=fra&format=json&phrase=
		xhr.open('GET', `http://localhost:9000/search/${word}/`)
		xhr.setRequestHeader('Accept', 'application/json')
		xhr.send()
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText))
			} else if (xhr.status !== 200) {
				reject(xhr.statusText)
			}
		}
	})

module.exports = { search }
