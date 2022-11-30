(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/pagination */ "./assets/js/pagination.js");
/* harmony import */ var _js_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_apex_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/apex-charts */ "./assets/js/apex-charts.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application

 //adds functions to jquery




console.log("Webpack working!!!");

// global.$ = $; 
// Not needed unless we have Jquery in templates and need global $

// import Chart from 'chart.js';

// const data = [10, -20, 40, -30, 0, 55, -60];
//     var colours = data.map((value) => value < 0 ? 'red' : 'green');
//     var options = {
//         responsive:true,
//         maintainAspectRatio: false,
//         legend: { display: false },
//         scales: {
//             xAxes: [{
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Date'
//                 },
//                 gridLines: {
//                     display: true,
//                     drawBorder: true,
//                     drawOnChartArea: false
//                 },
//                 ticks: {    

//                 },             
//             }],
//             yAxes: [{
//                 gridLines: {
//                     display: true,
//                     drawBorder: true,
//                     drawOnChartArea: true
//                 },
//                 ticks: {

//                 },
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'PNL'
//                 },
//             }]
//         }
//     }

//     new Chart(
//         document.getElementById('acquisitions'),
//         {
//         type: 'bar',
//         options: options,
//         data: {
//             labels: ["01/11", "02/11", "03/11", "04/11", "05/11", "06/11", "07/11"],
//             datasets: [
//             {
//                 label: 'Past 7 days',
//                 data: data,
//                 borderColor: colours,
//                 backgroundColor: colours
//             }
//             ]
//         }
//         }
//     );

console.log("Webpack working!!!");

// $("#tester").click(function() {
//     console.log(1234)
//     //$(".table-card").fadeOut(50000); //if there are other elements in this div you want to preserve, keep in mind this will remove those too.
//     $('.table-card').fadeOut(500, function() {
//         $(".table-card").html('<h5 class="card-title">Edit Trade</h5>').fadeIn(500);
//     });

// });

// $("#tester").on( "click", function() {
//     console.log( 123 );
// });
// $('delete-button').confirmButton({
//     confirm
// })

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/apex-charts.js":
/*!**********************************!*\
  !*** ./assets/js/apex-charts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_17__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _options;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


















function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = "w" + (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}
var options = {
  series: [{
    name: 'Cash Flow',
    data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -25.16, -30.1, -20, -15, -10, -5, 5.8, 2, 3.37, -5.1, -3.57, 5.75, 7.1, 9.8, 9, 8, 10, 20, 25, 8.6, 1.1, 9.6, 7.6, 4, 1.4, 2.4]
  }],
  chart: {
    type: 'bar',
    height: '100%',
    width: '100%'
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [{
          from: -1000,
          to: -25,
          color: '#880808'
        }, {
          from: -25,
          to: 0,
          color: '#D22B2B'
        }, {
          from: 1,
          to: 25,
          color: '#50C878'
        }, {
          from: 25,
          to: 1000,
          color: '#228B22'
        }]
      },
      columnWidth: '80%'
    }
  },
  dataLabels: {
    enabled: false
  },
  yaxis: {
    title: {
      text: 'PnL'
    },
    labels: {
      formatter: function formatter(y) {
        return y.toFixed(0) + "%";
      }
    }
  },
  xaxis: {
    type: 'datetime',
    categories: ['2021-01-01', '2021-02-01', '2021-03-01', '2021-04-01', '2021-05-01', '2021-06-01', '2021-07-01', '2021-08-01', '2021-09-01', '2021-10-01', '2021-11-01', '2021-12-01', '2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01', '2022-06-01', '2022-07-01', '2022-08-01', '2022-09-01', '2022-10-01', '2022-11-01', '2022-12-01', '2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01', '2023-05-01', '2023-06-01', '2023-07-01', '2023-08-01', '2023-09-01'],
    labels: {
      rotate: -90
    }
  }
};
var chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_17___default())(document.getElementById("#chart"), options);
chart.render();

//   sparkline1
var options = {
  series: [{
    data: [3, 5, 7, 13, 15, 16, 27, 55, 76]
  }],
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    opacity: 0.3
  },
  yaxis: {
    min: 0,
    max: 100
  },
  colors: ['#50C878']
  //   title: {
  //     text: '$424,652',
  //     offsetX: 0,
  //     style: {
  //       fontSize: '24px',
  //     }
  //   },
  //   subtitle: {
  //     text: 'Sales',
  //     offsetX: 0,
  //     style: {
  //       fontSize: '14px',
  //     }
  //   }
};

var chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_17___default())(document.getElementById("#chart-spark1"), options);
chart.render();

//   sparkline1
var options2 = {
  series: [{
    data: [16, 27, 55, 76]
  }],
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    opacity: 0.3
  },
  yaxis: {
    min: 0,
    max: 100
  },
  colors: ['#50C878']
  //   title: {
  //     text: '$424,652',
  //     offsetX: 0,
  //     style: {
  //       fontSize: '24px',
  //     }
  //   },
  //   subtitle: {
  //     text: 'Sales',
  //     offsetX: 0,
  //     style: {
  //       fontSize: '14px',
  //     }
  //   }
};

var chart2 = new (apexcharts__WEBPACK_IMPORTED_MODULE_17___default())(document.getElementById("#chart-spark2"), options2);
chart2.render();
var options4 = {
  colors: ['#50C878', '#D22B2B'],
  series: [78, 22],
  labels: ["Percentage Win", "Percentage Loss"],
  chart: {
    type: 'donut',
    height: "50%",
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    width: 1
  },
  tooltip: {
    fixed: {
      enabled: false
    }
  }
};
var chart4 = new (apexcharts__WEBPACK_IMPORTED_MODULE_17___default())(document.getElementById("#chart-4"), options4);
chart4.render();

//   Heat map

var options = {
  series: [{
    name: "Strategy 1",
    data: generateData(20, {
      min: -50,
      max: 50
    })
  }, {
    name: "Strategy 2",
    data: generateData(20, {
      min: -50,
      max: 50
    })
  }, {
    name: "Strategy 3",
    data: generateData(20, {
      min: -50,
      max: 50
    })
  }],
  chart: {
    type: 'heatmap',
    height: '100%',
    width: '100%'
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  plotOptions: {
    heatmap: {
      colorScale: {
        ranges: [{
          from: -50,
          to: -26,
          color: '#880808'
        }, {
          from: -25,
          to: -1,
          color: '#D22B2B'
        }, {
          from: 1,
          to: 25,
          color: '#50C878'
        }, {
          from: 26,
          to: 50,
          color: '#228B22'
        }]
      }
    }
  }
};
var chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_17___default())(document.getElementById("#heatmap-chart"), options);
chart.render();

// // scatter
// var options = {
//   series: [{
//   name: "SAMPLE A",
//   data: [
//   [1, 5], [1, 2], [1, 3], [2, 6], [2, 10], [3, 10], [3, 20], [3, 20], [5, 8], [20, 50], [20, -10], [20, -15], [5, 10], [2, 0], [27.1, 52.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
// }],
//   chart: {
//   height: "100%",
//   width: "100%",
//   type: 'scatter',
//   zoom: {
//     enabled: true,
//     type: 'xy'
//   }
// },
// xaxis: {
//   position: 'left',
//   tickAmount: 5,
//   tickPlacement: 'on',
//   min: 0,
//   max: 100,
//   title: {
//     text: 'PnL',
//   },
//   labels: {
//     formatter: function(val) {
//       return parseFloat(val).toFixed(1)
//     }
//   },

// },
// yaxis: {
//   tickAmount: 7,
//   title: {
//     text: 'PnL',
//   },
// }
// };

// var chart = new ApexCharts(document.getElementById("#scatter-chart"), options);
// chart.render();

var options = (_options = {
  series: [{
    name: 'Leverage',
    type: 'line',
    data: [{
      x: 1996,
      y: 1
    }, {
      x: 1997,
      y: 5
    }, {
      x: 1998,
      y: 2
    }, {
      x: 1999,
      y: 2
    }, {
      x: 2000,
      y: 10
    }, {
      x: 2001,
      y: 10
    }, {
      x: 2002,
      y: 3
    }, {
      x: 2003,
      y: 1
    }]
  }, {
    name: 'Percentage Profit',
    type: 'area',
    data: [{
      x: 1996,
      y: 20
    }, {
      x: 1997,
      y: 14
    }, {
      x: 1998,
      y: 12
    }, {
      x: 1999,
      y: -12
    }, {
      x: 2000,
      y: -5
    }, {
      x: 2001,
      y: 0
    }, {
      x: 2002,
      y: -20
    }, {
      x: 2003,
      y: 21
    }]
  }],
  chart: {
    type: 'line',
    height: "100%",
    width: "100%"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    type: 'solid',
    opacity: [0.35, 1]
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: [{
    tickAmount: 4,
    floating: false,
    title: {
      text: "Leverage"
    },
    labels: {
      style: {
        colors: '#8e8da4'
      },
      offsetY: -7,
      offsetX: 0
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  }, {
    opposite: true,
    title: {
      text: "Percentage Profit"
    }
  }]
}, _defineProperty(_options, "fill", {
  opacity: 0.5
}), _defineProperty(_options, "tooltip", {
  x: {
    format: "yyyy"
  },
  fixed: {
    enabled: false,
    position: 'topRight'
  }
}), _defineProperty(_options, "grid", {
  yaxis: {
    lines: {
      offsetX: -30
    }
  },
  padding: {
    left: 20
  }
}), _options);
var chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_17___default())(document.getElementById("#leverage-chart"), options);
chart.render();

/***/ }),

