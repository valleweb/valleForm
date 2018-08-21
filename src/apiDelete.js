import axios from 'axios';
import cleanFields from './cleanFields'

export default (baseApi, canonicalApi, customParams = {}, _id, feedbackCb) => {

	const apiPath = `${baseApi}${canonicalApi}/${_id}`;

	axios.delete(apiPath, customParams)
			 .then(res => {
					feedbackCb('Dados apagados com sucesso', 'success');
					cleanFields();
				})
			 .catch(err => feedbackCb('Erro interno no servidor', 'error'))

}
