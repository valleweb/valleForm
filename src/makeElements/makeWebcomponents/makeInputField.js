import React from 'react';
import normalizeCaseProp from '../../helpers/normalizeCaseProp';
import normalizeReadOnly from '../../helpers/normalizeReadOnly';
import normalizeRequired from '../../helpers/normalizeRequired';
import normalizeMask from '../../helpers/normalizeMask';

export default (field, readOnly = false) => {

	const _fetchData = () => {

	}

	// if(field.campo_novo) {

	// } else {

	// }

	const customDescriptionStyle = (field.label == 'Descrição')
		? 'valleForm__input--description'
		: ''

	return (
		<valle-input
			value = { field.value ? field.value : null }
			class = {`valleForm__input ${customDescriptionStyle}`}
			type = { field.type }
			label = { field.label }
			placeholder = { field.placeholder }
			helpertext = { field.helper_text }
			errortext = { field.error_text }
			data-valle-field = { field.id }
			maxlength = { field.maxlength }
			key = { field.id }
			id = { field.id }
			pattern = { field.pattern }
			{ ...normalizeRequired(field.required) }
			{ ...normalizeReadOnly(readOnly ? true : field.readonly) }
			{ ...normalizeCaseProp(field.case) }
			{ ...normalizeMask(field.mask) }
		>
		</valle-input>
	);

};
