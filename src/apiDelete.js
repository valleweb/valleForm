import axios from 'axios';

export default (baseApi, canonicalApi, customParams = {}, _id, feedbackCb) => {

	const apiPath = `${baseApi}${canonicalApi}/${_id}`;

	axios.delete(apiPath, customParams)
			 .then(res => feedbackCb('Dados apagados com sucesso', 'success'))
			 .catch(err => feedbackCb('Erro interno no servidor', 'error'))

}