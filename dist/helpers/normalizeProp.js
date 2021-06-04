"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (prop, value) {

	var booleanProp = {};

	if (value) {
		booleanProp[prop] = true;
	}

	return booleanProp;
};