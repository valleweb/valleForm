"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var showErrorsCount = function showErrorsCount(tabErrorsCount, tabIdentifier) {

  var tabErrors = null;

  var tabFields = tabErrorsCount[tabIdentifier] || {};
  var tabFieldsKeys = Object.keys(tabFields);

  for (var i = 0; i < tabFieldsKeys.length; i++) {

    var fieldId = tabFieldsKeys[i];
    if (tabFields[fieldId]) tabErrors++;
  }

  return tabErrors;
};

exports["default"] = showErrorsCount;