import axios from 'axios';
import getFieldsParams from './getFieldsParams';

export default (baseApi, canonicalApi, customParams = {}, _id, feedbackCb) => {

	const fieldsParams = getFieldsParams();

	if (fieldsParams) {

		const apiPath = `${baseApi}${canonicalApi}/${_id}`;
		const params = Object.assign(customParams, getFieldsParams());

		axios.put(apiPath, params)
				 .then(res => feedbackCb('Dados atualizados com sucesso', 'success'))
				 .catch(err => feedbackCb('Erro interno no servidor', 'error'))

	} else {

		feedbackCb('Erro ao preencher o formulário', 'error');

	}

}