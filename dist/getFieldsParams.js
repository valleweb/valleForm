Object.defineProperty(exports, "__esModule", {
	value: true
});

exports['default'] = function () {
	var allFields = document.querySelectorAll('[data-valle-field]');

	var fieldsParams = {};
	var hasError = false;

	allFields.forEach(function (field) {

		// Individual validation
		if (field.error) {
			hasError = true;
		}

		// Global required validation
		if (field.required && !field.value || field.value == '') {
			hasError = true;
			field.setAttribute('error', 'true');
		}

		fieldsParams[field.dataset.valleField] = field.value ? field.value : '';
	});

	return hasError ? false : fieldsParams;
};