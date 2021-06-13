export default mask => {
	const booleanProp = {};

	if (mask === 'cpf' || mask === 'cnpj' || mask === 'cpf_cnpj') {
		booleanProp[mask] = true
	}

	return booleanProp;
};
