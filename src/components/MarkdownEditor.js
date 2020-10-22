import React, { useState, useEffect } from 'react';
import Textarea from './Textarea';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

/**
 * TODO: Add JSDocs
 * 
 */

const MarkdownEditor = ({
  field,
  readOnly = false,
  editable,
  tabErrorCountControls,
  tabIdentifier,
}) => {

  const [markdownText, setMarkdownText] = useState(field.value);
  const [editorShow, setEditorShow] = useState(true);
  const [previewShow, setPreviewShow] = useState(true);
  const [big, setBig] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);

  /**
   * -----
   * 
   */

  const showEditor = () => {
    setEditorShow(true);
    setPreviewShow(false);
  }

  const showPreview = () => {
    setPreviewShow(true);
    setEditorShow(false);
  }

  const showSplit = () => {
    setPreviewShow(true);
    setEditorShow(true);
  }

  const toggleBig = () => {
    setBig(!big);
  }

  /**
   * -----
   * 
   */

  useEffect(() => {
    markdownText
      ? field.value = markdownText
      : field.value = null
  }, [editorShow]);

  /**
   * -----
   * 
   */

  const render = React.createRef();

  useEffect(() => {

    if(render.current) {
      render.current.scroll(0, currentScroll);
    }

  }, [currentScroll]);

  return (
    <div className = {`valleForm__MarkdownEditor ${big ? 'valleForm__MarkdownEditor--big' : ''}`}>

      <div className = 'valleForm__MarkdownEditor__headers'>

        <div className = 'valleForm__MarkdownEditor__slider'>

          <button
            onClick = { showEditor }
            disabled = { !previewShow }
            className = 'valleForm__MarkdownEditor__button valleForm__MarkdownEditor__button--slider'
            aria-label = 'Apenas editor'
            data-balloon-pos = 'up-right'
          >
            <svg
              className = 'valleForm__MarkdownEditor__icon'
              xmlns = 'http://www.w3.org/2000/svg'
              width = '24'
              height = '24'
              viewBox = '0 0 24 24'
            >
              <path d = 'M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z'/>
            </svg>
          </button>

          <button
            onClick = { showPreview }
            disabled = { !editorShow }
            className = 'valleForm__MarkdownEditor__button valleForm__MarkdownEditor__button--slider'
            aria-label = 'Apenas prévia'
            data-balloon-pos = 'up-right'
          >
            <svg
              className = 'valleForm__MarkdownEditor__icon'
              xmlns = 'http://www.w3.org/2000/svg'
              width = '24'
              height = '24'
              viewBox = '0 0 24 24'
            >
              <path d = 'M22 13v-13h-20v24h8.409c4.857 0 3.335-8 3.335-8 3.009.745 8.256.419 8.256-3zm-4-7h-12v-1h12v1zm0 3h-12v-1h12v1zm0 3h-12v-1h12v1zm-2.091 6.223c2.047.478 4.805-.279 6.091-1.179-1.494 1.998-5.23 5.708-7.432 6.881 1.156-1.168 1.563-4.234 1.341-5.702z'/>
            </svg>
          </button>

          <button
            onClick = { showSplit }
            disabled = { previewShow && editorShow }
            className = 'valleForm__MarkdownEditor__button valleForm__MarkdownEditor__button--slider'
            aria-label = 'Editor e prévia'
            data-balloon-pos = 'up-right'
          >
            <svg
              className = 'valleForm__MarkdownEditor__icon'
              xmlns = 'http://www.w3.org/2000/svg'
              width = '24'
              height = '24'
              viewBox = '0 0 24 24'
            >
              <path d = 'M18 6v-6h-18v18h6v6h18v-18h-6zm-16 10v-14h14v4h-10v10h-4z'/>
            </svg>
          </button>

        </div>

        <button
          onClick = { toggleBig }
          className = 'valleForm__MarkdownEditor__button valleForm__MarkdownEditor__button--toggle'
          aria-label = {`${big ? 'Diminuir' : 'Aumentar'} área de texto`}
          data-balloon-pos = 'down-right'
        >
          <svg
            className = 'valleForm__MarkdownEditor__icon'
            xmlns = 'http://www.w3.org/2000/svg'
            width = '24'
            height = '24'
            viewBox = '0 0 24 24'
          >
            <path d='M24 0v10.999l-3.379-3.378-4.379 4.379-4.242-4.242 4.379-4.379-3.379-3.379h11zm-11.875 16.138l-4.242-4.242-4.504 4.483-3.379-3.378v10.999h11l-3.379-3.379 4.504-4.483z'/>
          </svg>
        </button>

      </div>

      <div className = 'valleForm__MarkdownEditor__body'>

        { editorShow ? (

          <div className = {`valleForm__MarkdownEditor__editor ${ !previewShow ? 'valleForm__MarkdownEditor__editor--full' : ''}`}>
            <Textarea
              field = { field }
              readOnly = { readOnly }
              editable = { editable }
              tabErrorCountControls = { tabErrorCountControls }
              tabIdentifier = { tabIdentifier }
              onChange = { e => setMarkdownText(e.target.value) }
              onScroll = { e => setCurrentScroll(e.target.scrollTop) }
            />
          </div>

        ) : null }

        { previewShow ? (

          <div className = {`valleForm__MarkdownEditor__preview ${ !editorShow ? 'valleForm__MarkdownEditor__preview--full' : ''}`}>

            <div className = 'valleForm__MarkdownEditor__label'>
              { field.label } (Prévia)
            </div>

            <div className = 'valleForm__MarkdownEditor__render' ref = { render }>

              <ReactMarkdown plugins = {[gfm]} className = 'markdown-render'>
                { markdownText }
              </ReactMarkdown>

            </div>

          </div>

        ) : null }

      </div>

      {
        !editorShow && previewShow ? (
          <input
            value = { markdownText }
            id = { field.id }
            className = 'visual-hidden'
          />
        ) : null
      }

    </div>
  );

}

export default MarkdownEditor;