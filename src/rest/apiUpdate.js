import getFieldsParams from '../fieldsControl/getFieldsParams';

/**
 * TODO: Add JSDocs
 *
 */

const apiUpdate = (
  baseApi,
  canonicalApi,
  customParams = {},
  _id,
  feedbackCb,
  formCb,
  token,
  closeSpeedDial,
  updateValleList,
  tabErrorCount,
  setLoading,
) => {

  /**
   * Get all form values
   *
   */

  const fieldsParams = getFieldsParams(_id, tabErrorCount);

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

    const method = 'PUT';

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
     * -----
     *
     */

    closeSpeedDial();

    /**
     * -----
     *
     */

    setLoading(true);

    /**
     * HTTP PUT
     *
     */

    fetch(apiPath, { method, headers, body })
      .then(res => res.json())
      .then(data => {

        /**
         * Request success
         *
         */

        setLoading(false);

        feedbackCb(data.evento.mensagem, 'success');
        formCb();

        /**
         * Update ValleList
         *
         */

        if(updateValleList) {

          let columns = [];

          if(updateValleList.listData.list.columns) {

            console.log('Update vallelist with filters:');
            console.log(updateValleList.listData.list.columns);

            columns = updateValleList.listData.list.columns;

          } else {

            console.log('Update vallelist without filters');

          }

          updateValleList.getListFromAPI(
            customParams.id_usuario,
            token,
            customParams.identificador,
            customParams.cliente_id,
            customParams.empresa,
            customParams.estabelecimento,
            customParams.conexao,
            customParams.sistema,
            customParams.formulario,
            true,
            updateValleList.listData,
            updateValleList.setListData,
            null,
            1,
            columns,
            fieldsParams,
            null,
          );

        }

      })
      .catch(err => {

        /**
         * Request error
         *
         */

        setLoading(false);

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

export default apiUpdate;
