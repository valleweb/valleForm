Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * TODO: Add JSDocs
 *
 */

var getHash = function getHash(token, params, fieldId, apiRequest) {

  /**
   * Request configs
   *
   */

  var method = 'POST';

  var headers = new Headers({
    'Content-Type': 'application/json'
  });

  /**
   * Request data structure
   *
   */

  var body = JSON.stringify({
    evento: {
      token: token,
      empresa: params.empresa,
      estabelecimento: params.estabelecimento,
      formulario: params.formulario,
      id_usuario: params.id_usuario,
      cliente_id: params.cliente_id,
      identificador: params.identificador,
      conexao: params.conexao,
      location: "",
      sistema: params.sistema,
      campo: fieldId
    }
  });

  /**
   * HTTP POST
   *
   */

  return fetch(apiRequest, { method: method, headers: headers, body: body }).then(function (res) {
    return res.json();
  });
};

exports['default'] = getHash;