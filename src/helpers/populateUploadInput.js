const populateUploadInput = (formScope, dataset, fileNameText) => {

  const fileName = formScope.querySelector(`#${dataset.uploadFileNameRef}`);
  const download = formScope.querySelector(`#${dataset.download}`);

  fileName.innerText = fileNameText;

  if(fileNameText && download) {
    download.disabled = false;
    download.dataset.pathTarget = fileNameText
  }

}

export default populateUploadInput;
