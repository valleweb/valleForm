import React, { useState } from 'react';
import addFieldsValues from '../fieldsControl/addFieldsValues';

/**
 * TODO: Add JSDocs.
 * 
 */

const Modal = ({
  data,
  setModalData,
  baseApi,
  params,
  token,
  setSnackBarStatus,
  ValleList,
  $loading,
  _id,
  setCurrentFilledFields,
}) => {

  const [ listData, setListData ] = useState({
    currentForm: data.evento.formulario,
    list: data.evento.list,
    id_select:  data.evento.id_select
  });

  const getFormValues = id_tabela => {

    console.log('id_tabela:');
    console.log(id_tabela);

   const rowData = listData.list.data.filter(row => {
      return row[0] == id_tabela;
    })

    console.log('rowData:');
    console.log(rowData);

    const dados = {};

    rowData[0].forEach((col, i) => {
      dados[listData.list.columns[i].id.toLowerCase()] = {
        value: col,
        populate: listData.list.columns[i].populate,
      }
    });

    console.log('dados:');
    console.log(dados);

    console.log('_id:');
    console.log(_id);

    console.log('=======================');

    const filteredDados = {};

    Object.keys(dados).forEach(id => {

      if(dados[id].populate) {
        filteredDados[id] = dados[id].value;
      }

    });

    console.log('Dados filtrados:');
    console.log(filteredDados);

    setCurrentFilledFields(filteredDados);

    addFieldsValues(filteredDados, _id);
    setModalData(null);

  }

  return (
    <div className = 'valleForm__modal__backdrop'>

      <valle-card class = 'valleForm__modal__card'>

        { /**
          * Heading.
          * 
          */ }

        <div className = 'valleForm__modal__head'>

          <h2 className = 'valleForm__modal__heading'>
            { data.evento.list.title ? data.evento.list.title : $loading }
          </h2>

          <button
            className = 'valleForm__modal__button'
            aria-label = 'Fechar'
            data-balloon-pos = 'left'
            onClick = { () => setModalData(null) }
          >

            <svg
              className = 'valleForm__modal__icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox="0 0 24 24"
            >
              <title> Fechar </title>
              <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
            </svg>

          </button>

        </div>

        <div className = 'valleForm__modal__body'>

          { data.evento.list && ValleList ? (

            <ValleList
              columns = { listData.list.columns }
              data = { listData.list.data }
              footer = { listData.list.footer }
              buttons = { listData.list.buttons }
              baseApi = { baseApi }
              token = { token }
              id_select = { listData.id_select }
              setSnackBarStatus = { setSnackBarStatus }
              params = { {
                id_usuario: params.id_usuario,
                identificador: params.identificador,
                cliente_id: params.cliente_id,
                empresa: params.empresa,
                estabelecimento: params.estabelecimento,
                conexao: params.conexao,
                sistema: params.sistema,
                formulario: data.evento.formulario,
              } }
              getFormValues = { getFormValues }
              listData = { listData }
              setListData = { setListData }
              readOnly = { listData.list.readonly }
              dados = { data.evento.dados }
            />

          ) : $loading }
  
        </div>
  
      </valle-card>

    </div>

  );

};

export default Modal;