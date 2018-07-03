import React from 'react';
import normalizeCaseProp from './normalizeCaseProp';

export default field => {
	return (
		<valle-input
		type="text"
			label = { field.id }
			{ ...normalizeCaseProp(field.case) }
		></valle-input>

	);
};
