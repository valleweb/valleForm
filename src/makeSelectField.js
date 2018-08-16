import React from 'react';
import makeOptions from './makeOptions';
import normalizeFieldName from './normalizeFieldName';

export default (field, customClass = '') => {

	const [val, txt] = field.element_options[0].split(';;'); // Normalize the API result (split value and text)

	return (
		<valle-select 
			class = {`valleForm__select ${customClass}`}
			label = { field.label }
			data-valle-field = { normalizeFieldName(field.name) }
			maxlength = { field.maxlength }
			placeholder = { txt }
		>

			{makeOptions(field.element_options)}

		</valle-select>
	)
}