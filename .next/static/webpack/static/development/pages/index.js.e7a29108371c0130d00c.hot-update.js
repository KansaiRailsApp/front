webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/organisms/loginstatus.js":
/*!*********************************************!*\
  !*** ./components/organisms/loginstatus.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginStatus; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/app/components/organisms/loginstatus.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var LoginStatus =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LoginStatus, _Component);

  function LoginStatus(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginStatus);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginStatus).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginStatus, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      App.cable.subscriptions.create({
        channel: "ChatChannel"
      }, {
        received: function received(data) {
          _this.setState({
            messages: _this.state.messages.concat(data.message)
          });
        },
        speak: function speak(data) {
          return this.perform("speak", data);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1360303110",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "\u30E6\u30FC\u30B6\u30FC\u3068\u30ED\u30B0\u30A4\u30F3\u72B6\u6CC1")), __jsx("ul", {
        className: "jsx-1360303110" + " " + "login-status__body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("li", {
        className: "jsx-1360303110" + " " + "login-status__body__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__body__item__image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("img", {
        src: "/images/star.jpeg",
        className: "jsx-1360303110",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__body__item__name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "\u540D\u524D"), __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__body__item__status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-1360303110",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }))), __jsx("li", {
        className: "jsx-1360303110" + " " + "login-status__body__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__body__item__image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("img", {
        src: "/images/star.jpeg",
        className: "jsx-1360303110",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__body__item__name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "\u540D\u524D"), __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__body__item__status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-1360303110",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1360303110",
        __self: this
      }, ".login-status.jsx-1360303110{width:280px;}.login-status__header.jsx-1360303110{padding:20px;text-align:center;border-bottom:1px solid #ccc;}.login-status__body.jsx-1360303110{padding:20px;}.login-status__body__item.jsx-1360303110{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:20px;}.login-status__body__item__image.jsx-1360303110{width:40px;height:40px;padding-right:10px;}.login-status__body__item__image.jsx-1360303110 img.jsx-1360303110{width:100%;height:100%;obect-fit:cover;border-radius:100px;}.login-status__body__item__name.jsx-1360303110{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:170px;}.login-status__body__item__status.jsx-1360303110{width:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.login-status__body__item__status.jsx-1360303110 span.jsx-1360303110{display:block;border:1px solid #ccc;width:10px;height:10px;border-radius:10px;color:green;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvbG9naW5zdGF0dXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUQ0QixBQUdpQyxBQUdDLEFBS0EsQUFHQSxBQUlGLEFBS0EsQUFNRSxBQUtGLEFBS0csV0FwQkYsQUFLQSxBQVdDLENBL0JqQixDQUdzQixBQUt0QixDQTRCMEIsU0FwQkgsQUFLSCxRQWpCYSxLQWlDbEIsR0FmUyxHQUx4QixLQXFCZ0IsWUFmaEIsQUFnQnVCLENBbEN2QixjQU11QixBQWVBLElBY1AsT0FSTyxLQVN2QixHQTdCQSwwRUFlZ0IsV0FNaEIsQ0FMQSIsImZpbGUiOiIvYXBwL2NvbXBvbmVudHMvb3JnYW5pc21zL2xvZ2luc3RhdHVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5TdGF0dXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgQXBwLmNhYmxlLnN1YnNjcmlwdGlvbnMuY3JlYXRlKFxuICAgICAgICAgIHsgY2hhbm5lbDogXCJDaGF0Q2hhbm5lbFwiIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVjZWl2ZWQ6IGRhdGEgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogdGhpcy5zdGF0ZS5tZXNzYWdlcy5jb25jYXQoZGF0YS5tZXNzYWdlKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGVhazogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtKFwic3BlYWtcIiwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1zdGF0dXNfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD7jg6bjg7zjgrbjg7zjgajjg63jgrDjgqTjg7Pnirbms4E8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxvZ2luLXN0YXR1c19fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9naW4tc3RhdHVzX19ib2R5X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXN0YXR1c19fYm9keV9faXRlbV9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltYWdlcy9zdGFyLmpwZWcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tc3RhdHVzX19ib2R5X19pdGVtX19uYW1lXCI+5ZCN5YmNPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXN0YXR1c19fYm9keV9faXRlbV9fc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsb2dpbi1zdGF0dXNfX2JvZHlfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tc3RhdHVzX19ib2R5X19pdGVtX19pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1hZ2VzL3N0YXIuanBlZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1zdGF0dXNfX2JvZHlfX2l0ZW1fX25hbWVcIj7lkI3liY08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tc3RhdHVzX19ib2R5X19pdGVtX19zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAubG9naW4tc3RhdHVzIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9naW4tc3RhdHVzX19oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9naW4tc3RhdHVzX19ib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ2luLXN0YXR1c19fYm9keV9faXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dpbi1zdGF0dXNfX2JvZHlfX2l0ZW1fX2ltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ2luLXN0YXR1c19fYm9keV9faXRlbV9faW1hZ2UgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb2JlY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dpbi1zdGF0dXNfX2JvZHlfX2l0ZW1fX25hbWUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dpbi1zdGF0dXNfX2JvZHlfX2l0ZW1fX3N0YXR1cyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9naW4tc3RhdHVzX19ib2R5X19pdGVtX19zdGF0dXMgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=/app/components/organisms/loginstatus.js */"));
    }
  }]);

  return LoginStatus;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.e7a29108371c0130d00c.hot-update.js.map