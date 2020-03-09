Object.defineProperty(exports, "__esModule", {
	value: true
});

exports['default'] = function () {

	// -----------
	// TODO: Remove this. Use a React memory reference instead.
	// -----------

	var allFields = document.querySelectorAll('[data-valle-field]');

	allFields.forEach(function (field) {

		field.removeAttribute('error');
		field.removeAttribute('data-valle-error');

		field.value = '';
	});
};