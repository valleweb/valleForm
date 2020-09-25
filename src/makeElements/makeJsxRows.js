import React from 'react';
import isSelect from '../helpers/isSelect';
import makeInputField from './makeWebcomponents/makeInputField';
import makeSelectField from './makeWebcomponents/makeSelectField';
import Textarea from '../components/Textarea';

export default (
  rows, 
  filterByVisibleScreen = false, 
  readOnly = false,
  editable,
  token,
  _id,
  baseApi,
  params,
  showFeedback,
  setSnackBarStatus,
  ValleList,
  $loading,
  ) => rows.map((row, index) => {

  const $fields = row
    .filter(field => isVisibleScreen(field, filterByVisibleScreen))
    .map(field => {

      // --------------
      // Resolve react component
      // --------------

      if(field.element === 'textarea') {
        return (
          <Textarea
            key = { index }
            field = { field }
            readOnly = { readOnly }
            editable = { editable }
          />
        )
      }

      // --------------
      // Resolve form webcomponents
      // --------------

      return isSelect(field.element) 
      ? resolveSelectSize(row, field, readOnly, editable, token, _id)
      : makeInputField(field, readOnly, editable, token, _id, baseApi, params, showFeedback, setSnackBarStatus, ValleList, $loading)

    })

  return <div className="valleForm__row" key = { index }>{$fields}</div>;

});

const isVisibleScreen = (field, filterByVisibleScreen) => {
  return filterByVisibleScreen ? field.visible_screen : true
}

const resolveSelectSize = (row, field, readOnly = false, editable, token, _id) => {
  return (
    (row.length === 1) // Verify if the select is a single field on row.
    ? makeSelectField(field, 'valleForm__select--big', readOnly, editable, null, _id)
    : makeSelectField(field, '', readOnly, editable, token, _id)
  )
}