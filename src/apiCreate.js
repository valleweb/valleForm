import axios from 'axios';
import getFieldsParams from './getFieldsParams';

export default (baseApi, canonicalApi, customParams = {}) => {

	const fieldsParams = getFieldsParams();

	if (fieldsParams) {

		const apiPath = `${baseApi}${canonicalApi}`;
		const params = Object.assign(customParams, fieldsParams);
	
		axios.post(apiPath, params)
				 .then(res => console.log(res))
				 .catch(err => console.log(err))

	} else {

		console.log('error')

	}


}