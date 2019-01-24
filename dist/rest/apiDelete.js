Object.defineProperty(exports, "__esModule", {
	value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _cleanFields = require('../fieldsControl/cleanFields');

var _cleanFields2 = _interopRequireDefault(_cleanFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (baseApi, canonicalApi) {
	var customParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	var _id = arguments[3];
	var feedbackCb = arguments[4];
	var formCb = arguments[5];


	var apiPath = '' + String(baseApi) + String(canonicalApi) + '/' + String(_id);

	_axios2['default']['delete'](apiPath, customParams).then(function (res) {
		feedbackCb('Dados apagados com sucesso', 'success');
		(0, _cleanFields2['default'])();
		formCb();
	})['catch'](function (err) {
		return feedbackCb('Erro interno no servidor', 'error');
	});
};