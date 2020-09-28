import getFieldsParamsWithNoValidations from '../fieldsControl/getFieldsParamsWithNoValidations';
import addFieldsValues from '../fieldsControl/addFieldsValues';

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
  setSnackBarStatus,
  ) => {

  /**
   * -----
   * 
   */

  const dados = getFieldsParamsWithNoValidations(_id);

  /**
   * -----
   * 
   */

  const dontValidate = (action === 'exact_blur' || action === 'exists_blur') && dados[field.id].value === '';

  if(dontValidate) {
    console.log('=======================');
    console.log(field.id + ':')
    console.log('Empty exact_blur (Dont call the server)');
    console.log('=======================');
    return;
  }

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

  console.log('=======================');

  console.log('campo:');

  console.log({
    nome: field.id,
    valor: dados[field.id].value
  });

  console.log('campo ref:');

  console.log(dados[field.id].ref);

  console.log('=======================');

  /**
   * -----
   * 
   */

  const method = 'POST';

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  console.log('body:');

  /**
   * -----
   * 
   */
  const filteredDados = {};

  Object.keys(dados).forEach(id => { 
    filteredDados[id] = dados[id].value;
  })

  console.log('=======================');

  console.log('dados:');
  console.log(filteredDados);

  console.log('=======================');

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
        valor: dados[field.id].value,
      },
      dados: filteredDados,
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

      /**
       * -----
       * 
       */

      if(setSnackBarStatus && data.evento.mensagem) {
        setSnackBarStatus({
          show: true,
          text: data.evento.mensagem,
          type: 'success',
        });
      }

      /**
       * -----
       * 
       */

      if(action === 'exists_blur' && data.evento.exist) {
        dados[field.id].ref.setAttribute('error', 'true');
        dados[field.id].ref.setAttribute('data-valle-error', 'true');

        if(data.evento.mensagem) {
          dados[field.id].ref.setAttribute('errortext', data.evento.mensagem);
        }

      }

      if(action === 'exists_blur' && !data.evento.exist) {
        dados[field.id].ref.removeAttribute('error');
        dados[field.id].ref.removeAttribute('data-valle-error');
        dados[field.id].ref.removeAttribute('errortext');
      }

      /**
       * -----
       * 
       */

      if((action === 'exact_blur') && data.evento.exist) {

        console.log('exact_blur (exist) dados:');
        console.log(data.evento.dados);

        console.log('_id:');
        console.log(data.evento.dados);

        console.log('=======================');

        addFieldsValues(data.evento.dados, _id);

      }

      /**
       * -----
       * 
       */

      if((action === 'exact_blur' || action === 'find') && data.evento.list) {
        setModalData(data);
      }

    }).catch(() => {

      /**
       * -----
       * 
       */

      if(setSnackBarStatus) {
        setSnackBarStatus({
          show: true,
          text: 'Erro interno no servidor',
          type: 'error',
        });
      }

    });

}

export default apiValidations;
