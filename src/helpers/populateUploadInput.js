const populateUploadInput = (formScope, dataset, fileNameText) => {

  const fileName = formScope.querySelector(`#${dataset.uploadFileNameRef}`);
  fileName.innerText = fileNameText;

}

export default populateUploadInput;
