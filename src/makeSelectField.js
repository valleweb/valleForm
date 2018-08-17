import React from 'react';
import makeOptions from './makeOptions';
import normalizeFieldName from './normalizeFieldName';
import normalizeReadOnly from './normalizeReadOnly';
import normalizeRequired from './normalizeRequired';

export default (field, customClass = '', readOnly = false) => {

	const [val, txt] = field.element_options[0].split(';;'); // Normalize the API result (split value and text)

	return (
		<valle-select 
			class = {`valleForm__select ${customClass}`}
			label = { field.label }
			data-valle-field = { normalizeFieldName(field.name) }
			maxlength = { field.maxlength }
			placeholder = { txt }
			value = { field.value }
			{ ...normalizeRequired(field.required) }
			{ ...normalizeReadOnly(readOnly) }
		>

			{makeOptions(field.element_options)}

		</valle-select>
	)
}