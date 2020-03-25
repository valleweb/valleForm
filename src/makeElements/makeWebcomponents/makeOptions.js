import React from 'react';
import shortid from 'shortid';

export default options => {

	const $options = options.map((option, index) => {
		return <valle-option value = { option.value } key = { shortid.generate() }>{ option.text }</valle-option>
	});

	return $options;

}