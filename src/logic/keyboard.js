/**
 *
 * @param {Object} event
 * @param {Number} _keyCode
 * @param {Function} callback to invok when the key number parameter passed matchs with the event.
 */
const key_handler = (event, _keyCode, callback) => {
	if (event.keyCode === _keyCode) {
		try {
			callback();
		} catch (err) {
			console.log(err);
		}
	}
};

export default key_handler;
