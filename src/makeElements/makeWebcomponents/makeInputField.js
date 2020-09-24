import React from 'react';
import normalizeCaseProp from '../../helpers/normalizeCaseProp';
import normalizeReadOnly from '../../helpers/normalizeReadOnly';
import normalizeRequired from '../../helpers/normalizeRequired';
import normalizeMask from '../../helpers/normalizeMask';
import SearchButton from '../../components/SearchButton';
import apiValidations from '../../rest/apiValidations';

export default (
  field,
  readOnly = false,
  editable,
  token,
  _id,
  baseApi,
  params,
  ) => {

  /**
   * -----
   * 
   */

  const validadeField = (field, action) => {
    apiValidations(baseApi, token, params, field, action, _id);
  }

  /**
   * Verify editable mode
   * 
   */

  let isDisabled;

  if(editable) {
    isDisabled = readOnly ? true : (field.is_PK || field.readonly);
  } else {
    isDisabled = readOnly ? true : field.readonly;
  }

  /**
   * -----
   * 
   */

  const customDescriptionStyle = (field.label == 'Descrição')
    ? 'valleForm__input--description'
    : ''

  /**
   * Find current action
   * 
   */

  let currentAction;

  if (Array.isArray(field.actions)) {

    field.actions.forEach(current => {
      currentAction = current.action;
    });

  }

  /**
   * -----
   * 
   */

  return (
    <span
      className = 'valleForm__input__container'
      key = { `${_id}_${field.id}` }
    >

      <valle-input
        value = { field.value ? field.value : null }
        class = { `valleForm__input ${customDescriptionStyle}` }
        type = { field.type }
        label = { field.label }
        placeholder = { field.placeholder }
        helpertext = { field.helper_text }
        errortext = { field.error_text }
        data-valle-field = { `${field.id}` }
        maxlength = { field.maxlength }
        id = { `${field.id}` }
        onBlur = { () => currentAction ? validadeField(field, currentAction) : null }
        pattern = { field.pattern }
        tooltip = { field.description }
        tooltippos = 'top-right'
        tooltiplength = 'large'
        { ...normalizeRequired(field.required) }
        { ...normalizeReadOnly(isDisabled) }
        { ...normalizeCaseProp(field.case) }
        { ...normalizeMask(field.mask) }
      >
      </valle-input>

      {
        (currentAction === 'exact_blur' || currentAction === 'find')
          ? <SearchButton isDisabled = { isDisabled } />
          : null
      }

    </span>
  );

};
