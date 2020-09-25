Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFieldsParamsWithNoValidations = require('../fieldsControl/getFieldsParamsWithNoValidations');

var _getFieldsParamsWithNoValidations2 = _interopRequireDefault(_getFieldsParamsWithNoValidations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * TODO: Add JSDocs
 * 
 */

var apiValidations = function apiValidations(baseApi, token, params, field, action, _id, setModalData, showFeedback) {

  var dados = (0, _getFieldsParamsWithNoValidations2['default'])(_id);

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

  var method = 'POST';

  var headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + String(token)
  });

  console.log('body:');

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

  fetch(String(baseApi) + '/form-validations', { method: method, headers: headers, body: body }).then(function (res) {
    return res.json();
  }).then(function (data) {

    console.log('response:');
    console.log(data);

    console.log('=======================');

    if (showFeedback && data.evento.mensagem) {
      showFeedback(data.evento.mensagem, 'success');
    }

    if (data.evento.list) {
      setModalData(data);
    }
  })['catch'](function () {

    if (showFeedback) {
      showFeedback('Erro interno no servidor', 'error');
    }
  });
};

exports['default'] = apiValidations;