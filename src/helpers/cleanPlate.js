const cleanPlate = (formScope) => {

  const plate = formScope.querySelector(`.valleForm__plate`);
  const plateNumber = formScope.querySelector(`.valleForm__plate__number`);

  plate.classList.remove(
    `valleForm__plate--Preta`,
    `valleForm__plate--Vermelha`,
    `valleForm__plate--Azul`,
    `valleForm__plate--Dourada`,
    `valleForm__plate--Verde`,
    `valleForm__plate--Cinza`,
    `valleForm__plate--Preta`,
    `valleForm__plate--small`
  );

  plateNumber.classList.remove(`valleForm__plate__number--small`);

  plateNumber.innerText = '';

}

export default cleanPlate;
