
Object.defineProperty(exports, "__esModule", {
	value: true
});

exports['default'] = function (required) {
	var booleanProp = {};

	if (required) {
		booleanProp['required'] = true;
	}

	return booleanProp;
};