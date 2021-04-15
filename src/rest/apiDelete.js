import getFieldsParams from '../fieldsControl/getFieldsParams';

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
  token,
  closeSpeedDial,
  updateValleList,
  setLoading,
) => {

    /**
     * Get all form values
     *
     */

    const fieldsParams = getFieldsParams(_id);

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
        dados: fieldsParams,
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

        setLoading(false);

        feedbackCb(data.evento.mensagem, 'success');


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

            console.log('Update vallelist');

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

        /**
         * ------
         *
         */

        newCB();

      })
      .catch(err => {

        /**
         * Request error
         *
         */

        setLoading(false);

        feedbackCb('Erro interno no servidor', 'error')

      });

}

export default apiDelete;
