import axios from 'axios';

export default (baseApi, canonicalApi, customParams = {}, _id) => {

	const apiPath = `${baseApi}${canonicalApi}/${_id}`;
	const params = Object.assign(customParams, getFieldsParams());

	axios.put(apiPath, params)
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