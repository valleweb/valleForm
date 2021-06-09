Object.defineProperty(exports, "__esModule", {
  value: true
});
var patternUnformater = function patternUnformater(pattern, data) {

  if (pattern[0] === '#') {

    console.log('patternUnformater:');
    console.log(data);
    console.log(data.replace(/\./g, ""));
    console.log(data.replace(/,/g, "."));
    return String(data).replace(/\./g, "").replace(/\,/g, ".");
  }
};

exports['default'] = patternUnformater;