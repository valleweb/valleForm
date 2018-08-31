export default (defaultFieldsValues) => {

	// -----------
	// TODO: Refactor: Add allFields to state. Allow reuse this reference (here and cleanForm)
	// Controls default values
	// -----------

	const allFields = document.querySelectorAll('[data-valle-field]');

	allFields.forEach(field => {
		const fieldKey = field.dataset.valleField;
		field.value = defaultFieldsValues[fieldKey];
	});

}
