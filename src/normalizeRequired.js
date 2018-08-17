export default required => {
	const booleanProp = {};

	if (required) {
		booleanProp['required'] = true
	}

	return booleanProp;
};