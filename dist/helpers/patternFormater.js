Object.defineProperty(exports, "__esModule", {
  value: true
});
var patternFormater = function patternFormater(pattern, data) {

  if (pattern[0] === 'X') {

    var regex = '';

    for (var i = 1; pattern.indexOf('X') >= 0; ++i) {
      pattern = pattern.replace('X', '$' + i);
      regex += '(\\d)';
    }

    regex += '[^]*';

    return String(data).replace(new RegExp(regex), pattern);
  }

  if (pattern[0] === '#') {

    if (pattern.indexOf('.') === -1) {
      console.log('not found .');

      if (pattern.indexOf('.')) {
        data = String(data).split('.')[0];
      }

      return String(data).replace(/(.)(?=(\d{3})+$)/g, '$1.');
    }

    // (patter) total digits after .
    var patternDeciamls = pattern.split('.')[1].length;

    var dataDigits = String(data).split('.');

    var newValue = '';

    // (data) verify and get numbers before .

    if (dataDigits[0]) {
      newValue = String(dataDigits[0]).replace(/(.)(?=(\d{3})+$)/g, '$1.');
    } else {
      newValue = '0';
    }

    // (data) Verify and get digits after .

    if (dataDigits[1]) {

      newValue = newValue + ',' + dataDigits[1].substr(0, patternDeciamls);

      if (dataDigits[1].length < patternDeciamls) {

        var total = patternDeciamls - dataDigits[1].length;

        for (var index = 0; index < total; index++) {
          newValue = newValue + '0';
        }
      }
    } else {
      newValue = newValue + ',' + pattern.split('.')[1];
    }

    return newValue;
  }
};

exports['default'] = patternFormater;