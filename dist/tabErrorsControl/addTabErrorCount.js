"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var addTabErrorCount = function addTabErrorCount(tabIdentifier, fieldId, tabErrorsCount, setTabErrorsCount) {

  var updatedErrorCount = Object.assign({}, tabErrorsCount, _defineProperty({}, tabIdentifier, Object.assign({}, tabErrorsCount[tabIdentifier], _defineProperty({}, fieldId, true))));

  setTabErrorsCount(updatedErrorCount);
};

exports["default"] = addTabErrorCount;