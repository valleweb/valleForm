import React from 'react';
import normalizeCaseProp from '../../helpers/normalizeCaseProp';
import normalizeReadOnly from '../../helpers/normalizeReadOnly';
import normalizeRequired from '../../helpers/normalizeRequired';
import normalizeMask from '../../helpers/normalizeMask';

export default (field, readOnly = false, editable, token, _id) => {

  const _fetchData = () => {
    console.log('blur');
  }

  // if(field.campo_novo) {

  // } else {

  // }

  let isDisabled;
    
  if(editable) { // Verify editable mode
    isDisabled = readOnly ? true : (field.is_PK || field.readonly);
  } else {
    isDisabled = readOnly ? true : field.readonly;
  }

  const customDescriptionStyle = (field.label == 'Descrição')
    ? 'valleForm__input--description'
    : ''

  const $search = (
    <button
      className = { `valleForm__input__button ${isDisabled ? 'valleForm__input__button--disabled' : ''}` }
      disabled = { isDisabled }
    >

      <svg className="valleForm__input__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/>
      </svg>

    </button>
  )

  let isFindAction;

  if (Array.isArray(field.actions)) {

    field.actions.forEach(current => {
      if(current.action == 'find' || current.action == 'exact_blur') isFindAction = true
    });

  }

  return (
    <span className = 'valleForm__input__container' key = { `${_id}_${field.id}` }>

      <valle-input
        value = { field.value ? field.value : null }
        class = {`valleForm__input ${customDescriptionStyle}`}
        type = { field.type }
        label = { field.label }
        placeholder = { field.placeholder }
        helpertext = { field.helper_text }
        errortext = { field.error_text }
        data-valle-field = { `${_id}_${field.id}` }
        maxlength = { field.maxlength }
        id = { `${_id}_${field.id}` }
        onBlur = { _fetchData }
        pattern = { field.pattern }
        { ...normalizeRequired(field.required) }
        { ...normalizeReadOnly(isDisabled) }
        { ...normalizeCaseProp(field.case) }
        { ...normalizeMask(field.mask) }
      >
      </valle-input>

      { isFindAction ? $search : null} 

    </span>
  );

};
