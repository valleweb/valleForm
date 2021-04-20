import FileSaver from 'file-saver';

/**
 * TODO: Add JSDocs
 *
 */

const download = (baseApi, token, params, id, pathValue, event) => {

  console.log('===========================')
  console.log('download')
  console.log('===========================')

  if(!pathValue) {
    pathValue = event.target.dataset.pathTarget
  }

  const method = 'POST';

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

    fetch(`${baseApi}/download`, { method, headers, body })
    .then(res => res.blob())
    .then(data => {

      /**
      * Request success
      *
      */

      FileSaver.saveAs(data, 'download.zip', {type: 'application/zip'})

    })
    .catch(err => {

      /**
      * Request error
      *
      */

      console.log(err);

      // feedbackCb('Erro interno no servidor', 'error');

    });

}

export default download;
