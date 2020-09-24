import getFieldsParamsWithNoValidations from '../fieldsControl/getFieldsParamsWithNoValidations';

/**
 * TODO: Add JSDocs
 * 
 */

const apiValidations = (
  baseApi,
  token,
  params,
  field,
  action,
  _id,
  setModalData,
  ) => {

  const dados = getFieldsParamsWithNoValidations(_id);

  console.log('=======================');

  console.log('baseApi:');
  console.log(baseApi);

  console.log('token:');
  console.log(token);

  console.log('params:');
  console.log(params);

  console.log('field:');
  console.log(field);

  console.log('action:');
  console.log(action);

  console.log('dados:');
  console.log(dados);

  console.log('=======================');

  console.log('campo:');

  console.log({
    nome: field.id,
    valor: dados[field.id]
  });

  console.log('=======================');

  const method = 'POST';

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  console.log('body:');

  const body = JSON.stringify({
    evento: {
      id_usuario: params.id_usuario,
      token: token, 
      identificador: params.identificador,
      cliente_id: params.cliente_id,
      empresa: params.empresa,
      estabelecimento: params.estabelecimento,
      conexao: params.conexao,
      sistema: params.sistema,
      formulario: params.formulario,
      location: params.location,
      action: action,
      campo: {
        nome: field.id,
        valor: dados[field.id]
      },
      dados: dados
    }
  });

  console.log(body);

  console.log('=======================');

  /**
   * -----
   * 
   */

  fetch(`${baseApi}/form-validations`, { method, headers, body })
    .then(res => res.json())
    .then(data => {

      console.log('response:');
      console.log(data);

      console.log('=======================');

      if(data.evento.list) {
        setModalData(data);
      }

    });

}

export default apiValidations;
