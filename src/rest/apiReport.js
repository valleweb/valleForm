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
  setLoading,
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
   * -----
   *
   */

  closeSpeedDial();

  /**
   * -----
   *
   */

  setLoading(true);

  /**
   * HTTP POST
   *
   */

  fetch(apiPath, { method, headers, body })
    .then(res => res.json())
    .then(data => {

      /**
       * Request success
       *
       */

      setLoading(false);

      feedbackCb(data.evento.mensagem, 'success');

    })
    .catch(err => {

      /**
       * Request error
       *
       */

      setLoading(false);

      feedbackCb('Erro interno no servidor', 'error');

    });

}

export default apiReport;
