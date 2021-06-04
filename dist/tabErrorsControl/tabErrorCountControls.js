
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addTabErrorCount = require('./addTabErrorCount');

var _addTabErrorCount2 = _interopRequireDefault(_addTabErrorCount);

var _removeTabErrorCount = require('./removeTabErrorCount');

var _removeTabErrorCount2 = _interopRequireDefault(_removeTabErrorCount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var tabErrorCountControls = function tabErrorCountControls(tabErrorsCount, setTabErrorsCount) {

  return {
    add: function () {
      function add(tabIdentifier, fieldId) {
        return (0, _addTabErrorCount2['default'])(tabIdentifier, fieldId, tabErrorsCount, setTabErrorsCount);
      }

      return add;
    }(),
    remove: function () {
      function remove(tabIdentifier, fieldId) {
        return (0, _removeTabErrorCount2['default'])(tabIdentifier, fieldId, tabErrorsCount, setTabErrorsCount);
      }

      return remove;
    }(),
    addMulttiples: function () {
      function addMulttiples(tabsWithFields) {
        return setTabErrorsCount(tabsWithFields);
      }

      return addMulttiples;
    }()
  };
};

exports['default'] = tabErrorCountControls;