webpackJsonp([0],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rmc_tabs_assets_index_less__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rmc_tabs_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rmc_tabs_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src__ = __webpack_require__(39);






/* tslint:disable:no-console */




var tabData = [{ title: 'title 1' }, { title: 'title 2' }, { title: 'title 3' }, { title: 'title 4' }, { title: 'title 5' }, { title: 'title 6' }, { title: 'title 7' }, { title: 'title 8' }, { title: 'title 9' }];

var BasicDemo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(BasicDemo, _React$Component);

    function BasicDemo(props) {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, BasicDemo);

        var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BasicDemo.__proto__ || Object.getPrototypeOf(BasicDemo)).call(this, props));

        _this.state = {
            scData: JSON.stringify({ index: 0, tab: { title: 't1' } }),
            scData2: JSON.stringify({ index: 0, tab: { title: 't1' } }),
            dynamicTabs: []
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(BasicDemo, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var baseStyle = {
                display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 14
            };
            return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    'div',
                    { style: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, baseStyle) },
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                        'h2',
                        null,
                        'normal'
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_9__src__["a" /* Tabs */],
                        { tabs: tabData, onChange: function onChange(tab, index) {
                                _this2.setState({
                                    scData: JSON.stringify({ index: index + Math.random(), tab: tab })
                                });
                            }, renderTabBar: function renderTabBar(props) {
                                return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src__["b" /* DefaultTabBar */], props);
                            } },
                        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                            'div',
                            { style: { padding: 10, background: '#ADFFD7' } },
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                this.state.scData
                            ),
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                        'h2',
                        null,
                        'page'
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_9__src__["a" /* Tabs */],
                        { tabs: tabData, onChange: function onChange(tab, index) {
                                _this2.setState({
                                    scData2: JSON.stringify({ index: index + Math.random(), tab: tab })
                                });
                            }, renderTabBar: function renderTabBar(props) {
                                return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src__["b" /* DefaultTabBar */], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, props, { page: 4 }));
                            } },
                        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                            'div',
                            { style: { padding: 10, background: '#ADFFD7' } },
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                this.state.scData2
                            ),
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                        'h2',
                        null,
                        'add page'
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                        'div',
                        { style: { background: '#eee', boxShadow: '0 0 0 5px #eee', margin: 10, padding: 10 }, onClick: function onClick() {
                                _this2.setState({
                                    dynamicTabs: [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this2.state.dynamicTabs), [{ title: 'title-' + _this2.state.dynamicTabs.length + 1 }])
                                });
                            } },
                        'add page'
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_9__src__["a" /* Tabs */],
                        { tabs: this.state.dynamicTabs, onChange: function onChange(tab, index) {
                                _this2.setState({
                                    scData2: JSON.stringify({ index: index + Math.random(), tab: tab })
                                });
                            }, renderTabBar: function renderTabBar(props) {
                                return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src__["b" /* DefaultTabBar */], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, props, { page: 3 }));
                            } },
                        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                            'div',
                            { style: { padding: 10, background: '#ADFFD7' } },
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                this.state.scData2
                            ),
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            ),
                            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                                'p',
                                null,
                                'single content'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BasicDemo;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(BasicDemo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(162), __esModule: true };

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(151);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
__webpack_require__(192);
module.exports = __webpack_require__(7).Array.from;


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(61);
var TAG = __webpack_require__(17)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(23);
var createDesc = __webpack_require__(41);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(40);
var ITERATOR = __webpack_require__(17)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(30);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(17)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(174);
var ITERATOR = __webpack_require__(17)('iterator');
var Iterators = __webpack_require__(40);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(62);
var $export = __webpack_require__(21);
var toObject = __webpack_require__(50);
var call = __webpack_require__(180);
var isArrayIter = __webpack_require__(178);
var toLength = __webpack_require__(104);
var createProperty = __webpack_require__(175);
var getIterFn = __webpack_require__(191);

$export($export.S + $export.F * !__webpack_require__(182)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);


/***/ })

},[313]);
//# sourceMappingURL=scroll-tab.js.map