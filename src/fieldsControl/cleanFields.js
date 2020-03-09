export default () => {

	// -----------
	// TODO: Remove this. Use a React memory reference instead.
	// -----------

	const allFields = document.querySelectorAll('[data-valle-field]');

	allFields.forEach(field => {

		field.removeAttribute('error');
		field.removeAttribute('data-valle-error');

		field.value = '';

	});

}
