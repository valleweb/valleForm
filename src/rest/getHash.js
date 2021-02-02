/**
 * TODO: Add JSDocs
 *
 */

const getHash = (
  token,
  params,
  fieldId,
  apiRequest,
) => {

  /**
   * Request configs
   *
   */

  const method = 'POST';

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  /**
   * Request data structure
   *
   */

  const body = JSON.stringify({
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
      campo: fieldId,
    }
  });

  /**
   * HTTP POST
   *
   */

  return fetch(apiRequest, { method, headers, body })
    .then(res => res.json())
}

export default getHash;
