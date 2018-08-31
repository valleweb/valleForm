import axios from 'axios';
import cleanFields from '../fieldsControl/cleanFields'

export default (baseApi, canonicalApi, customParams = {}, _id, feedbackCb, formCb) => {

	const apiPath = `${baseApi}${canonicalApi}/${_id}`;

	axios.delete(apiPath, customParams)
			 .then(res => {
					feedbackCb('Dados apagados com sucesso', 'success');
					cleanFields();
					formCb();
				})
			 .catch(err => feedbackCb('Erro interno no servidor', 'error'))

}
