import { nanoid } from 'nanoid';
import cleanUploadInput from '../helpers/cleanUploadInput';

export default (_id, setCleanup) => {

  // -----------
  // TODO: Remove this. Use a React memory reference instead.
  // -----------

  const formScope =  document.getElementById(_id);
  const allFields = formScope.querySelectorAll(`[data-valle-field]`);

  allFields.forEach(field => {

    field.removeAttribute('error');
    field.removeAttribute('data-valle-error');

    if(!field.dataset.hasDefaultValue) {
      field.value = '';
    }

    if(field.dataset.fakeUploadRef) {
      cleanUploadInput(formScope, field.dataset);
    }

  });

  if(setCleanup) {
    setCleanup(nanoid());
  }

}
