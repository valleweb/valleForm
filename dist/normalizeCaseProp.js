Object.defineProperty(exports, "__esModule", {
	value: true
});
var isValidBooleanProp = function isValidBooleanProp(prop) {
	return prop.trim();
};
var isCapitalizeProp = function isCapitalizeProp(prop) {
	return prop === 'ProperCase';
};

var normalizeCaseProp = function normalizeCaseProp(prop) {

	var booleanProp = {};

	if (isValidBooleanProp(prop)) {
		isCapitalizeProp(prop) ? booleanProp['capitalize'] = true : // Set Capitalize (normalized )prop
		booleanProp[prop.toLowerCase()] = true; // Set any other boolean (case) prop
	}

	return booleanProp;
};

exports['default'] = normalizeCaseProp;