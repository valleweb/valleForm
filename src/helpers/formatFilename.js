/**
 * TODO: Add JSDocs
 *
 */

const formatFileName = FileName => {
  return 'Arquivo(s) no servidor: ' + FileName.split('/')[FileName.split('/').length - 1]
}

export default formatFileName;
