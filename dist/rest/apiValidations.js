Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFieldsParamsWithNoValidations = require('../fieldsControl/getFieldsParamsWithNoValidations');

var _getFieldsParamsWithNoValidations2 = _interopRequireDefault(_getFieldsParamsWithNoValidations);

var _addFieldsValues = require('../fieldsControl/addFieldsValues');

var _addFieldsValues2 = _interopRequireDefault(_addFieldsValues);

var _cleanSpecificFields = require('../fieldsControl/cleanSpecificFields');

var _cleanSpecificFields2 = _interopRequireDefault(_cleanSpecificFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * TODO: Add JSDocs
 * 
 */

var apiValidations = function apiValidations(baseApi, token, params, field, action, _id, setModalData, setSnackBarStatus) {
  var currentFilledFields = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;


  /**
   * -----
   * 
   */

  var dados = (0, _getFieldsParamsWithNoValidations2['default'])(_id);

  /**
   * -----
   * 
   */

  var dontValidate = (action === 'exact_blur' || action === 'exists_blur') && dados[field.id].value === '';

  if (dontValidate) {

    console.log('=======================');
    console.log(field.id + ':');
    console.log('Empty exact_blur (Dont call the server)');
    console.log('=======================');

    console.log('Original error text:');
    console.log(field.error_text);
    console.log('=======================');

    /**
     * -----
     * 
     */

    if (currentFilledFields) {
      (0, _cleanSpecificFields2['default'])(currentFilledFields, dados);
    }

    dados[field.id].ref.setAttribute('errortext', field.error_text);

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

  var method = 'POST';

  var headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + String(token)
  });

  console.log('body:');

  /**
   * -----
   * 
   */
  var filteredDados = {};

  Object.keys(dados).forEach(function (id) {
    filteredDados[id] = dados[id].value;
  });

  console.log('=======================');

  console.log('dados:');
  console.log(filteredDados);

  console.log('=======================');

  var body = JSON.stringify({
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
        valor: dados[field.id].value
      },
      dados: filteredDados
    }
  });

  console.log(body);

  console.log('=======================');

  /**
   * -----
   * 
   */

  fetch(String(baseApi) + '/form-validations', { method: method, headers: headers, body: body }).then(function (res) {
    return res.json();
  }).then(function (data) {

    console.log('response:');
    console.log(data);

    console.log('=======================');

    /**
     * -----
     * 
     */

    if (setSnackBarStatus && data.evento.mensagem) {
      setSnackBarStatus({
        show: true,
        text: data.evento.mensagem,
        type: 'success'
      });
    }

    /**
     * -----
     * 
     */

    if (action === 'exists_blur' && data.evento.exist) {
      dados[field.id].ref.setAttribute('error', 'true');
      dados[field.id].ref.setAttribute('data-valle-error', 'true');

      if (data.evento.mensagem) {
        dados[field.id].ref.setAttribute('errortext', data.evento.mensagem);
      }
    }

    if (action === 'exists_blur' && !data.evento.exist) {
      dados[field.id].ref.removeAttribute('error');
      dados[field.id].ref.removeAttribute('data-valle-error');
      dados[field.id].ref.removeAttribute('errortext');
    }

    /**
     * -----
     * 
     */

    if (action === 'exact_blur' && data.evento.exist) {

      console.log('exact_blur (exist) dados:');
      console.log(data.evento.dados);

      console.log('_id:');
      console.log(data.evento.dados);

      console.log('=======================');

      (0, _addFieldsValues2['default'])(data.evento.dados, _id);
    }

    /**
     * -----
     * 
     */

    if ((action === 'exact_blur' || action === 'find') && data.evento.list) {
      data.evento.dados = filteredDados;
      setModalData(data);
    }
  })['catch'](function () {

    /**
     * -----
     * 
     */

    if (setSnackBarStatus) {
      setSnackBarStatus({
        show: true,
        text: 'Erro interno no servidor',
        type: 'error'
      });
    }
  });
};

exports['default'] = apiValidations;