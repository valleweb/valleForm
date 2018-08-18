import axios from 'axios';
import getFieldsParams from './getFieldsParams';

export default (baseApi, canonicalApi, customParams = {}, feedbackCb) => {

	const fieldsParams = getFieldsParams();

	if (fieldsParams) {

		const apiPath = `${baseApi}${canonicalApi}`;
		const params = Object.assign(customParams, fieldsParams);
	
		axios.post(apiPath, params)
				 .then(res => feedbackCb('Dados salvos com sucesso', 'success'))
				 .catch(err => feedbackCb('Erro interno no servidor', 'error'))

	} else {

		feedbackCb('Erro ao preencher o formulário', 'error');

	}

}