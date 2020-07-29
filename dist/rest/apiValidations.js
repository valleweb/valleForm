Object.defineProperty(exports, "__esModule", {
  value: true
});
var apiValidations = function apiValidations(baseApi, token, params, field, data) {

  var method = 'POST';

  var headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + String(token)
  });

  var body = JSON.stringify({
    evento: {
      id_usuario: "99",
      token: "nhfdggdjf",
      identificador: "013",
      cliente_id: 1000,
      empresa: "<name company>",
      estabelecimento: "00",
      conexao: "Valle_Sistemas",
      sistema: "Pagar",
      formulario: "frmClientes",
      location: "",
      action: "",
      campo: {
        nome: "",
        valor: ""
      },
      dados: {}
    }
  });

  /**
   * -----
   * 
   */

  fetch(String(baseApi) + '/form-validations', { method: method, headers: headers, body: body }).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
  });
};

exports['default'] = apiValidations;