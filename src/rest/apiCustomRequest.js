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
  }) => {

  const fieldsParams = getFieldsParams(_id);

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

  console.log(action)

  if(action == 'custom_api' || action == 'custom_stp') {

    console.log('custom')

    fetch(`${baseApi}/generic-action`, { method, headers, body })
    .then(res => res.json())
    .then(data => {
      if(getData) {
        getData(data);
      }
    });

  } else {

    console.log('filter')

    fetch(`${baseApi}/form-filter`, { method, headers, body })
    .then(res => res.json())
    .then(data => {
      if(getData) {
        getData(data);
      }
    });

  }

}

export default apiCustomRequest;
