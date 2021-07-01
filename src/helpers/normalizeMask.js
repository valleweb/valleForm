export default mask => {
	const booleanProp = {};

	if (mask === 'cpf' || mask === 'cnpj' || mask === 'cpf_cnpj' || mask === 'number_float' || mask === 'number_integer') {
		booleanProp[mask] = true
	}

	return booleanProp;
};
