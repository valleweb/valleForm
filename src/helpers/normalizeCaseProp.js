const isCapitalizeProp = prop => (prop === 'ProperCase');

const normalizeCaseProp = prop => {

	const booleanProp = {};

	isCapitalizeProp(prop)
		? (booleanProp['capitalize'] = true) // Set Capitalize (normalized )prop
		: (booleanProp[prop] = true); // Set any other boolean (case) prop

	return booleanProp;

};

export default normalizeCaseProp;
