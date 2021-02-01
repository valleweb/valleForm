export default (prop, value) => {

	const booleanProp = {};

	if (value) {
		booleanProp[prop] = true
	}

  return booleanProp;

};
