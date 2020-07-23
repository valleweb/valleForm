import getFieldsParams from '../fieldsControl/getFieldsParams';
import cleanFields from '../fieldsControl/cleanFields';

/**
 * TODO: Add JSDocs
 * 
 */

const apiCreate = (
  baseApi,
  canonicalApi,
  customParams = {},
  feedbackCb,
  token,
  _id,
  ) => {

  /**
   * Get all form values
   * 
   */

  const fieldsParams = getFieldsParams(_id);

  if (fieldsParams) {

    /**
     * API url
     * 
     */

    const apiPath = `${baseApi}${canonicalApi}`;

    /**
     * Request configs
     * 
     */

    const method = 'POST';

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
        dados: fieldsParams
      }
    });

    /**
     * HTTP POST
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
        cleanFields(_id);

      })
      .catch(() => {

        /**
         * Request error
         * 
         */

        feedbackCb('Erro interno no servidor', 'error');

      });
    
  } else {

    /**
     * Form error
     * 
     */

    feedbackCb('Erro ao preencher o formulário', 'error');

  }

}

export default apiCreate;
