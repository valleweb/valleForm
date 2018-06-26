import React from 'react';
import normalizeCaseProp from './normalizeCaseProp';

export default field => {
	return (
		<input
			placeholder = { field.id }
			{ ...normalizeCaseProp(field.case) }
		/>
	)
};