"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var normalizeCaseProp = function normalizeCaseProp(prop) {
  var booleanProp = {};
  booleanProp[prop] = true; // Set any other boolean (case) prop

  return booleanProp;
};

exports["default"] = normalizeCaseProp;