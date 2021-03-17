/**
 * TODO: Add JSDocs
 *
 */

const apiReport = (
  baseApi,
  customParams = {},
  feedbackCb,
  token,
  closeSpeedDial,
  button_id,
  action,
) => {

  /**
   * API url
   *
   */

  const apiPath = `${baseApi}/list-reports`;

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
      ...customParams,
      button_id: button_id,
      action: action,
    }
  });

  /**
   * HTTP POST
   *
   */

  closeSpeedDial();

  fetch(apiPath, { method, headers, body })
    .then(res => res.json())
    .then(data => {

      /**
       * Request success
       *
       */

      feedbackCb(data.evento.mensagem, 'success');

    })
    .catch(err => {

      /**
       * Request error
       *
       */

      console.log(err);

      feedbackCb('Erro interno no servidor', 'error');

    });

}

export default apiReport;
