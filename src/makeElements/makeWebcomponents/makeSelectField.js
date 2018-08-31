import React from 'react';
import makeOptions from './makeOptions';
import normalizeReadOnly from '../../helpers/normalizeReadOnly';
import normalizeRequired from '../../helpers/normalizeRequired';

export default (field, customClass = '', readOnly = false) => {

	return (
		<valle-select
			class = {`valleForm__select ${customClass}`}
			label = { field.label }
			data-valle-field = { field.id }
			placeholder = { field.placeholder }
			helpertext = { field.helper_text }
			errortext = { field.error_text }
			key = { field.id }
			id = { field.id }
			{ ...normalizeRequired(field.required) }
			{ ...normalizeReadOnly(readOnly ? true : field.readonly) }
		>

			{ makeOptions(field.options) }

		</valle-select>
	)
}
