import React from 'react';
import normalizeCaseProp from './normalizeCaseProp';

export default field => {

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
			maxlength = { field.maxlength }
			{ ...normalizeCaseProp(field.case) }
		>
		</valle-input>
	);

};
