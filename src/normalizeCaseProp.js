const isValidBooleanProp = prop => (prop.trim());
const isCapitalizeProp = prop => (prop === 'ProperCase');

const normalizeCaseProp = prop => {

	const booleanProp = {};

	if (isValidBooleanProp(prop)) {
		isCapitalizeProp(prop)
			? (booleanProp['capitalize'] = true) // Set Capitalize (normalized )prop
			: (booleanProp[prop.toLowerCase()] = true); // Set any other boolean (case) prop
	}

	return booleanProp;

};

export default normalizeCaseProp;
