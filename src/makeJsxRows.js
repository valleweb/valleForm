import React from 'react';
import isSelect from './isSelect';
import makeInputField from './makeInputField';
import makeSelectField from './makeSelectField';

export default (rows, filterByVisibleScreen = false) => rows.map(row => {

	const $fields = row
		.filter(field => field.visible)
		.filter(field => isVisibleScreen(field, filterByVisibleScreen))
		.map(field => isSelect(field.element) ? resolveSelectSize(row, field) : makeInputField(field));

	return <div className="valleForm__row"> {$fields} </div>;

});

const isVisibleScreen = (field, filterByVisibleScreen) => {
	return filterByVisibleScreen ? field.visible_screen : true
}

const resolveSelectSize = (row, field ) => {
	return (
		(row.length === 1) // Verify if the select is a single field on row.
		? makeSelectField(field, 'valleForm__select--big') 
		: makeSelectField(field)
	)
}