import React from 'react';
import isSelect from './isSelect';
import makeInputField from './makeInputField';
import makeSelectField from './makeSelectField';

export default rows => rows.map(row => {

	const $fields = row
		.filter(field => field.visible)
		.map(field => isSelect(field.element) ? resolveSelectSize(row, field) : makeInputField(field));

	return <div className="valleForm__row"> {$fields} </div>;

});

const resolveSelectSize = (row, field ) => {
	return (
		(row.length === 1) // Verify if the select is a single field on row.
		? makeSelectField(field, 'valleForm__select--big') 
		: makeSelectField(field)
	)
}