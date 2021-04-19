const cleanUploadInput = (formScope, dataset) => {

  const fakeUploadInput = formScope.querySelector(`#${dataset.fakeUploadRef}`);
  const fileName = formScope.querySelector(`#${dataset.uploadFileNameRef}`);
  const download = formScope.querySelector(`#${dataset.download}`);

  fakeUploadInput.value = '';
  fileName.innerText = 'Ainda não há arquivo(s) no servidor';

  if(download) {
    download.disabled = true;
  }

}

export default cleanUploadInput;
