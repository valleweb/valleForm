Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addFieldsValues = require('../fieldsControl/addFieldsValues');

var _addFieldsValues2 = _interopRequireDefault(_addFieldsValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * TODO: Add JSDocs.
 * 
 */

var Modal = function Modal(_ref) {
  var data = _ref.data,
      setModalData = _ref.setModalData,
      baseApi = _ref.baseApi,
      params = _ref.params,
      token = _ref.token,
      setSnackBarStatus = _ref.setSnackBarStatus,
      ValleList = _ref.ValleList,
      $loading = _ref.$loading,
      _id = _ref._id;

  var _useState = (0, _react.useState)({
    currentForm: data.evento.formulario,
    list: data.evento.list,
    id_select: data.evento.id_select
  }),
      _useState2 = _slicedToArray(_useState, 2),
      listData = _useState2[0],
      setListData = _useState2[1];

  var getFormValues = function getFormValues(id_tabela) {

    console.log('id_tabela:');
    console.log(id_tabela);

    var rowData = listData.list.data.filter(function (row) {
      return row[0] == id_tabela;
    });

    console.log('rowData:');
    console.log(rowData);

    var dados = {};

    rowData[0].forEach(function (col, i) {
      dados[listData.list.columns[i].id.toLowerCase()] = col;
    });

    console.log('dados:');
    console.log(dados);

    console.log('_id:');
    console.log(_id);

    (0, _addFieldsValues2['default'])(dados, _id);
    setModalData(null);
  };

  return _react2['default'].createElement(
    'div',
    { className: 'valleForm__modal__backdrop' },
    _react2['default'].createElement(
      'valle-card',
      { 'class': 'valleForm__modal__card' },
      _react2['default'].createElement(
        'div',
        { className: 'valleForm__modal__head' },
        _react2['default'].createElement(
          'h2',
          { className: 'valleForm__modal__heading' },
          data.evento.list.title ? data.evento.list.title : $loading
        ),
        _react2['default'].createElement(
          'button',
          {
            className: 'valleForm__modal__button',
            'aria-label': 'Fechar',
            'data-balloon-pos': 'left',
            onClick: function () {
              function onClick() {
                return setModalData(null);
              }

              return onClick;
            }()
          },
          _react2['default'].createElement(
            'svg',
            {
              className: 'valleForm__modal__icon',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24'
            },
            _react2['default'].createElement(
              'title',
              null,
              ' Fechar '
            ),
            _react2['default'].createElement('path', { d: 'M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z' })
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'valleForm__modal__body' },
        data.evento.list && ValleList ? _react2['default'].createElement(ValleList, {
          columns: listData.list.columns,
          data: listData.list.data,
          footer: listData.list.footer,
          buttons: listData.list.buttons,
          baseApi: baseApi,
          token: token,
          id_select: listData.id_select,
          setSnackBarStatus: setSnackBarStatus,
          params: {
            id_usuario: params.id_usuario,
            identificador: params.identificador,
            cliente_id: params.cliente_id,
            empresa: params.empresa,
            estabelecimento: params.estabelecimento,
            conexao: params.conexao,
            sistema: params.sistema,
            formulario: data.evento.formulario
          },
          getFormValues: getFormValues,
          listData: listData,
          setListData: setListData,
          readOnly: listData.list.readonly
        }) : $loading
      )
    )
  );
};

exports['default'] = Modal;