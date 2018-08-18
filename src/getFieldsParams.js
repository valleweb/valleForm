export default () => {
	const allFields = document.querySelectorAll('[data-valle-field]');

	const fieldsParams = {};
	let hasError = false;

	allFields.forEach(field => {

		// Individual validation
		if(field.error) {
			hasError = true
		}

		// Global required validation
		if(field.required && !field.value || field.value == '') {
			hasError = true
			field.setAttribute('error', 'true')
		}

		fieldsParams[field.dataset.valleField] = field.value ? field.value : '';
	})

	return hasError ? false : fieldsParams

}