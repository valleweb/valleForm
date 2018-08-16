import React from 'react';
import normalizeCaseProp from './normalizeCaseProp';
import normalizeFieldName from './normalizeFieldName';
import normalizeReadOnly from './normalizeReadOnly';

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
			value = { field.value }
			data-valle-field = { normalizeFieldName(field.name) }
			maxlength = { field.maxlength }
			{ ...normalizeReadOnly(readOnly) }
			{ ...normalizeCaseProp(field.case) }
		>
		</valle-input>
	);

};
