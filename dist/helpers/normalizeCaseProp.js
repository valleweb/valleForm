Object.defineProperty(exports, "__esModule", {
	value: true
});
var isCapitalizeProp = function isCapitalizeProp(prop) {
	return prop === 'ProperCase';
};

var normalizeCaseProp = function normalizeCaseProp(prop) {

	var booleanProp = {};

	isCapitalizeProp(prop) ? booleanProp['capitalize'] = true : // Set Capitalize (normalized )prop
	booleanProp[prop] = true; // Set any other boolean (case) prop

	return booleanProp;
};

exports['default'] = normalizeCaseProp;