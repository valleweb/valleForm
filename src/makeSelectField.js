import React from 'react';
import makeOptions from './makeOptions';

export default (field, customClass = '') => {
	return (
		<valle-select 
			class = {`valleForm__select ${customClass}`}
			label = { field.label }
			maxlength = { field.maxlength }
			placeholder = { field.element_options[0].replace(/^;;/,'') } // Normalize the API result
		>

			{makeOptions(field.element_options)}

		</valle-select>
	)
}