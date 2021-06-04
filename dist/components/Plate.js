
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * TODO: Add JSDocs
 *
 */

var Plate = function Plate(_ref) {
  var _React$createElement;

  var id = _ref.id,
      readOnly = _ref.readOnly;


  return _react2['default'].createElement(
    'div',
    { className: 'valleForm__plate-container ' + String(!readOnly ? 'valleForm__plate-container--readOnly' : null) },
    _react2['default'].createElement('input', {
      className: 'visual-hidden',
      'data-valle-field': id,
      id: id,
      'data-plate': 'asd'
    }),
    _react2['default'].createElement(
      'div',
      { className: 'valleForm__plate' },
      _react2['default'].createElement(
        'div',
        { className: 'valleForm__plate__header' },
        _react2['default'].createElement(
          'div',
          { className: 'valleForm__plate__header__mercosul' },
          _react2['default'].createElement(
            'svg',
            { svg: 'http://www.w3.org/2000/svg', xmlns: 'http://www.w3.org/2000/svg', version: '1.0', height: '45', width: '100', viewBox: '0 0 417.46362 146.762', id: 'svg2', space: 'preserve' },
            _react2['default'].createElement(
              'g',
              { id: 'g3062' },
              _react2['default'].createElement('rect', { id: '_132032680-0', style: { fill: 'none', stroke: 'none', strokeWidth: 1 }, y: '0', x: '0', height: '40', width: '40' }),
              _react2['default'].createElement('path', { id: '_132032584-0', style: { fill: 'none', stroke: '#00875d', strokeWidth: 2.00200009 }, d: 'M 222.06826,106.67046 C 282.58648,84.023133 343.10489,78.513709 403.62371,85.916226' }),
              _react2['default'].createElement('polygon', { id: '_132032416-2', style: { fill: '#ffffff' }, points: '111.233,31.0675 116.541,29.2244 118.386,23.9164 120.227,29.2244 125.535,31.0678 120.227,32.9105 118.384,38.2185 116.538,32.9105 111.233,31.0675 ', transform: 'matrix(1.0026977,0,0,1.0026977,208.41071,0.2651907)' }),
              _react2['default'].createElement('polygon', { id: '_132031840-0', style: { fill: '#ffffff' }, points: '90.0706,19.0952 95.3786,17.2522 97.224,11.9442 99.0647,17.2522 104.373,19.0956 99.0646,20.9383 97.2215,26.2462 95.3764,20.9383 90.0706,19.0952 ', transform: 'matrix(1.0026977,0,0,1.0026977,208.41071,0.2651907)' }),
              _react2['default'].createElement('polygon', { id: '_132031768-1', style: { fill: '#ffffff' }, points: '72.9627,38.2188 78.2707,36.3758 80.1161,31.0678 81.9568,36.3758 87.2647,38.2192 81.9567,40.0619 80.1136,45.3698 78.2684,40.0619 72.9627,38.2188 ', transform: 'matrix(1.0026977,0,0,1.0026977,208.41071,0.2651907)' }),
              _react2['default'].createElement('polygon', { id: '_9365136-9', style: { fill: '#ffffff' }, points: '97.2816,72.4705 102.612,70.6274 104.521,65.3195 106.298,70.6274 111.584,72.4708 106.253,74.3135 104.346,79.6215 102.565,74.3135 97.2816,72.4705 ', transform: 'matrix(1.0026977,0,0,1.0026977,208.41071,0.2651907)' }),
              _react2['default'].createElement('path', { id: '_132032464-6', style: { fill: '#ffffff' }, d: 'm 327.8691,112.03289 c 2.98825,0 5.47593,1.07148 7.46318,3.21415 1.98274,2.14818 2.97882,4.83741 2.97882,8.0676 0,3.23561 -1.00551,5.9086 -3.00719,8.03001 -2.0062,2.11589 -4.5364,3.17664 -7.58591,3.17664 -2.91254,0 -5.34369,-1.06075 -7.2838,-3.17664 -1.94013,-2.12141 -2.90782,-4.77846 -2.90782,-7.96574 0,-3.27852 0.97713,-5.98369 2.93139,-8.13187 1.95436,-2.14267 4.4232,-3.21415 7.41133,-3.21415 l 0,0 z m 0.1085,2.97851 c -2.20925,0 -4.03125,0.78742 -5.45228,2.35714 -1.42553,1.56943 -2.13825,3.57292 -2.13825,6.01037 0,2.36236 0.71272,4.32835 2.14306,5.89787 1.43056,1.56963 3.21947,2.35704 5.36735,2.35704 2.1572,0 3.95575,-0.80346 5.40023,-2.39985 1.44458,-1.60171 2.16211,-3.59447 2.16211,-5.9837 0,-2.31954 -0.71753,-4.2747 -2.16211,-5.86047 -1.44448,-1.58555 -3.21465,-2.3784 -5.32011,-2.3784 l 0,0 z' }),
              _react2['default'].createElement('polygon', { id: '_142877336-2', style: { fill: '#ffffff' }, points: '38.5697,111.828 41.1178,111.828 41.1178,133.644 38.3641,133.644 38.3641,116.668 32.4732,125.1 31.9683,125.1 26.0214,116.668 26.0214,133.644 23.2818,133.644 23.2818,111.828 25.8578,111.828 32.2301,120.793 38.5697,111.828 ', transform: 'matrix(1.0026977,0,0,1.0026977,208.41071,0.2651907)' }),
              _react2['default'].createElement('path', { id: '_142877456-1', style: { fill: '#ffffff' }, d: 'm 373.20407,112.39486 2.76133,0 0,12.415 c 0,1.68373 -0.10799,2.95024 -0.32357,3.80534 -0.21548,0.86042 -0.4828,1.57123 -0.79695,2.13775 -0.31394,0.57174 -0.70319,1.07951 -1.16252,1.52852 -1.51889,1.49111 -3.50654,2.23932 -5.95834,2.23932 -2.49862,0 -4.50502,-0.743 -6.01448,-2.22328 -0.45943,-0.45954 -0.84387,-0.97282 -1.16262,-1.54456 -0.31405,-0.56652 -0.57666,-1.2667 -0.78281,-2.08962 -0.20626,-0.82301 -0.30953,-2.11649 -0.30953,-3.88014 l 0,-12.38833 2.76123,0 0,12.415 c 0,2.05764 0.20625,3.48989 0.61876,4.29155 0.41251,0.80717 1.0408,1.4485 1.87986,1.93501 0.84387,0.4861 1.83764,0.72665 2.98152,0.72665 1.63129,0 2.95796,-0.48641 3.98462,-1.45371 0.53915,-0.52381 0.9283,-1.13846 1.16734,-1.84907 0.23443,-0.71092 0.35616,-1.92408 0.35616,-3.65043 l 0,-12.415 0,0 z' }),
              _react2['default'].createElement('path', { id: '_142877528-2', style: { fill: '#ffffff' }, d: 'm 348.98893,125.09303 -2.08591,-1.43747 c -1.31274,-0.90865 -2.24074,-1.80646 -2.79873,-2.68833 -0.55319,-0.88198 -0.82974,-1.89721 -0.82974,-3.0463 0,-1.72083 0.52502,-3.1212 1.57504,-4.19549 1.04541,-1.07429 2.40958,-1.61393 4.08318,-1.61393 1.60331,0 3.07056,0.51308 4.41128,1.53913 l 0,3.55416 c -1.38293,-1.51778 -2.87364,-2.27141 -4.46753,-2.27141 -0.89541,0 -1.63139,0.23514 -2.20794,0.71071 -0.57664,0.47578 -0.86734,1.08482 -0.86734,1.82251 0,0.65737 0.21097,1.27743 0.63301,1.84907 0.42183,0.57736 1.10146,1.17577 2.04379,1.80125 l 2.10477,1.41089 c 2.34401,1.58729 3.51596,3.61282 3.51596,6.07134 0,1.75823 -0.51558,3.17975 -1.54696,4.2756 -1.03138,1.09545 -2.36737,1.64593 -4.01751,1.64593 -1.8938,0 -3.61904,-0.66268 -5.17532,-1.98815 l 0,-3.9763 c 1.48118,2.13786 3.197,3.20673 5.14715,3.20673 0.86261,0 1.57984,-0.27253 2.15168,-0.82321 0.57204,-0.54507 0.85802,-1.23452 0.85802,-2.05734 0,-1.33629 -0.84398,-2.59749 -2.5269,-3.78939 l 0,0 z' }),
              _react2['default'].createElement('path', { id: '_142877600-0', style: { fill: '#ffffff' }, d: 'm 312.37643,129.19807 0,3.44196 c -2.01583,1.25568 -4.34098,1.88106 -6.98028,1.88106 -2.14247,0 -3.95655,-0.49172 -5.45197,-1.47507 -1.49081,-0.97803 -2.67209,-2.33017 -3.54404,-4.051 -0.86733,-1.72634 -1.3033,-3.58624 -1.3033,-5.59034 0,-3.18536 0.99387,-5.86277 2.98623,-8.03261 1.99226,-2.16984 4.44877,-3.26017 7.36923,-3.26017 2.01602,0 4.25204,0.60394 6.71787,1.80105 l 0,3.36707 c -2.24554,-1.45894 -4.43944,-2.19131 -6.58181,-2.19131 -2.1939,0 -4.02222,0.79093 -5.47072,2.37288 -1.45321,1.58206 -2.17996,3.55938 -2.17996,5.94309 0,2.39966 0.71723,4.37167 2.14246,5.91622 1.42975,1.54456 3.25817,2.31944 5.48015,2.31944 2.32505,0 4.59877,-0.8176 6.81614,-2.44227 l 0,0 z' }),
              _react2['default'].createElement('path', { id: '_142877672-7', style: { fill: '#ffffff' }, d: 'm 276.19829,134.52039 0,-21.87474 4.80503,0 c 1.94072,0 3.48307,0.55038 4.62223,1.64602 1.13907,1.09564 1.71111,2.57613 1.71111,4.44656 0,1.27203 -0.28126,2.37288 -0.83926,3.3028 -0.5578,0.92999 -1.35936,1.62476 -2.40487,2.08429 0.61415,0.45974 1.21417,1.08512 1.80024,1.87605 0.58588,0.79624 1.4111,2.17515 2.47055,4.15247 0.6703,1.24004 1.20464,2.17525 1.60793,2.80064 l 1.01713,1.56591 -3.26749,0 -0.83896,-1.44308 c -0.0281,-0.048 -0.0844,-0.13888 -0.16414,-0.26181 l -0.53444,-0.86051 -0.85319,-1.5979 -0.91877,-1.7102 c -0.56733,-0.89792 -1.08763,-1.60873 -1.5611,-2.14327 -0.46876,-0.53444 -0.89541,-0.91366 -1.27503,-1.14899 -0.37983,-0.23513 -1.02195,-0.35265 -1.91736,-0.35265 l -0.71262,0 0,9.51841 -2.74699,0 0,0 z m 3.5673,-19.21319 -0.82031,0 0,6.90508 1.0406,0 c 1.39235,0 2.34872,-0.13366 2.86441,-0.4064 0.5203,-0.27233 0.91877,-0.67871 1.20945,-1.2292 0.29058,-0.54507 0.43136,-1.17035 0.43136,-1.87044 0,-0.68955 -0.15943,-1.31462 -0.47829,-1.87063 -0.32326,-0.56121 -0.77348,-0.95125 -1.35474,-1.18108 -0.58126,-0.22992 -1.54235,-0.34733 -2.89248,-0.34733 l 0,0 z' }),
              _react2['default'].createElement('polygon', { id: '_142877768-3', style: { fill: '#ffffff' }, points: '60.2052,112.111 60.2052,114.893 52.0983,114.893 52.0983,121.545 59.9341,121.545 59.9341,124.338 52.0983,124.338 52.0983,131.118 60.467,131.118 60.467,133.894 49.3587,133.894 49.3587,112.111 49.3587,112.111 ', transform: 'matrix(1.0026977,0,0,1.0026977,208.41071,0.2651907)' }),
              _react2['default'].createElement('path', { id: 'path2850', style: { fill: '#ffffff', fillOpacity: 1, stroke: 'none' }, d: 'm 382.58563,112.64593 0,21.87402 11.23528,0 0,-2.74823 -8.48699,0 0,-19.12579 -2.74829,0 z' })
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'valleForm__plate__header__country-name' },
          'BRASIL'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'valleForm__plate__header__flag' },
          _react2['default'].createElement(
            'svg',
            (_React$createElement = { xmlns: 'http://www.w3.org/2000/svg' }, _defineProperty(_React$createElement, 'xmlns', 'http://www.w3.org/1999/xlink'), _defineProperty(_React$createElement, 'height', '31'), _defineProperty(_React$createElement, 'width', '44'), _defineProperty(_React$createElement, 'version', '1.1'), _defineProperty(_React$createElement, 'viewBox', '-2100 -1470 4200 2940'), _React$createElement),
            _react2['default'].createElement(
              'defs',
              null,
              _react2['default'].createElement('path', { id: 'D', 'fill-rule': 'evenodd', d: 'm-31.5 0h33a30 30 0 0 0 30 -30v-10a30 30 0 0 0 -30 -30h-33zm13-13h19a19 19 0 0 0 19 -19v-6a19 19 0 0 0 -19 -19h-19z' }),
              _react2['default'].createElement('path', { id: 'E', transform: 'translate(-31.5)', d: 'm0 0h63v-13h-51v-18h40v-12h-40v-14h48v-13h-60z' }),
              _react2['default'].createElement('path', { id: 'e', d: 'm-26.25 0h52.5v-12h-40.5v-16h33v-12h-33v-11h39.25v-12h-51.25z' }),
              _react2['default'].createElement(
                'g',
                { id: 'G' },
                _react2['default'].createElement(
                  'clipPath',
                  { id: 'gcut' },
                  _react2['default'].createElement('path', { d: 'm-31.5 0v-70h63v70zm31.5-47v12h31.5v-12z' })
                ),
                _react2['default'].createElement('use', { href: '#O', 'clip-path': 'url(#gcut)' }),
                _react2['default'].createElement('rect', { y: '-35', x: '5', height: '10', width: '26.5' }),
                _react2['default'].createElement('rect', { y: '-35', x: '21.5', height: '35', width: '10' })
              ),
              _react2['default'].createElement('path', { id: 'M', d: 'm-31.5 0h12v-48l14 48h11l14-48v48h12v-70h-17.5l-14 48-14-48h-17.5z' }),
              _react2['default'].createElement('path', { id: 'O', 'fill-rule': 'evenodd', d: 'm0 0a31.5 35 0 0 0 0 -70 31.5 35 0 0 0 0 70m0-13a18.5 22 0 0 0 0 -44 18.5 22 0 0 0 0 44' }),
              _react2['default'].createElement('path', { id: 'P', 'fill-rule': 'evenodd', d: 'm-31.5 0h13v-26h28a22 22 0 0 0 0 -44h-40zm13-39h27a9 9 0 0 0 0 -18h-27z' }),
              _react2['default'].createElement(
                'g',
                { id: 'R' },
                _react2['default'].createElement('use', { href: '#P' }),
                _react2['default'].createElement('path', { d: 'm28 0c0-10 0-32-15-32h-19c22 0 22 22 22 32' })
              ),
              _react2['default'].createElement('path', { id: 'S', d: 'm-15.75-22c0 7 6.75 10.5 16.75 10.5s14.74-3.25 14.75-7.75c0-14.25-46.75-5.25-46.5-30.25 0.25-21.5 24.75-20.5 33.75-20.5s26 4 25.75 21.25h-15.25c0-7.5-7-10.25-15-10.25-7.75 0-13.25 1.25-13.25 8.5-0.25 11.75 46.25 4 46.25 28.75 0 18.25-18 21.75-31.5 21.75-11.5 0-31.55-4.5-31.5-22z' }),
              _react2['default'].createElement(
                'g',
                { id: 'star', fill: '#fff' },
                _react2['default'].createElement(
                  'g',
                  { id: 'c' },
                  _react2['default'].createElement('path', { id: 't', transform: 'rotate(18 0,-1)', d: 'm0-1v1h0.5' }),
                  _react2['default'].createElement('use', { href: '#t', transform: 'scale(-1,1)' })
                ),
                _react2['default'].createElement('use', { href: '#c', transform: 'rotate(72)' }),
                _react2['default'].createElement('use', { href: '#c', transform: 'rotate(-72)' }),
                _react2['default'].createElement('use', { href: '#c', transform: 'rotate(144)' }),
                _react2['default'].createElement('use', { href: '#c', transform: 'rotate(216)' })
              )
            ),
            _react2['default'].createElement('rect', { y: '-50%', x: '-50%', height: '100%', fill: '#009b3a', width: '100%' }),
            _react2['default'].createElement('path', { d: 'm-1743 0 1743 1113 1743-1113-1743-1113z', fill: '#fedf00' }),
            _react2['default'].createElement('circle', { r: '735', fill: '#002776' }),
            _react2['default'].createElement(
              'clipPath',
              { id: 'band' },
              _react2['default'].createElement('circle', { r: '735' })
            ),
            _react2['default'].createElement('path', { fill: '#fff', d: 'm-2205 1470a1785 1785 0 0 1 3570 0h-105a1680 1680 0 1 0 -3360 0z', 'clip-path': 'url(#band)' })
          )
        )
      ),
      _react2['default'].createElement('div', { className: 'valleForm__plate__number' }),
      _react2['default'].createElement(
        'div',
        { className: 'valleForm__plate__country' },
        'BR'
      )
    )
  );
};

exports['default'] = Plate;