/***/ "./assets/js/pagination.js":
/*!*********************************!*\
  !*** ./assets/js/pagination.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
getPagination('#table-id');
getPagination('.trades-table');

//getPagination('.table-class');
//getPagination('table');

/*					PAGINATION 
- on change max rows select options fade out all rows gt option value mx = 5
- append pagination list as per numbers of rows / max rows option (20row/5= 4pages )
- each pagination li on click -> fade out all tr gt max rows * li num and (5*pagenum 2 = 10 rows)
- fade out all tr lt max rows * li num - max rows ((5*pagenum 2 = 10) - 5)
- fade in all tr between (maxRows*PageNum) and (maxRows*pageNum)- MaxRows 
*/

function getPagination(table) {
  var lastPage = 1;
  $('#maxRows').on('change', function (evt) {
    //$('.paginationprev').html('');						// reset pagination

    lastPage = 1;
    $('.pagination').find('li').slice(1, -1).remove();
    var trnum = 0; // reset tr counter
    var maxRows = parseInt($(this).val()); // get Max Rows from select option

    if (maxRows == 5000) {
      $('.pagination').hide();
    } else {
      $('.pagination').show();
    }
    var totalRows = $(table + ' tbody tr').length; // numbers of rows
    $(table + ' tr:gt(0)').each(function () {
      // each TR in  table and not the header
      trnum++; // Start Counter
      if (trnum > maxRows) {
        // if tr number gt maxRows

        $(this).hide(); // fade it out
      }

      if (trnum <= maxRows) {
        $(this).show();
      } // else fade in Important in case if it ..
    }); //  was fade out to fade it in
    if (totalRows > maxRows) {
      // if tr total rows gt max rows option
      var pagenum = Math.ceil(totalRows / maxRows); // ceil total(rows/maxrows) to get ..
      //	numbers of pages
      for (var i = 1; i <= pagenum;) {
        // for each page append pagination li
        $('.pagination #prev').before('<li data-page="' + i + '">\
              <a class="page-link">' + i++ + '<span class="sr-only">(current)</span></a>\
            </li>').show();
      } // end for i
    } // end if row count > max rows
    $('.pagination [data-page="1"]').addClass('active'); // add active class to the first li
    $('.pagination li').on('click', function (evt) {
      // on click each page
      evt.stopImmediatePropagation();
      evt.preventDefault();
      var pageNum = $(this).attr('data-page'); // get it's number

      var maxRows = parseInt($('#maxRows').val()); // get Max Rows from select option

      if (pageNum == 'prev') {
        if (lastPage == 1) {
          return;
        }
        pageNum = --lastPage;
      }
      if (pageNum == 'next') {
        if (lastPage == $('.pagination li').length - 2) {
          return;
        }
        pageNum = ++lastPage;
      }
      lastPage = pageNum;
      var trIndex = 0; // reset tr counter
      $('.pagination li').removeClass('active'); // remove active class from all li
      $('.pagination [data-page="' + lastPage + '"]').addClass('active'); // add active class to the clicked
      // $(this).addClass('active');					// add active class to the clicked
      limitPagging();
      $(table + ' tr:gt(0)').each(function () {
        // each tr in table not the header
        trIndex++; // tr index counter
        // if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
        if (trIndex > maxRows * pageNum || trIndex <= maxRows * pageNum - maxRows) {
          $(this).hide();
        } else {
          $(this).show();
        } //else fade in
      }); // end of for each tr in table
    }); // end of on click pagination list
    limitPagging();
  }).val(5).change();

  // end of on select change

  // END OF PAGINATION
}

function limitPagging() {
  // alert($('.pagination li').length)

  if ($('.pagination li').length > 7) {
    if ($('.pagination li.active').attr('data-page') <= 3) {
      $('.pagination li:gt(5)').hide();
      $('.pagination li:lt(5)').show();
      $('.pagination [data-page="next"]').show();
    }
    if ($('.pagination li.active').attr('data-page') > 3) {
      $('.pagination li:gt(0)').hide();
      $('.pagination [data-page="next"]').show();
      for (var i = parseInt($('.pagination li.active').attr('data-page')) - 2; i <= parseInt($('.pagination li.active').attr('data-page')) + 2; i++) {
        $('.pagination [data-page="' + i + '"]').show();
      }
    }
  }
}
$(function () {
  // Just to append id number for each row
  $('table tr:eq(0)').prepend('<th> ID </th>');
  var id = 0;
  $('table tr:gt(0)').each(function () {
    id++;
    $(this).prepend('<td>' + id + '</td>');
  });
});

