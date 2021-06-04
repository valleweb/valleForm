
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * TODO: Add JSDocs
 *
 */

var formatFileName = function formatFileName(FileName) {
  return 'Arquivo(s) no servidor: ' + FileName.split('/')[FileName.split('/').length - 1];
};

exports['default'] = formatFileName;