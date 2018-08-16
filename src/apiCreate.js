import axios from 'axios';

export default (baseApi, canonicalApi, customParams = {}) => {

	const apiPath = `${baseApi}${canonicalApi}`;
	const params = Object.assign(customParams, getFieldsParams());

	axios.post(apiPath, params)
		.then(res => console.log(res))
		.catch(err => console.log(err))

}

const getFieldsParams = () => {
	const allFields = document.querySelectorAll('[data-valle-field]');

	const fieldsParams = {};
	allFields.forEach(field => {
		fieldsParams[field.dataset.valleField] = field.value ? field.value : '';
	})

	return fieldsParams;
}