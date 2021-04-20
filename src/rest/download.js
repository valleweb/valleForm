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
    .then(res => res.json())
    .then(data => {

      /**
      * Request success
      *
      */

      const newBlob = new Blob([data], {type: 'octet/stream'});

      FileSaver.saveAs(newBlob, 'download.zip')

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
