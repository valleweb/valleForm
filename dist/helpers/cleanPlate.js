
Object.defineProperty(exports, "__esModule", {
  value: true
});
var cleanPlate = function cleanPlate(formScope) {

  var plate = formScope.querySelector('.valleForm__plate');
  var plateNumber = formScope.querySelector('.valleForm__plate__number');

  plate.classList.remove('valleForm__plate--Preta', 'valleForm__plate--Vermelha', 'valleForm__plate--Azul', 'valleForm__plate--Dourada', 'valleForm__plate--Verde', 'valleForm__plate--Cinza', 'valleForm__plate--Preta', 'valleForm__plate--small');

  plateNumber.classList.remove('valleForm__plate__number--small');

  plateNumber.innerText = '';
};

exports['default'] = cleanPlate;