import React from 'react';
import makeInputField from './makeInputField';
import isSelect from './isSelect';
import makeSelectField from './makeSelectField';

export default rows => rows.map(row => {

	const $fields = row
										.filter(field => field.visible)
										.map(field => isSelect(field.element) ? makeSelectField(field) : makeInputField(field));

	return <div> { $fields } </div>;

});