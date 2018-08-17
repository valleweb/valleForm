export default () => {
	const allFields = document.querySelectorAll('[data-valle-field]');

	const fieldsParams = {};
	let hasError = false;

	allFields.forEach(field => {
		if(field.error) hasError = true
		fieldsParams[field.dataset.valleField] = field.value ? field.value : '';
	})

	return hasError ? false : fieldsParams

}