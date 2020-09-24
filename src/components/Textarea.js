import React, { useState, useEffect } from 'react';

const Textarea = ({
  field,
  readOnly = false,
  error = false,
  editable
}) => {

  const [err, setErr] = useState(error);

  // --------------
  // Control readOnly sate in editable mode
  // -------------

  let isDisabled;

  if(editable) {
    isDisabled = readOnly ? true : field.is_PK;
  } else {
    isDisabled = readOnly;
  }

  // --------------
  // Global required validation
  // -------------

  const textAreaRef = React.createRef();

  useEffect(() => {

    const textArea = textAreaRef.current;
    (textArea.dataset.valleError === 'true') ? setErr(true) : setErr(false) 

  });

  // --------------
  // Custom UI
  // -------------
      
  const errorStyle = err ? 'valleForm__textarea--error' : '';
  const disabledStyle = isDisabled ? 'valleForm__textarea--disabled' : '';

  let $description = !err
    ? (
      <small id="description" className="valleForm__textarea__description">
        { field.helper_text }
      </small>
    ) : (
      <span role="alert" id="description" className="valleForm__textarea__description">
        { field.error_text }
      </span>
    )

  // --------------
  // Individual validation
  // -------------

  const validate = () => {

    if (field.required) {
      const textArea = textAreaRef.current;
      return textArea.value ? setErr(false) : setErr(true)
    }
    
  }

  return (
    <span className = { `valleForm__textarea ${disabledStyle} ${errorStyle}`} key = { field.id }>

      { field.description ? (

        <span
          className = "tooltip"
          role = "tooltip"
          aria-label = { field.description }
          tabindex = "0"
          data-balloon-pos="up-right"
          data-balloon-length="large"
        >

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px">
            <path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>

          <small className="visual-hidden">
            { field.description }
          </small>

        </span>

      ) : null }

      <textarea
        className = "valleForm__textarea__input"
        placeholder = { field.placeholder }
        data-valle-field = { `${field.id}` }
        id = { `${field.id}` }
        disabled = { isDisabled }
        onBlur = { validate }
        ref = { textAreaRef }
        data-valle-error = { err }
        data-valle-required = { field.required }
      >
        { field.value ? field.value : null }
      </textarea>

      <label id="inputLabel" className="valleForm__textarea__label">
        { field.label}
        { field.required ? ' *' : null }
      </label>

      { $description }

    </span>
  );

}

export default Textarea;
