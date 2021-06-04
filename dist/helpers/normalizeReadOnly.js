
Object.defineProperty(exports, "__esModule", {
	value: true
});

exports['default'] = function (readyOnlyState) {
	var booleanProp = {};

	if (readyOnlyState) {
		booleanProp['disabled'] = true;
	}

	return booleanProp;
};