export default readyOnlyState => {
	const booleanProp = {};

	if (readyOnlyState) {
		booleanProp['disabled'] = true
	}

	return booleanProp;
};