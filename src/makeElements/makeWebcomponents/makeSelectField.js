import React from 'react';
import makeOptions from './makeOptions';
import normalizeReadOnly from '../../helpers/normalizeReadOnly';
import normalizeRequired from '../../helpers/normalizeRequired';

export default (
  field, customClass = '',
  readOnly = false,
  editable,
  token,
  _id,
  tabErrorCountControls,
  tabIdentifier,
) => {

  let isDisabled;

  if(editable) { // Verify editable mode
    isDisabled = readOnly ? true : (field.is_PK || field.readonly);
  } else {
    isDisabled = readOnly ? true : field.readonly;
  }

  return (
    <valle-select
      value = { field.value ? field.value : null }
      class = {`valleForm__select ${customClass}`}
      label = { field.label }
      data-valle-field = { `${field.id}` }
      placeholder = { field.placeholder }
      helpertext = { field.helper_text }
      errortext = { field.error_text }
      key = { `${_id}_${field.id}` }
      id = { `${field.id}` }
      tooltip = { field.description }
      tooltippos = 'top-right'
      tooltiplength = 'large'
      { ...normalizeRequired(field.required) }
      { ...normalizeReadOnly(isDisabled) }
      onBlur = { e => {

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
    >

      { makeOptions(field.options) }

    </valle-select>
  )
}
