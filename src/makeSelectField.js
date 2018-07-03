import React from 'react';

export default (field, customClass = '') => {
	return (
		<valle-select 
			class = {`valleForm__select ${customClass}`}
			label = { field.label }
			maxlength ={ field.maxlength }
		>
			<valle-option value="dsdsd">dssd</valle-option>
		</valle-select>
	)
}