export default mask => {
	const booleanProp = {};

	if (mask) {
		booleanProp[mask] = true
	}

	return booleanProp;
};