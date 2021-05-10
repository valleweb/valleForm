Object.defineProperty(exports, "__esModule", {
  value: true
});
var populatePlate = function populatePlate(formScope, value) {

  var obj = JSON.parse(value);

  if (obj.cor_placa && obj.tipo && obj.placa) {

    var plate = formScope.querySelector('.valleForm__plate');
    var plateNumber = formScope.querySelector('.valleForm__plate__number');

    plate.classList.add('valleForm__plate--' + String(obj.cor_placa.trim()));

    if (obj.tipo.toLowerCase() == 'pequena') {

      plateNumber.classList.add('valleForm__plate__number--small');
      plate.classList.add('valleForm__plate--small');

      plateNumber.innerHTML = '<div>' + String(obj.placa.substring(0, 3)) + '</div><div>' + String(obj.placa.substring(3, 7)) + '</div>';
    } else if (obj.tipo.toLowerCase() == 'mini') {

      plate.classList.add('valleForm__plate--mini');
      plateNumber.innerText = obj.placa;
    } else {

      plateNumber.innerText = obj.placa;
    }
  }
};

exports['default'] = populatePlate;