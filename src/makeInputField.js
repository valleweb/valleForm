import React from 'react';
import normalizeCaseProp from './normalizeCaseProp';
import normalizeFieldName from './normalizeFieldName';
import normalizeReadOnly from './normalizeReadOnly';
import normalizeRequired from './normalizeRequired';

export default (field, readOnly = false) => {

	const _fetchData = () => {

	}

	// if(field.campo_novo) {

	// } else {

	// }

	return (
		<valle-input
			class = "valleForm__input"
			type = "text"
			label = { field.label }
			data-valle-field = { normalizeFieldName(field.name) }
			type = { field.type.toLowerCase() }
			maxlength = { field.maxlength }
			key = { field.id }
			id = { field.id }
			pattern = { field.pattern == ' ' ? null : field.pattern }
			{ ...normalizeRequired(field.required) }
			{ ...normalizeReadOnly(readOnly) }
			{ ...normalizeCaseProp(field.case) }
		>
		</valle-input>
	);

};
