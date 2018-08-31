import React from 'react';

export default options => {

	const $options = options.map((option, index) => {
		return <valle-option value = { option.value } key = { index }> { option.text } </valle-option>
	});

	return $options;

}