const cleanUploadInput = (formScope, dataset) => {

  const fakeUploadInput = formScope.querySelector(`#${dataset.fakeUploadRef}`);
  const fileName = formScope.querySelector(`#${dataset.uploadFileNameRef}`);

  fakeUploadInput.value = '';
  fileName.innerText = 'Ainda não há arquivo(s) no servidor';

}

export default cleanUploadInput;
