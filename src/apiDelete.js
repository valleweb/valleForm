import axios from 'axios';

export default (baseApi, canonicalApi, customParams = {}, _id) => {

	const apiPath = `${baseApi}${canonicalApi}/${_id}`;

	axios.delete(apiPath, customParams)
		.then(res => console.log(res))
		.catch(err => console.log(err))

}