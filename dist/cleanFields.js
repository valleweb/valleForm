Object.defineProperty(exports, "__esModule", {
	value: true
});

exports['default'] = function () {
	var allFields = document.querySelectorAll('[data-valle-field]');
	allFields.forEach(function (field) {
		return field.value = '';
	});
};