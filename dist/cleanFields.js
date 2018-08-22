Object.defineProperty(exports, "__esModule", {
	value: true
});

exports['default'] = function () {

	// -----------
	// TODO: Remove this. Use a React memory reference instead.
	// -----------

	var allFields = document.querySelectorAll('[data-valle-field]');
	allFields.forEach(function (field) {
		return field.value = '';
	});
};