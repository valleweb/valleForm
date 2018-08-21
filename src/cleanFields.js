export default () => {
	const allFields = document.querySelectorAll('[data-valle-field]');
	allFields.forEach(field => field.value = '');
}
