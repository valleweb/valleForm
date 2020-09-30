import getFieldsParams from '../fieldsControl/getFieldsParams';

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
  }
  ) => {

  const fieldsParams = getFieldsParams(_id);

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

    if(action == 'custom_api' || action == 'custom_stp') {

      fetch(`${baseApi}/generic-action`, { method, headers, body })
      .then(res => res.json())
      .then(data => {

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

        feedbackCb('Erro interno no servidor', 'error');

      });;

    } else {

      fetch(`${baseApi}/form-filter`, { method, headers, body })
      .then(res => res.json())
      .then(data => {

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
