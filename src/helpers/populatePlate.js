const populatePlate = (formScope, value) => {

  const obj = JSON.parse(value);

  if(obj.cor_placa && obj.tipo && obj.placa) {

    const plate = formScope.querySelector(`.valleForm__plate`);
    const plateNumber = formScope.querySelector(`.valleForm__plate__number`);

    plate.classList.add(`valleForm__plate--${obj.cor_placa.trim()}`);

    if (obj.tipo.toLowerCase() == 'pequena') {

      plateNumber.classList.add(`valleForm__plate__number--small`);
      plate.classList.add(`valleForm__plate--small`);

      plateNumber.innerHTML = `<div>${obj.placa.substring(0,3)}</div><div>${obj.placa.substring(3,7)}</div>`

    } else if (obj.tipo.toLowerCase() == 'mini') {

      plate.classList.add(`valleForm__plate--mini`);
      plateNumber.innerText = obj.placa;

    } else {

      plateNumber.innerText = obj.placa;

    }

  }

}

export default populatePlate;
