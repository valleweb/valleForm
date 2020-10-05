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
  token,
  closeSpeedDial,
  updateValleList,
  ) => {

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

    closeSpeedDial();

    fetch(apiPath, { method, headers, body })
      .then(res => res.json())
      .then(data => {

        /**
         * Request success
         * 
         */
        
        feedbackCb(data.evento.mensagem, 'success');
        newCB();

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
          null,
          null,
        );
    
      }

      })
      .catch(err => {

        /**
         * Request error
         * 
         */

        console.log(err);

        feedbackCb('Erro interno no servidor', 'error')

      });

}

export default apiDelete;