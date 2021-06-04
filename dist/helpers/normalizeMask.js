"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (mask) {
	var booleanProp = {};

	if (mask) {
		booleanProp[mask] = true;
	}

	return booleanProp;
};