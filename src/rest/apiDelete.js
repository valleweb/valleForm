import cleanFields from '../fieldsControl/cleanFields'

/**
 * TODO: Add JSDocs
 * 
 */

const apiDelete = (
	baseApi,
	canonicalApi,
	customParams = {},
	_id,
	feedbackCb,
	newCB,
	token) => {

		/**
		 * API url
		 * 
		 */

		const apiPath = `${baseApi}${canonicalApi}`;

		/**
		 * Request configs
		 * 
		 */

		const method = 'DELETE';

		const headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		});

		/**
		 * Resquest data structure
		 * 
		 */

		const body = JSON.stringify({
			evento: {
				...customParams,
				action: 'delete',
				dados: null
			}
		});

		/**
		 * HTTP DELETE
		 * 
		 */

		fetch(apiPath, { method, headers, body })
			.then(res => res.json())
			.then(data => {

				/**
				 * Request success
				 * 
				 */
				
				feedbackCb(data.evento.mensagem, 'success');
				newCB();

			})
			.catch(() => {

				/**
				 * Request error
				 * 
				 */

				feedbackCb('Erro interno no servidor', 'error')

			});

}

export default apiDelete;