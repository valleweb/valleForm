
Object.defineProperty(exports, "__esModule", {
  value: true
});
var makeIdentifier = function makeIdentifier(text, hash) {
  return String(text.replace(/\s+/g, '')) + '_' + String(hash);
};

exports['default'] = makeIdentifier;