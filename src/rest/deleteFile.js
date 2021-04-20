/**
 * TODO: Add JSDocs
 *
 */

const deleteFile = (baseApi, token, params, id, pathValue, setSnackBarStatus, cleanUploadInput) => {

  console.log('===========================')
  console.log('delete')
  console.log('===========================')

  const method = 'DELETE';

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  const body = JSON.stringify({
    evento: {
      ...params,
      campo: id,
      caminho: pathValue
    }
  });

  /**
   * HTTP POST
   *
   */

  console.log(baseApi)

  fetch(`${baseApi}/delete-file`, { method, headers, body })
    .then(res => res.json())
    .then(data => {

      /**
      * Request success
      *
      */

      cleanUploadInput()

      if (setSnackBarStatus && data.evento.mensagem) {
        setSnackBarStatus({
          show: true,
          text: data.evento.mensagem,
          type: 'success'
        });
      }

    })
    .catch(err => {

      /**
      * Request error
      *
      */

      console.log(err);

      if (setSnackBarStatus) {
        setSnackBarStatus({
          show: true,
          text: 'Erro ao tentar apagar arquivo',
          type: 'error'
        });
      }

    });

}

export default deleteFile;
