Object.defineProperty(exports, "__esModule", {
	value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _getFieldsParams = require('./getFieldsParams');

var _getFieldsParams2 = _interopRequireDefault(_getFieldsParams);

var _cleanFields = require('./cleanFields');

var _cleanFields2 = _interopRequireDefault(_cleanFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (baseApi, canonicalApi) {
	var customParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	var feedbackCb = arguments[3];


	var fieldsParams = (0, _getFieldsParams2['default'])();

	if (fieldsParams) {

		var apiPath = '' + String(baseApi) + String(canonicalApi);
		var params = Object.assign(customParams, fieldsParams);

		_axios2['default'].post(apiPath, params).then(function (res) {
			feedbackCb('Dados salvos com sucesso', 'success');
			(0, _cleanFields2['default'])();
		})['catch'](function (err) {
			return feedbackCb('Erro interno no servidor', 'error');
		});
	} else {

		feedbackCb('Erro ao preencher o formulário', 'error');
	}
};