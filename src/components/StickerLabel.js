import React from 'react';

/**
 * TODO: Add JSDocs
 *
 */

const StickerLabel = ({ readOnly, editable, search = false }) => {

  let state, text;

  if (search) {
    state = 'search'
    text = 'Pesquisar'
  } else if (!readOnly && !editable) {
    state = 'add'
    text = 'Inserir'
  } else if (readOnly && !editable) {
    state = 'view'
    text = 'Visualizar'
  } else if (!readOnly && editable) {
    state = 'edit'
    text = 'Editar'
  }

  return (
    <div className = "valleForm__mode-label-wrapper">
      <div className = { `valleForm__mode-label valleForm__mode-label--${state}` }>
        { text }
      </div>
    </div>
  );

}

export default StickerLabel;
