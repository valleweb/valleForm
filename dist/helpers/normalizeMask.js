Object.defineProperty(exports, "__esModule", {
	value: true
});

exports['default'] = function (mask) {
	var booleanProp = {};

	if (mask === 'cpf' || mask === 'cnpj' || mask === 'cpf_cnpj') {
		booleanProp[mask] = true;
	}

	return booleanProp;
};