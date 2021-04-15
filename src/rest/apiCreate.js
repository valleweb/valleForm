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
  closeSpeedDial,
  updateValleList,
  tabErrorCount,
  setCleanup,
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

    const method = 'POST';

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    /**
     * Request data structure
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

        setLoading(false);

        feedbackCb(data.evento.mensagem, 'success');
        cleanFields(_id, setCleanup);

        /**
         * Filter ValleList update by id_tabela
         *
         */

        if(updateValleList) {

          let columns = [];

          if(data.evento.id_tabela_filter) {

            console.log('Update vallelist with id_tabela');

            columns = [{
              id: "id_tabela",
              filter: {
                tipo_1: "=",
                valor_1: data.evento.id_tabela,
              }
            }];

          } else if (updateValleList.listData.list.columns) {

            console.log('Update vallelist with filters');

            columns = updateValleList.listData.list.columns;

          } else {

            console.log('Update vallelist without id_tabela and filters');

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

export default apiCreate;
