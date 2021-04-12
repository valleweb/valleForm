import React, { useState } from 'react';
import normalizeCaseProp from '../../helpers/normalizeCaseProp';
import normalizeReadOnly from '../../helpers/normalizeReadOnly';
import normalizeRequired from '../../helpers/normalizeRequired';
import normalizeMask from '../../helpers/normalizeMask';
import SearchButton from '../../components/SearchButton';
import apiValidations from '../../rest/apiValidations';
import Modal from '../../components/Modal';

export default ({
  field,
  readOnly = false,
  editable,
  token,
  _id,
  baseApi,
  params,
  setSnackBarStatus,
  ValleList,
  $loading,
  tabErrorCountControls,
  tabIdentifier,
  debug,
}) => {

  /**
   * -----
   *
   */

  const [ modalData, setModalData ] = useState(null);
  const [ currentFilledFields, setCurrentFilledFields ] = useState(null);

  /**
   * -----
   *
   */

  const validadeField = (field, action) => {
    apiValidations(
      baseApi,
      token,
      params,
      field,
      action,
      _id,
      setModalData,
      setSnackBarStatus,
      currentFilledFields,
    );
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

  let is_exists_blur;
  let is_exact_blur;
  let is_find;

  if (Array.isArray(field.actions)) {

    field.actions.forEach(current => {
      currentAction = current.action;
      if (current.action === 'exists_blur') is_exists_blur = true;
      if (current.action === 'exact_blur') is_exact_blur = true;
      if (current.action === 'find') is_find = true;
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
        data-has-default-value = { field.value ? true : null }
        class = { `valleForm__input ${customDescriptionStyle}` }
        type = { field.type }
        label = { field.label }
        placeholder = { field.placeholder }
        helpertext = { field.helper_text }
        errortext = { field.error_text }
        data-valle-field = { `${field.id}` }
        maxlength = { field.maxlength }
        id = { `${field.id}` }
        data-tabidentifier = { tabIdentifier }
        onBlur = { e => {

          if(is_exists_blur) validadeField(field, 'exists_blur');
          if(is_exact_blur) validadeField(field, 'exact_blur');

          /**
           * -----
           *
           */

          const currentElement = e.target; // Save the element reference

          setTimeout(() => { // Await the webcomponent blur event

            currentElement.error
              ? tabErrorCountControls.add(tabIdentifier, field.id)
              : tabErrorCountControls.remove(tabIdentifier, field.id)

          }, 100);

        } }
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
        is_find ? (
          <SearchButton
            isDisabled = { isDisabled }
            onClick = { () => validadeField(field, 'find') }
          />
        ) : null
      }

      {
        modalData ? (
          <Modal
            data = { modalData }
            setModalData = { setModalData }
            baseApi = { baseApi }
            params = { params }
            token = { token }
            setSnackBarStatus = { setSnackBarStatus }
            ValleList = { ValleList }
            $loading = { $loading }
            _id = { _id }
            setCurrentFilledFields = { setCurrentFilledFields }
            debug = { debug }
          />
        ) : null
      }

    </span>
  );

};