//  Developed By Yasser Mas
// yasser.mas2@gmail.com

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_apexcharts_dist_apexc-71992c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ2xGLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRztFQUVoRyxDQUFDLENBQUM7RUFDQUMsS0FBSyxFQUFFO0lBQ1BDLElBQUksRUFBRSxLQUFLO0lBQ1hDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLEtBQUssRUFBRTtFQUNULENBQUM7RUFDREMsV0FBVyxFQUFFO0lBQ1hDLEdBQUcsRUFBRTtNQUNIQyxNQUFNLEVBQUU7UUFDTkMsTUFBTSxFQUFFLENBQUM7VUFDUEMsSUFBSSxFQUFFLENBQUMsSUFBSTtVQUNYQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1VBQ1BDLEtBQUssRUFBRTtRQUNULENBQUMsRUFBRTtVQUNERixJQUFJLEVBQUUsQ0FBQyxFQUFFO1VBQ1RDLEVBQUUsRUFBRSxDQUFDO1VBQ0xDLEtBQUssRUFBRTtRQUNULENBQUMsRUFBRTtVQUNDRixJQUFJLEVBQUUsQ0FBQztVQUNQQyxFQUFFLEVBQUUsRUFBRTtVQUNOQyxLQUFLLEVBQUU7UUFDWCxDQUFDLEVBQUU7VUFDQ0YsSUFBSSxFQUFFLEVBQUU7VUFDUkMsRUFBRSxFQUFFLElBQUk7VUFDUkMsS0FBSyxFQUFFO1FBQ1gsQ0FBQztNQUNILENBQUM7TUFDREMsV0FBVyxFQUFFO0lBQ2Y7RUFDRixDQUFDO0VBQ0RDLFVBQVUsRUFBRTtJQUNWQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLEtBQUssRUFBRTtJQUNMQyxLQUFLLEVBQUU7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aEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJNUIsT0FBTztFQUNUVixNQUFNLEVBQUUsQ0FBQztJQUNUVyxJQUFJLEVBQUUsVUFBVTtJQUNoQkcsSUFBSSxFQUFFLE1BQU07SUFDWkYsSUFBSSxFQUFFLENBQUM7TUFDSFgsQ0FBQyxFQUFFLElBQUk7TUFDUEUsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxFQUNEO01BQ0VGLENBQUMsRUFBRSxJQUFJO01BQ1BFLENBQUMsRUFBRTtJQUNMLENBQUMsRUFDRDtNQUNFRixDQUFDLEVBQUUsSUFBSTtNQUNQRSxDQUFDLEVBQUU7SUFDTCxDQUFDLEVBQ0Q7TUFDRUYsQ0FBQyxFQUFFLElBQUk7TUFDUEUsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxFQUNEO01BQ0VGLENBQUMsRUFBRSxJQUFJO01BQ1BFLENBQUMsRUFBRTtJQUNMLENBQUMsRUFDRDtNQUNFRixDQUFDLEVBQUUsSUFBSTtNQUNQRSxDQUFDLEVBQUU7SUFDTCxDQUFDLEVBQ0Q7TUFDRUYsQ0FBQyxFQUFFLElBQUk7TUFDUEUsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxFQUNEO01BQ0VGLENBQUMsRUFBRSxJQUFJO01BQ1BFLENBQUMsRUFBRTtJQUNMLENBQUM7RUFHTCxDQUFDLEVBQUU7SUFDRFEsSUFBSSxFQUFFLG1CQUFtQjtJQUN6QkcsSUFBSSxFQUFFLE1BQU07SUFDWkYsSUFBSSxFQUFFLENBQ0o7TUFDRVgsQ0FBQyxFQUFFLElBQUk7TUFDUEUsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxFQUNEO01BQ0VGLENBQUMsRUFBRSxJQUFJO01BQ1BFLENBQUMsRUFBRTtJQUNMLENBQUMsRUFDRDtN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LEVBQUU7SUFDMUM7SUFBQyxJQUFJbUIsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNxQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFDO01BQ3REckIsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNVLElBQUksRUFBRTtNQUNoQ1YsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUNuQixJQUFJLEVBQUU7TUFDMUMsS0FBSyxJQUFJcEQsQ0FBQyxHQUFLK0UsUUFBUSxDQUFDUixDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3FCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUcsRUFBSTVGLENBQUMsSUFBTStFLFFBQVEsQ0FBQ1IsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNxQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBSSxDQUFHLEVBQUc1RixDQUFDLEVBQUUsRUFBRTtRQUMzSnVFLENBQUMsQ0FBQywwQkFBMEIsR0FBQ3ZFLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQ29ELElBQUksRUFBRTtNQUUzQztJQUVBO0VBQ0E7QUFDQTtBQUVBbUIsQ0FBQyxDQUFDLFlBQVc7RUFDYjtFQUNBQSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzBCLE9BQU8sQ0FBQyxlQUFlLENBQUM7RUFFNUMsSUFBSUMsRUFBRSxHQUFHLENBQUM7RUFFVjNCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDYSxJQUFJLENBQUMsWUFBVztJQUNwQ2MsRUFBRSxFQUFFO0lBQ0ozQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMwQixPQUFPLENBQUMsTUFBTSxHQUFHQyxFQUFFLEdBQUcsT0FBTyxDQUFDO0VBQ3RDLENBQUMsQ0FBQztBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBOzs7Ozs7Ozs7Ozs7QUN4SkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwZXgtY2hhcnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAnOyAvL2FkZHMgZnVuY3Rpb25zIHRvIGpxdWVyeVxuXG5pbXBvcnQgJ2pxdWVyeSc7XG5pbXBvcnQgJy4vanMvcGFnaW5hdGlvbic7XG5pbXBvcnQgJy4vanMvYXBleC1jaGFydHMnO1xuY29uc29sZS5sb2coXCJXZWJwYWNrIHdvcmtpbmchISFcIik7XG5cbi8vIGdsb2JhbC4kID0gJDsgXG4vLyBOb3QgbmVlZGVkIHVubGVzcyB3ZSBoYXZlIEpxdWVyeSBpbiB0ZW1wbGF0ZXMgYW5kIG5lZWQgZ2xvYmFsICRcblxuLy8gaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJztcblxuLy8gY29uc3QgZGF0YSA9IFsxMCwgLTIwLCA0MCwgLTMwLCAwLCA1NSwgLTYwXTtcbi8vICAgICB2YXIgY29sb3VycyA9IGRhdGEubWFwKCh2YWx1ZSkgPT4gdmFsdWUgPCAwID8gJ3JlZCcgOiAnZ3JlZW4nKTtcbi8vICAgICB2YXIgb3B0aW9ucyA9IHtcbi8vICAgICAgICAgcmVzcG9uc2l2ZTp0cnVlLFxuLy8gICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbi8vICAgICAgICAgbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH0sXG4vLyAgICAgICAgIHNjYWxlczoge1xuLy8gICAgICAgICAgICAgeEF4ZXM6IFt7XG4vLyAgICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuLy8gICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ0RhdGUnXG4vLyAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbi8vICAgICAgICAgICAgICAgICAgICAgZHJhd0JvcmRlcjogdHJ1ZSxcbi8vICAgICAgICAgICAgICAgICAgICAgZHJhd09uQ2hhcnRBcmVhOiBmYWxzZVxuLy8gICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgICAgdGlja3M6IHsgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgfSwgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICB9XSxcbi8vICAgICAgICAgICAgIHlBeGVzOiBbe1xuLy8gICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuLy8gICAgICAgICAgICAgICAgICAgICBkcmF3Qm9yZGVyOiB0cnVlLFxuLy8gICAgICAgICAgICAgICAgICAgICBkcmF3T25DaGFydEFyZWE6IHRydWVcbi8vICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4vLyAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnUE5MJ1xuLy8gICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICB9XVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgbmV3IENoYXJ0KFxuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNxdWlzaXRpb25zJyksXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgdHlwZTogJ2JhcicsXG4vLyAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4vLyAgICAgICAgIGRhdGE6IHtcbi8vICAgICAgICAgICAgIGxhYmVsczogW1wiMDEvMTFcIiwgXCIwMi8xMVwiLCBcIjAzLzExXCIsIFwiMDQvMTFcIiwgXCIwNS8xMVwiLCBcIjA2LzExXCIsIFwiMDcvMTFcIl0sXG4vLyAgICAgICAgICAgICBkYXRhc2V0czogW1xuLy8gICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgIGxhYmVsOiAnUGFzdCA3IGRheXMnLFxuLy8gICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG91cnMsXG4vLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvdXJzXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBdXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICk7XG5cblxuY29uc29sZS5sb2coXCJXZWJwYWNrIHdvcmtpbmchISFcIilcblxuLy8gJChcIiN0ZXN0ZXJcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4vLyAgICAgY29uc29sZS5sb2coMTIzNClcbi8vICAgICAvLyQoXCIudGFibGUtY2FyZFwiKS5mYWRlT3V0KDUwMDAwKTsgLy9pZiB0aGVyZSBhcmUgb3RoZXIgZWxlbWVudHMgaW4gdGhpcyBkaXYgeW91IHdhbnQgdG8gcHJlc2VydmUsIGtlZXAgaW4gbWluZCB0aGlzIHdpbGwgcmVtb3ZlIHRob3NlIHRvby5cbi8vICAgICAkKCcudGFibGUtY2FyZCcpLmZhZGVPdXQoNTAwLCBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgJChcIi50YWJsZS1jYXJkXCIpLmh0bWwoJzxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj5FZGl0IFRyYWRlPC9oNT4nKS5mYWRlSW4oNTAwKTtcbi8vICAgICB9KTtcbiAgIFxuLy8gfSk7XG5cbi8vICQoXCIjdGVzdGVyXCIpLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKCAxMjMgKTtcbi8vIH0pO1xuLy8gJCgnZGVsZXRlLWJ1dHRvbicpLmNvbmZpcm1CdXR0b24oe1xuLy8gICAgIGNvbmZpcm1cbi8vIH0pXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCBBcGV4Q2hhcnRzIGZyb20gJ2FwZXhjaGFydHMnXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZURhdGEoY291bnQsIHlyYW5nZSkge1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgdmFyIHNlcmllcyA9IFtdO1xyXG4gICAgd2hpbGUgKGkgPCBjb3VudCkge1xyXG4gICAgICB2YXIgeCA9IFwid1wiICsgKGkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICB2YXIgeSA9XHJcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHlyYW5nZS5tYXggLSB5cmFuZ2UubWluICsgMSkpICsgeXJhbmdlLm1pbjtcclxuICBcclxuICAgICAgc2VyaWVzLnB1c2goe1xyXG4gICAgICAgIHg6IHgsXHJcbiAgICAgICAgeTogeVxyXG4gICAgICB9KTtcclxuICAgICAgaSsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlcmllcztcclxuICB9XHJcblxyXG52YXIgb3B0aW9ucyA9IHtcclxuICAgIHNlcmllczogW3tcclxuICAgIG5hbWU6ICdDYXNoIEZsb3cnLFxyXG4gICAgZGF0YTogWzEuNDUsIDUuNDIsIDUuOSwgLTAuNDIsIC0xMi42LCAtMTguMSwgLTE4LjIsIC0yNS4xNiwgLTMwLjEsIC0yMCwgLTE1LCAtMTAsIC01LFxyXG4gICAgICA1LjgsIDIsIDMuMzcsIC01LjEsIC0zLjU3LCA1Ljc1LCA3LjEsIDkuOCwgOSwgOCwgMTAsIDIwLCAyNSwgOC42LCAxLjEsIDkuNiwgNy42LCA0LCAxLjQsIDIuNFxyXG4gICAgXVxyXG4gIH1dLFxyXG4gICAgY2hhcnQ6IHtcclxuICAgIHR5cGU6ICdiYXInLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnXHJcbiAgfSxcclxuICBwbG90T3B0aW9uczoge1xyXG4gICAgYmFyOiB7XHJcbiAgICAgIGNvbG9yczoge1xyXG4gICAgICAgIHJhbmdlczogW3tcclxuICAgICAgICAgIGZyb206IC0xMDAwLFxyXG4gICAgICAgICAgdG86IC0yNSxcclxuICAgICAgICAgIGNvbG9yOiAnIzg4MDgwOCdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBmcm9tOiAtMjUsXHJcbiAgICAgICAgICB0bzogMCxcclxuICAgICAgICAgIGNvbG9yOiAnI0QyMkIyQicsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBmcm9tOiAxLFxyXG4gICAgICAgICAgICB0bzogMjUsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzUwQzg3OCdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGZyb206IDI1LFxyXG4gICAgICAgICAgICB0bzogMTAwMCxcclxuICAgICAgICAgICAgY29sb3I6ICcjMjI4QjIyJ1xyXG4gICAgICAgIH1dXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbHVtbldpZHRoOiAnODAlJyxcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGFMYWJlbHM6IHtcclxuICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgeWF4aXM6IHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIHRleHQ6ICdQbkwnLFxyXG4gICAgfSxcclxuICAgIGxhYmVsczoge1xyXG4gICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh5KSB7XHJcbiAgICAgICAgcmV0dXJuIHkudG9GaXhlZCgwKSArIFwiJVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB4YXhpczoge1xyXG4gICAgdHlwZTogJ2RhdGV0aW1lJyxcclxuICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAgJzIwMjEtMDEtMDEnLCAnMjAyMS0wMi0wMScsICcyMDIxLTAzLTAxJywgJzIwMjEtMDQtMDEnLCAnMjAyMS0wNS0wMScsICcyMDIxLTA2LTAxJyxcclxuICAgICAgJzIwMjEtMDctMDEnLCAnMjAyMS0wOC0wMScsICcyMDIxLTA5LTAxJywgJzIwMjEtMTAtMDEnLCAnMjAyMS0xMS0wMScsICcyMDIxLTEyLTAxJyxcclxuICAgICAgJzIwMjItMDEtMDEnLCAnMjAyMi0wMi0wMScsICcyMDIyLTAzLTAxJywgJzIwMjItMDQtMDEnLCAnMjAyMi0wNS0wMScsICcyMDIyLTA2LTAxJyxcclxuICAgICAgJzIwMjItMDctMDEnLCAnMjAyMi0wOC0wMScsICcyMDIyLTA5LTAxJywgJzIwMjItMTAtMDEnLCAnMjAyMi0xMS0wMScsICcyMDIyLTEyLTAxJyxcclxuICAgICAgJzIwMjMtMDEtMDEnLCAnMjAyMy0wMi0wMScsICcyMDIzLTAzLTAxJywgJzIwMjMtMDQtMDEnLCAnMjAyMy0wNS0wMScsICcyMDIzLTA2LTAxJyxcclxuICAgICAgJzIwMjMtMDctMDEnLCAnMjAyMy0wOC0wMScsICcyMDIzLTA5LTAxJ1xyXG4gICAgXSxcclxuICAgIGxhYmVsczoge1xyXG4gICAgICByb3RhdGU6IC05MFxyXG4gICAgfVxyXG4gIH1cclxuICB9O1xyXG4gIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiI2NoYXJ0XCIpLCBvcHRpb25zKTtcclxuICBjaGFydC5yZW5kZXIoKTtcclxuXHJcbi8vICAgc3BhcmtsaW5lMVxyXG4gIHZhciBvcHRpb25zID0ge1xyXG4gICAgc2VyaWVzOiBbe1xyXG4gICAgZGF0YTogWzMsNSw3LDEzLDE1LDE2LDI3LDU1LDc2XVxyXG4gIH1dLFxyXG4gICAgY2hhcnQ6IHtcclxuICAgIHR5cGU6ICdhcmVhJyxcclxuICAgIGhlaWdodDogMTYwLFxyXG4gICAgc3BhcmtsaW5lOiB7XHJcbiAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdHJva2U6IHtcclxuICAgIGN1cnZlOiAnc3RyYWlnaHQnXHJcbiAgfSxcclxuICBmaWxsOiB7XHJcbiAgICBvcGFjaXR5OiAwLjMsXHJcbiAgfSxcclxuICB5YXhpczoge1xyXG4gICAgbWluOiAwLFxyXG4gICAgbWF4OjEwMCxcclxuICB9LFxyXG4gICBjb2xvcnM6IFsnIzUwQzg3OCddXHJcbi8vICAgdGl0bGU6IHtcclxuLy8gICAgIHRleHQ6ICckNDI0LDY1MicsXHJcbi8vICAgICBvZmZzZXRYOiAwLFxyXG4vLyAgICAgc3R5bGU6IHtcclxuLy8gICAgICAgZm9udFNpemU6ICcyNHB4JyxcclxuLy8gICAgIH1cclxuLy8gICB9LFxyXG4vLyAgIHN1YnRpdGxlOiB7XHJcbi8vICAgICB0ZXh0OiAnU2FsZXMnLFxyXG4vLyAgICAgb2Zmc2V0WDogMCxcclxuLy8gICAgIHN0eWxlOiB7XHJcbi8vICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4gIH07XHJcbiAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIjY2hhcnQtc3BhcmsxXCIpLCBvcHRpb25zKTtcclxuICBjaGFydC5yZW5kZXIoKTtcclxuXHJcbiAgLy8gICBzcGFya2xpbmUxXHJcbiAgdmFyIG9wdGlvbnMyID0ge1xyXG4gICAgc2VyaWVzOiBbe1xyXG4gICAgZGF0YTogWzE2LDI3LDU1LDc2XVxyXG4gIH1dLFxyXG4gICAgY2hhcnQ6IHtcclxuICAgIHR5cGU6ICdhcmVhJyxcclxuICAgIGhlaWdodDogMTYwLFxyXG4gICAgc3BhcmtsaW5lOiB7XHJcbiAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdHJva2U6IHtcclxuICAgIGN1cnZlOiAnc3RyYWlnaHQnXHJcbiAgfSxcclxuICBmaWxsOiB7XHJcbiAgICBvcGFjaXR5OiAwLjMsXHJcbiAgfSxcclxuICB5YXhpczoge1xyXG4gICAgbWluOiAwLFxyXG4gICAgbWF4OjEwMCxcclxuICB9LFxyXG4gIGNvbG9yczogWycjNTBDODc4J11cclxuLy8gICB0aXRsZToge1xyXG4vLyAgICAgdGV4dDogJyQ0MjQsNjUyJyxcclxuLy8gICAgIG9mZnNldFg6IDAsXHJcbi8vICAgICBzdHlsZToge1xyXG4vLyAgICAgICBmb250U2l6ZTogJzI0cHgnLFxyXG4vLyAgICAgfVxyXG4vLyAgIH0sXHJcbi8vICAgc3VidGl0bGU6IHtcclxuLy8gICAgIHRleHQ6ICdTYWxlcycsXHJcbi8vICAgICBvZmZzZXRYOiAwLFxyXG4vLyAgICAgc3R5bGU6IHtcclxuLy8gICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbiAgfTtcclxuICB2YXIgY2hhcnQyID0gbmV3IEFwZXhDaGFydHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIjY2hhcnQtc3BhcmsyXCIpLCBvcHRpb25zMik7XHJcbiAgY2hhcnQyLnJlbmRlcigpO1xyXG5cclxuICB2YXIgb3B0aW9uczQgPSB7XHJcbiAgICBjb2xvcnM6IFsnIzUwQzg3OCcsICcjRDIyQjJCJ10sIFxyXG4gICAgc2VyaWVzOiBbNzgsMjJdLFxyXG4gICAgbGFiZWxzOiBbXCJQZXJjZW50YWdlIFdpblwiLCBcIlBlcmNlbnRhZ2UgTG9zc1wiXSxcclxuICAgIGNoYXJ0OiB7XHJcbiAgICB0eXBlOiAnZG9udXQnLFxyXG4gICAgaGVpZ2h0OiBcIjUwJVwiLFxyXG4gICAgc3BhcmtsaW5lOiB7XHJcbiAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG4gIHN0cm9rZToge1xyXG4gICAgd2lkdGg6IDFcclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIGZpeGVkOiB7XHJcbiAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gIH1cclxuICB9O1xyXG5cclxuICB2YXIgY2hhcnQ0ID0gbmV3IEFwZXhDaGFydHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIjY2hhcnQtNFwiKSwgb3B0aW9uczQpO1xyXG4gIGNoYXJ0NC5yZW5kZXIoKTtcclxuXHJcblxyXG4vLyAgIEhlYXQgbWFwXHJcblxyXG52YXIgb3B0aW9ucyA9IHtcclxuICAgIHNlcmllczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiU3RyYXRlZ3kgMVwiLFxyXG4gICAgICAgICAgZGF0YTogZ2VuZXJhdGVEYXRhKDIwLCB7XHJcbiAgICAgICAgICAgIG1pbjogLTUwLFxyXG4gICAgICAgICAgICBtYXg6IDUwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJTdHJhdGVneSAyXCIsXHJcbiAgICAgICAgICBkYXRhOiBnZW5lcmF0ZURhdGEoMjAsIHtcclxuICAgICAgICAgICAgbWluOiAtNTAsXHJcbiAgICAgICAgICAgIG1heDogNTBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlN0cmF0ZWd5IDNcIixcclxuICAgICAgICAgIGRhdGE6IGdlbmVyYXRlRGF0YSgyMCwge1xyXG4gICAgICAgICAgICBtaW46IC01MCxcclxuICAgICAgICAgICAgbWF4OiA1MFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgICBjaGFydDoge1xyXG4gICAgICAgIHR5cGU6ICdoZWF0bWFwJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICAgIH0sXHJcbiAgZGF0YUxhYmVsczoge1xyXG4gICAgZW5hYmxlZDogZmFsc2VcclxuICB9LFxyXG4gIGxlZ2VuZDoge1xyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgfSxcclxuICBwbG90T3B0aW9uczoge1xyXG4gICAgaGVhdG1hcDoge1xyXG4gICAgICAgIGNvbG9yU2NhbGU6IHtcclxuICAgICAgICAgICAgcmFuZ2VzOiBbe1xyXG4gICAgICAgICAgICAgICAgZnJvbTogLTUwLFxyXG4gICAgICAgICAgICAgICAgdG86IC0yNixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzg4MDgwOCdcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiAtMjUsXHJcbiAgICAgICAgICAgICAgICB0bzogLTEsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNEMjJCMkInLFxyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgZnJvbTogMSxcclxuICAgICAgICAgICAgICAgICAgdG86IDI1LFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJyM1MEM4NzgnXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICBmcm9tOiAyNixcclxuICAgICAgICAgICAgICAgICAgdG86IDUwLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJyMyMjhCMjInXHJcbiAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgIH1cclxuICAgIFxyXG5cclxuICB9LFxyXG4gIFxyXG4gIH07XHJcblxyXG4gIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiI2hlYXRtYXAtY2hhcnRcIiksIG9wdGlvbnMpO1xyXG4gIGNoYXJ0LnJlbmRlcigpO1xyXG5cclxuLy8gLy8gc2NhdHRlclxyXG4vLyB2YXIgb3B0aW9ucyA9IHtcclxuLy8gICBzZXJpZXM6IFt7XHJcbi8vICAgbmFtZTogXCJTQU1QTEUgQVwiLFxyXG4vLyAgIGRhdGE6IFtcclxuLy8gICBbMSwgNV0sIFsxLCAyXSwgWzEsIDNdLCBbMiwgNl0sIFsyLCAxMF0sIFszLCAxMF0sIFszLCAyMF0sIFszLCAyMF0sIFs1LCA4XSwgWzIwLCA1MF0sIFsyMCwgLTEwXSwgWzIwLCAtMTVdLCBbNSwgMTBdLCBbMiwgMF0sIFsyNy4xLCA1Mi4zXSwgWzE2LjQsIDBdLCBbMTMuNiwgMy43XSwgWzEwLjksIDUuMl0sIFsxNi40LCA2LjVdLCBbMTAuOSwgMF0sIFsyNC41LCA3LjFdLCBbMTAuOSwgMF0sIFs4LjEsIDQuN10sIFsxOSwgMF0sIFsyMS43LCAxLjhdLCBbMjcuMSwgMF0sIFsyNC41LCAwXSwgWzI3LjEsIDBdLCBbMjkuOSwgMS41XSwgWzI3LjEsIDAuOF0sIFsyMi4xLCAyXV1cclxuLy8gfV0sXHJcbi8vICAgY2hhcnQ6IHtcclxuLy8gICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4vLyAgIHdpZHRoOiBcIjEwMCVcIixcclxuLy8gICB0eXBlOiAnc2NhdHRlcicsXHJcbi8vICAgem9vbToge1xyXG4vLyAgICAgZW5hYmxlZDogdHJ1ZSxcclxuLy8gICAgIHR5cGU6ICd4eSdcclxuLy8gICB9XHJcbi8vIH0sXHJcbi8vIHhheGlzOiB7XHJcbi8vICAgcG9zaXRpb246ICdsZWZ0JyxcclxuLy8gICB0aWNrQW1vdW50OiA1LFxyXG4vLyAgIHRpY2tQbGFjZW1lbnQ6ICdvbicsXHJcbi8vICAgbWluOiAwLFxyXG4vLyAgIG1heDogMTAwLFxyXG4vLyAgIHRpdGxlOiB7XHJcbi8vICAgICB0ZXh0OiAnUG5MJyxcclxuLy8gICB9LFxyXG4vLyAgIGxhYmVsczoge1xyXG4vLyAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbih2YWwpIHtcclxuLy8gICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsKS50b0ZpeGVkKDEpXHJcbi8vICAgICB9XHJcbi8vICAgfSxcclxuICBcclxuLy8gfSxcclxuLy8geWF4aXM6IHtcclxuLy8gICB0aWNrQW1vdW50OiA3LFxyXG4vLyAgIHRpdGxlOiB7XHJcbi8vICAgICB0ZXh0OiAnUG5MJyxcclxuLy8gICB9LFxyXG4vLyB9XHJcbi8vIH07XHJcblxyXG4vLyB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiNzY2F0dGVyLWNoYXJ0XCIpLCBvcHRpb25zKTtcclxuLy8gY2hhcnQucmVuZGVyKCk7XHJcblxyXG52YXIgb3B0aW9ucyA9IHtcclxuICBzZXJpZXM6IFt7XHJcbiAgbmFtZTogJ0xldmVyYWdlJyxcclxuICB0eXBlOiAnbGluZScsXHJcbiAgZGF0YTogW3tcclxuICAgICAgeDogMTk5NixcclxuICAgICAgeTogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgeDogMTk5NyxcclxuICAgICAgeTogNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgeDogMTk5OCxcclxuICAgICAgeTogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgeDogMTk5OSxcclxuICAgICAgeTogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgeDogMjAwMCxcclxuICAgICAgeTogMTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHg6IDIwMDEsXHJcbiAgICAgIHk6IDEwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB4OiAyMDAyLFxyXG4gICAgICB5OiAzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB4OiAyMDAzLFxyXG4gICAgICB5OiAxXHJcbiAgICB9LFxyXG4gICBcclxuICBdXHJcbn0sIHtcclxuICBuYW1lOiAnUGVyY2VudGFnZSBQcm9maXQnLFxyXG4gIHR5cGU6ICdhcmVhJyxcclxuICBkYXRhOiBbXHJcbiAgICB7XHJcbiAgICAgIHg6IDE5OTYsXHJcbiAgICAgIHk6IDIwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB4OiAxOTk3LFxyXG4gICAgICB5OiAxNFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgeDogMTk5OCxcclxuICAgICAgeTogMTJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHg6IDE5OTksXHJcbiAgICAgIHk6IC0xMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgeDogMjAwMCxcclxuICAgICAgeTogLTVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHg6IDIwMDEsXHJcbiAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHg6IDIwMDIsXHJcbiAgICAgIHk6IC0yMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgeDogMjAwMyxcclxuICAgICAgeTogMjFcclxuICAgIH0sXHJcbiAgXVxyXG59XSxcclxuICBjaGFydDoge1xyXG4gIHR5cGU6ICdsaW5lJyxcclxuICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIlxyXG59LFxyXG5kYXRhTGFiZWxzOiB7XHJcbiAgZW5hYmxlZDogZmFsc2VcclxufSxcclxuc3Ryb2tlOiB7XHJcbiAgY3VydmU6ICdzdHJhaWdodCdcclxufSxcclxuZmlsbDoge1xyXG4gIHR5cGU6J3NvbGlkJyxcclxuICBvcGFjaXR5OiBbMC4zNSwgMV0sXHJcbn0sXHJcblxyXG54YXhpczoge1xyXG4gIHR5cGU6ICdkYXRldGltZScsXHJcbiAgYXhpc0JvcmRlcjoge1xyXG4gICAgc2hvdzogZmFsc2VcclxuICB9LFxyXG4gIGF4aXNUaWNrczoge1xyXG4gICAgc2hvdzogZmFsc2VcclxuICB9XHJcbn0sXHJcbnlheGlzOiBbe1xyXG4gIHRpY2tBbW91bnQ6IDQsXHJcbiAgZmxvYXRpbmc6IGZhbHNlLFxyXG4gIHRpdGxlOiB7XHJcbiAgICB0ZXh0OiBcIkxldmVyYWdlXCJcclxuICB9LFxyXG4gIGxhYmVsczoge1xyXG4gICAgc3R5bGU6IHtcclxuICAgICAgY29sb3JzOiAnIzhlOGRhNCcsXHJcbiAgICB9LFxyXG4gICAgb2Zmc2V0WTogLTcsXHJcbiAgICBvZmZzZXRYOiAwLFxyXG4gIH0sXHJcbiAgYXhpc0JvcmRlcjoge1xyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgfSxcclxuICBheGlzVGlja3M6IHtcclxuICAgIHNob3c6IGZhbHNlXHJcbiAgfVxyXG59LFxyXG57XHJcbiAgb3Bwb3NpdGU6IHRydWUsXHJcbiAgdGl0bGU6IHtcclxuICAgIHRleHQ6IFwiUGVyY2VudGFnZSBQcm9maXRcIlxyXG4gIH1cclxufV0sXHJcbmZpbGw6IHtcclxuICBvcGFjaXR5OiAwLjVcclxufSxcclxudG9vbHRpcDoge1xyXG4gIHg6IHtcclxuICAgIGZvcm1hdDogXCJ5eXl5XCIsXHJcbiAgfSxcclxuICBmaXhlZDoge1xyXG4gICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICBwb3NpdGlvbjogJ3RvcFJpZ2h0J1xyXG4gIH1cclxufSxcclxuZ3JpZDoge1xyXG4gIHlheGlzOiB7XHJcbiAgICBsaW5lczoge1xyXG4gICAgICBvZmZzZXRYOiAtMzBcclxuICAgIH1cclxuICB9LFxyXG4gIHBhZGRpbmc6IHtcclxuICAgIGxlZnQ6IDIwXHJcbiAgfVxyXG59XHJcbn07XHJcblxyXG52YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiNsZXZlcmFnZS1jaGFydFwiKSwgb3B0aW9ucyk7XHJcbmNoYXJ0LnJlbmRlcigpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJnZXRQYWdpbmF0aW9uKCcjdGFibGUtaWQnKTtcclxuZ2V0UGFnaW5hdGlvbignLnRyYWRlcy10YWJsZScpO1xyXG5cclxuLy9nZXRQYWdpbmF0aW9uKCcudGFibGUtY2xhc3MnKTtcclxuLy9nZXRQYWdpbmF0aW9uKCd0YWJsZScpO1xyXG5cclxuLypcdFx0XHRcdFx0UEFHSU5BVElPTiBcclxuLSBvbiBjaGFuZ2UgbWF4IHJvd3Mgc2VsZWN0IG9wdGlvbnMgZmFkZSBvdXQgYWxsIHJvd3MgZ3Qgb3B0aW9uIHZhbHVlIG14ID0gNVxyXG4tIGFwcGVuZCBwYWdpbmF0aW9uIGxpc3QgYXMgcGVyIG51bWJlcnMgb2Ygcm93cyAvIG1heCByb3dzIG9wdGlvbiAoMjByb3cvNT0gNHBhZ2VzIClcclxuLSBlYWNoIHBhZ2luYXRpb24gbGkgb24gY2xpY2sgLT4gZmFkZSBvdXQgYWxsIHRyIGd0IG1heCByb3dzICogbGkgbnVtIGFuZCAoNSpwYWdlbnVtIDIgPSAxMCByb3dzKVxyXG4tIGZhZGUgb3V0IGFsbCB0ciBsdCBtYXggcm93cyAqIGxpIG51bSAtIG1heCByb3dzICgoNSpwYWdlbnVtIDIgPSAxMCkgLSA1KVxyXG4tIGZhZGUgaW4gYWxsIHRyIGJldHdlZW4gKG1heFJvd3MqUGFnZU51bSkgYW5kIChtYXhSb3dzKnBhZ2VOdW0pLSBNYXhSb3dzIFxyXG4qL1xyXG5cclxuZnVuY3Rpb24gZ2V0UGFnaW5hdGlvbih0YWJsZSkge1xyXG52YXIgbGFzdFBhZ2UgPSAxO1xyXG5cclxuJCgnI21heFJvd3MnKVxyXG4ub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGV2dCkge1xyXG4vLyQoJy5wYWdpbmF0aW9ucHJldicpLmh0bWwoJycpO1x0XHRcdFx0XHRcdC8vIHJlc2V0IHBhZ2luYXRpb25cclxuXHJcbmxhc3RQYWdlID0gMTtcclxuJCgnLnBhZ2luYXRpb24nKVxyXG4uZmluZCgnbGknKVxyXG4uc2xpY2UoMSwgLTEpXHJcbi5yZW1vdmUoKTtcclxudmFyIHRybnVtID0gMDsgLy8gcmVzZXQgdHIgY291bnRlclxyXG52YXIgbWF4Um93cyA9IHBhcnNlSW50KCQodGhpcykudmFsKCkpOyAvLyBnZXQgTWF4IFJvd3MgZnJvbSBzZWxlY3Qgb3B0aW9uXHJcblxyXG5pZiAobWF4Um93cyA9PSA1MDAwKSB7XHJcbiQoJy5wYWdpbmF0aW9uJykuaGlkZSgpO1xyXG59IGVsc2Uge1xyXG4kKCcucGFnaW5hdGlvbicpLnNob3coKTtcclxufVxyXG5cclxudmFyIHRvdGFsUm93cyA9ICQodGFibGUgKyAnIHRib2R5IHRyJykubGVuZ3RoOyAvLyBudW1iZXJzIG9mIHJvd3NcclxuJCh0YWJsZSArICcgdHI6Z3QoMCknKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4vLyBlYWNoIFRSIGluICB0YWJsZSBhbmQgbm90IHRoZSBoZWFkZXJcclxudHJudW0rKzsgLy8gU3RhcnQgQ291bnRlclxyXG5pZiAodHJudW0gPiBtYXhSb3dzKSB7XHJcbi8vIGlmIHRyIG51bWJlciBndCBtYXhSb3dzXHJcblxyXG4kKHRoaXMpLmhpZGUoKTsgLy8gZmFkZSBpdCBvdXRcclxufVxyXG5pZiAodHJudW0gPD0gbWF4Um93cykge1xyXG4kKHRoaXMpLnNob3coKTtcclxufSAvLyBlbHNlIGZhZGUgaW4gSW1wb3J0YW50IGluIGNhc2UgaWYgaXQgLi5cclxufSk7IC8vICB3YXMgZmFkZSBvdXQgdG8gZmFkZSBpdCBpblxyXG5pZiAodG90YWxSb3dzID4gbWF4Um93cykge1xyXG4vLyBpZiB0ciB0b3RhbCByb3dzIGd0IG1heCByb3dzIG9wdGlvblxyXG52YXIgcGFnZW51bSA9IE1hdGguY2VpbCh0b3RhbFJvd3MgLyBtYXhSb3dzKTsgLy8gY2VpbCB0b3RhbChyb3dzL21heHJvd3MpIHRvIGdldCAuLlxyXG4vL1x0bnVtYmVycyBvZiBwYWdlc1xyXG5mb3IgKHZhciBpID0gMTsgaSA8PSBwYWdlbnVtOyApIHtcclxuLy8gZm9yIGVhY2ggcGFnZSBhcHBlbmQgcGFnaW5hdGlvbiBsaVxyXG4kKCcucGFnaW5hdGlvbiAjcHJldicpXHJcbi5iZWZvcmUoXHJcbic8bGkgZGF0YS1wYWdlPVwiJyArXHJcbmkgK1xyXG4nXCI+XFxcclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiPicgK1xyXG5pKysgK1xyXG4nPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPjwvYT5cXFxyXG4gICAgICAgICAgICA8L2xpPidcclxuKVxyXG4uc2hvdygpO1xyXG59IC8vIGVuZCBmb3IgaVxyXG59IC8vIGVuZCBpZiByb3cgY291bnQgPiBtYXggcm93c1xyXG4kKCcucGFnaW5hdGlvbiBbZGF0YS1wYWdlPVwiMVwiXScpLmFkZENsYXNzKCdhY3RpdmUnKTsgLy8gYWRkIGFjdGl2ZSBjbGFzcyB0byB0aGUgZmlyc3QgbGlcclxuJCgnLnBhZ2luYXRpb24gbGknKS5vbignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcclxuLy8gb24gY2xpY2sgZWFjaCBwYWdlXHJcbmV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbnZhciBwYWdlTnVtID0gJCh0aGlzKS5hdHRyKCdkYXRhLXBhZ2UnKTsgLy8gZ2V0IGl0J3MgbnVtYmVyXHJcblxyXG52YXIgbWF4Um93cyA9IHBhcnNlSW50KCQoJyNtYXhSb3dzJykudmFsKCkpOyAvLyBnZXQgTWF4IFJvd3MgZnJvbSBzZWxlY3Qgb3B0aW9uXHJcblxyXG5pZiAocGFnZU51bSA9PSAncHJldicpIHtcclxuaWYgKGxhc3RQYWdlID09IDEpIHtcclxucmV0dXJuO1xyXG59XHJcbnBhZ2VOdW0gPSAtLWxhc3RQYWdlO1xyXG59XHJcbmlmIChwYWdlTnVtID09ICduZXh0Jykge1xyXG5pZiAobGFzdFBhZ2UgPT0gJCgnLnBhZ2luYXRpb24gbGknKS5sZW5ndGggLSAyKSB7XHJcbnJldHVybjtcclxufVxyXG5wYWdlTnVtID0gKytsYXN0UGFnZTtcclxufVxyXG5cclxubGFzdFBhZ2UgPSBwYWdlTnVtO1xyXG52YXIgdHJJbmRleCA9IDA7IC8vIHJlc2V0IHRyIGNvdW50ZXJcclxuJCgnLnBhZ2luYXRpb24gbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7IC8vIHJlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBhbGwgbGlcclxuJCgnLnBhZ2luYXRpb24gW2RhdGEtcGFnZT1cIicgKyBsYXN0UGFnZSArICdcIl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7IC8vIGFkZCBhY3RpdmUgY2xhc3MgdG8gdGhlIGNsaWNrZWRcclxuLy8gJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHRcdFx0XHRcdC8vIGFkZCBhY3RpdmUgY2xhc3MgdG8gdGhlIGNsaWNrZWRcclxubGltaXRQYWdnaW5nKCk7XHJcbiQodGFibGUgKyAnIHRyOmd0KDApJykuZWFjaChmdW5jdGlvbigpIHtcclxuLy8gZWFjaCB0ciBpbiB0YWJsZSBub3QgdGhlIGhlYWRlclxyXG50ckluZGV4Kys7IC8vIHRyIGluZGV4IGNvdW50ZXJcclxuLy8gaWYgdHIgaW5kZXggZ3QgbWF4Um93cypwYWdlTnVtIG9yIGx0IG1heFJvd3MqcGFnZU51bS1tYXhSb3dzIGZhZGUgaWYgb3V0XHJcbmlmIChcclxudHJJbmRleCA+IG1heFJvd3MgKiBwYWdlTnVtIHx8XHJcbnRySW5kZXggPD0gbWF4Um93cyAqIHBhZ2VOdW0gLSBtYXhSb3dzXHJcbikge1xyXG4kKHRoaXMpLmhpZGUoKTtcclxufSBlbHNlIHtcclxuJCh0aGlzKS5zaG93KCk7XHJcbn0gLy9lbHNlIGZhZGUgaW5cclxufSk7IC8vIGVuZCBvZiBmb3IgZWFjaCB0ciBpbiB0YWJsZVxyXG59KTsgLy8gZW5kIG9mIG9uIGNsaWNrIHBhZ2luYXRpb24gbGlzdFxyXG5saW1pdFBhZ2dpbmcoKTtcclxufSlcclxuLnZhbCg1KVxyXG4uY2hhbmdlKCk7XHJcblxyXG4vLyBlbmQgb2Ygb24gc2VsZWN0IGNoYW5nZVxyXG5cclxuLy8gRU5EIE9GIFBBR0lOQVRJT05cclxufVxyXG5cclxuZnVuY3Rpb24gbGltaXRQYWdnaW5nKCl7XHJcbi8vIGFsZXJ0KCQoJy5wYWdpbmF0aW9uIGxpJykubGVuZ3RoKVxyXG5cclxuaWYoJCgnLnBhZ2luYXRpb24gbGknKS5sZW5ndGggPiA3ICl7XHJcbmlmKCAkKCcucGFnaW5hdGlvbiBsaS5hY3RpdmUnKS5hdHRyKCdkYXRhLXBhZ2UnKSA8PSAzICl7XHJcbiQoJy5wYWdpbmF0aW9uIGxpOmd0KDUpJykuaGlkZSgpO1xyXG4kKCcucGFnaW5hdGlvbiBsaTpsdCg1KScpLnNob3coKTtcclxuJCgnLnBhZ2luYXRpb24gW2RhdGEtcGFnZT1cIm5leHRcIl0nKS5zaG93KCk7XHJcbn1pZiAoJCgnLnBhZ2luYXRpb24gbGkuYWN0aXZlJykuYXR0cignZGF0YS1wYWdlJykgPiAzKXtcclxuJCgnLnBhZ2luYXRpb24gbGk6Z3QoMCknKS5oaWRlKCk7XHJcbiQoJy5wYWdpbmF0aW9uIFtkYXRhLXBhZ2U9XCJuZXh0XCJdJykuc2hvdygpO1xyXG5mb3IoIGxldCBpID0gKCBwYXJzZUludCgkKCcucGFnaW5hdGlvbiBsaS5hY3RpdmUnKS5hdHRyKCdkYXRhLXBhZ2UnKSkgIC0yICkgIDsgaSA8PSAoIHBhcnNlSW50KCQoJy5wYWdpbmF0aW9uIGxpLmFjdGl2ZScpLmF0dHIoJ2RhdGEtcGFnZScpKSAgKyAyICkgOyBpKysgKXtcclxuJCgnLnBhZ2luYXRpb24gW2RhdGEtcGFnZT1cIicraSsnXCJdJykuc2hvdygpO1xyXG5cclxufVxyXG5cclxufVxyXG59XHJcbn1cclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbi8vIEp1c3QgdG8gYXBwZW5kIGlkIG51bWJlciBmb3IgZWFjaCByb3dcclxuJCgndGFibGUgdHI6ZXEoMCknKS5wcmVwZW5kKCc8dGg+IElEIDwvdGg+Jyk7XHJcblxyXG52YXIgaWQgPSAwO1xyXG5cclxuJCgndGFibGUgdHI6Z3QoMCknKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5pZCsrO1xyXG4kKHRoaXMpLnByZXBlbmQoJzx0ZD4nICsgaWQgKyAnPC90ZD4nKTtcclxufSk7XHJcbn0pO1xyXG5cclxuLy8gIERldmVsb3BlZCBCeSBZYXNzZXIgTWFzXHJcbi8vIHlhc3Nlci5tYXMyQGdtYWlsLmNvbVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJBcGV4Q2hhcnRzIiwiZ2VuZXJhdGVEYXRhIiwiY291bnQiLCJ5cmFuZ2UiLCJpIiwic2VyaWVzIiwieCIsInRvU3RyaW5nIiwieSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1heCIsIm1pbiIsInB1c2giLCJvcHRpb25zIiwibmFtZSIsImRhdGEiLCJjaGFydCIsInR5cGUiLCJoZWlnaHQiLCJ3aWR0aCIsInBsb3RPcHRpb25zIiwiYmFyIiwiY29sb3JzIiwicmFuZ2VzIiwiZnJvbSIsInRvIiwiY29sb3IiLCJjb2x1bW5XaWR0aCIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwieWF4aXMiLCJ0aXRsZSIsInRleHQiLCJsYWJlbHMiLCJmb3JtYXR0ZXIiLCJ0b0ZpeGVkIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwicm90YXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInNwYXJrbGluZSIsInN0cm9rZSIsImN1cnZlIiwiZmlsbCIsIm9wYWNpdHkiLCJvcHRpb25zMiIsImNoYXJ0MiIsIm9wdGlvbnM0IiwidG9vbHRpcCIsImZpeGVkIiwiY2hhcnQ0IiwibGVnZW5kIiwic2hvdyIsImhlYXRtYXAiLCJjb2xvclNjYWxlIiwiYXhpc0JvcmRlciIsImF4aXNUaWNrcyIsInRpY2tBbW91bnQiLCJmbG9hdGluZyIsInN0eWxlIiwib2Zmc2V0WSIsIm9mZnNldFgiLCJvcHBvc2l0ZSIsImZvcm1hdCIsInBvc2l0aW9uIiwibGluZXMiLCJwYWRkaW5nIiwibGVmdCIsImdldFBhZ2luYXRpb24iLCJ0YWJsZSIsImxhc3RQYWdlIiwiJCIsIm9uIiwiZXZ0IiwiZmluZCIsInNsaWNlIiwicmVtb3ZlIiwidHJudW0iLCJtYXhSb3dzIiwicGFyc2VJbnQiLCJ2YWwiLCJoaWRlIiwidG90YWxSb3dzIiwibGVuZ3RoIiwiZWFjaCIsInBhZ2VudW0iLCJjZWlsIiwiYmVmb3JlIiwiYWRkQ2xhc3MiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2VOdW0iLCJhdHRyIiwidHJJbmRleCIsInJlbW92ZUNsYXNzIiwibGltaXRQYWdnaW5nIiwiY2hhbmdlIiwicHJlcGVuZCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==