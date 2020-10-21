import React from 'react';
import isSelect from '../helpers/isSelect';
import MakeInputField from './makeWebcomponents/MakeInputField';
import makeSelectField from './makeWebcomponents/makeSelectField';
import Textarea from '../components/Textarea';
import MarkdownEditor from '../components/MarkdownEditor';

export default (
  rows, 
  filterByVisibleScreen = false, 
  readOnly = false,
  editable,
  token,
  _id,
  baseApi,
  params,
  setSnackBarStatus,
  ValleList,
  $loading,
  tabErrorCountControls,
  tabIdentifier,
  ) => rows.map((row, index) => {

  const $fields = row
    .filter(field => isVisibleScreen(field, filterByVisibleScreen))
    .map(field => {

      // --------------
      // Resolve react component
      // --------------

      if(field.element === 'textarea') {

        // --------------
        // Custom markdown editor
        // --------------

        if(field.type === 'markdown') {
          return (
            <MarkdownEditor
              key = { index }
              field = { field }
              readOnly = { readOnly }
              editable = { editable }
              tabErrorCountControls = { tabErrorCountControls }
              tabIdentifier = { tabIdentifier }
            />
          );
        }

        return (
          <Textarea
            key = { index }
            field = { field }
            readOnly = { readOnly }
            editable = { editable }
            tabErrorCountControls = { tabErrorCountControls }
            tabIdentifier = { tabIdentifier }
          />
        );

      }

      // --------------
      // Resolve form webcomponents
      // --------------

      return isSelect(field.element) 
        ? resolveSelectSize(row, field, readOnly, editable, token, _id, tabErrorCountControls, tabIdentifier)
        : (
            <MakeInputField 
              field = { field }
              readOnly = { readOnly }
              editable = { editable }
              token = { token }
              _id = { _id }
              baseApi = { baseApi }
              params = { params }
              setSnackBarStatus = { setSnackBarStatus }
              ValleList = { ValleList }
              $loading = { $loading }
              tabErrorCountControls = { tabErrorCountControls }
              tabIdentifier = { tabIdentifier }
            />
          );

    })

    return $fields.length ? (
      <div
        className = 'valleForm__row'
        key = { index }
      >
        {$fields}
      </div>
    ) : null;

});

const isVisibleScreen = (field, filterByVisibleScreen) => {
  return filterByVisibleScreen ? field.visible_screen : true
}

const resolveSelectSize = (row, field, readOnly = false, editable, token, _id, tabErrorCountControls, tabIdentifier) => {
  return (
    (row.length === 1) // Verify if the select is a single field on row.
    ? makeSelectField(field, 'valleForm__select--big', readOnly, editable, null, _id, tabErrorCountControls, tabIdentifier)
    : makeSelectField(field, '', readOnly, editable, token, _id, tabErrorCountControls, tabIdentifier)
  )
}