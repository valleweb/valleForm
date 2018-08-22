Object.defineProperty(exports, "__esModule", {
	value: true
});

exports['default'] = function (defaultFieldsValues) {

	// -----------
	// TODO: Refactor: Add allFields to state. Allow reuse this reference (here and cleanForm)
	// Controls default values
	// -----------

	var allFields = document.querySelectorAll('[data-valle-field]');

	allFields.forEach(function (field) {
		var fieldKey = field.dataset.valleField;
		field.value = defaultFieldsValues[fieldKey];
	});
};