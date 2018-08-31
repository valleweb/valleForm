import React from 'react';
import isSelect from './isSelect';
import makeInputField from './makeInputField';
import makeSelectField from './makeSelectField';

export default (
	rows, 
	filterByVisibleScreen = false, 
	readOnly = false) => rows.map((row, index) => {

	const $fields = row
		.filter(field => isVisibleScreen(field, filterByVisibleScreen))
		.map(field => isSelect(field.element) ? resolveSelectSize(row, field, readOnly) : makeInputField(field, readOnly));

	return <div className="valleForm__row" key = { index }> {$fields} </div>;

});

const isVisibleScreen = (field, filterByVisibleScreen) => {
	return filterByVisibleScreen ? field.visible_screen : true
}

const resolveSelectSize = (row, field, readOnly = false) => {
	return (
		(row.length === 1) // Verify if the select is a single field on row.
		? makeSelectField(field, 'valleForm__select--big', readOnly) 
		: makeSelectField(field, '', readOnly)
	)
}