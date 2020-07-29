const apiValidations = (
  baseApi,
  token,
  params,
  field,
  data,
  ) => {

  const method = 'POST';

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  const body = JSON.stringify({
    evento: {
      id_usuario: "99",
      token: "nhfdggdjf", 
      identificador: "013",
      cliente_id:1000,
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

  fetch(`${baseApi}/form-validations`, { method, headers, body })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });

}

export default apiValidations;
