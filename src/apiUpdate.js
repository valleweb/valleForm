import axios from 'axios';
import getFieldsParams from './getFieldsParams';

export default (baseApi, canonicalApi, customParams = {}, _id) => {

	const fieldsParams = getFieldsParams();

	if (fieldsParams) {

		const apiPath = `${baseApi}${canonicalApi}/${_id}`;
		const params = Object.assign(customParams, getFieldsParams());

		axios.put(apiPath, params)
			.then(res => console.log(res))
			.catch(err => console.log(err))

	} else {

		console.log('error')

	}

}