import getFieldsParams from '../fieldsControl/getFieldsParams';
import cleanFields from '../fieldsControl/cleanFields';

const apiCustomRequest = ({
  getData,
  action,
  button_id,
  baseApi,
  params,
  token,
  _id,
  endpoint = '',
  feedbackCb,
  tabErrorCount,
  closeSpeedDial,
  updateValleList,
  setCleanup,
  customParams = {},
  setLoading,
  shouldClean,
}) => {

  const fieldsParams = getFieldsParams(_id, tabErrorCount);

  if (fieldsParams) {

    const method = 'POST';

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const body = JSON.stringify({
      evento: {
        id_usuario: params.id_usuario,
        token,
        identificador: params.identificador,
        cliente_id: params.cliente_id,
        empresa: params.empresa,
        estabelecimento: params.estabelecimento,
        conexao: params.conexao,
        sistema: params.sistema,
        formulario: params.formulario,
        location: "",
        action: action,
        button_id: button_id,
        dados: fieldsParams,
        endpoint: endpoint,
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
     * -----
     *
     */

    if(action == 'custom_api' || action == 'custom_stp') {

      fetch(`${baseApi}/generic-action`, { method, headers, body })
      .then(res => res.json())
      .then(data => {

        setLoading(false);

        /**
         * -----
         *
         */

        if(getData) {
          getData(data);
        }

        /**
         * -----
         *
         */

        if(data.evento.mensagem) {
          feedbackCb(data.evento.mensagem, 'success');
        }

        /**
         * Only clean when insert mode.
         *
         */

        if(shouldClean) {
          cleanFields(_id, setCleanup);
        }

        /**
         * -----
         *
         */

        if(updateValleList.listData) {

            if(updateValleList.listData.list) {

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

        }

      })
      .catch(() => {

        /**
         * Request error
         *
         */

        setLoading(false);

        feedbackCb('Erro interno no servidor', 'error');

      });;

    } else {

      fetch(`${baseApi}/form-filter`, { method, headers, body })
      .then(res => res.json())
      .then(data => {

        setLoading(false);

        if(getData) {
          getData(data);
        }

        if(data.evento.mensagem) {
          feedbackCb(data.evento.mensagem, 'success');
        }

      })
      .catch(() => {

        /**
         * Request error
         *
         */

        setLoading(false);

        feedbackCb('Erro interno no servidor', 'error');

      });

    }

  } else {

    /**
     * Form error
     *
     */

    feedbackCb('Erro ao preencher o formulário', 'error');

  }

}

export default apiCustomRequest;
