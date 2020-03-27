import React, { useEffect } from 'react';
import makeOptions from './makeOptions';
import normalizeReadOnly from '../../helpers/normalizeReadOnly';
import normalizeRequired from '../../helpers/normalizeRequired';

export default (field, customClass = '', readOnly = false, editable) => {

	//let select = React.createRef();

	//useEffect(() => {
  //    select.current.value = field.value;
	//}, [])


	let isDisabled;
	
	if(editable) { // Verify editable mode
		isDisabled = readOnly ? true : (field.is_PK || field.readonly);
	} else {
		isDisabled = readOnly ? true : field.readonly;
	}
	
	return (
		<valle-select
			// ref = { select }
			value = { field.value ? field.value : null }
			class = {`valleForm__select ${customClass}`}
			label = { field.label }
			data-valle-field = { field.id }
			placeholder = { field.placeholder }
			helpertext = { field.helper_text }
			errortext = { field.error_text }
			key = { field.id }
			id = { field.id }
			{ ...normalizeRequired(field.required) }
			{ ...normalizeReadOnly(isDisabled) }
		>

			{ makeOptions(field.options) }

		</valle-select>
	)
}
