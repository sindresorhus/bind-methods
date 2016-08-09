'use strict';
module.exports = (obj, context) => {
	context = context || obj;

	for (const key of Object.keys(obj)) {
		const val = obj[key];

		if (typeof val === 'function') {
			obj[key] = val.bind(context);
		}
	}
};
