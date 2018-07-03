import React from 'react';

export default options => {

	const $options = options.map(option => {
		const [val, txt] = option.split(';;'); // Normalize the API result (split value and text)
		return <valle-option value = { val }> {txt} </valle-option>
	});

	return $options;

}