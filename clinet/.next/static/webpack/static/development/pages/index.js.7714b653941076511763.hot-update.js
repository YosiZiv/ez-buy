webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/containers/LandingPage.jsx":
/*!***********************************************!*\
  !*** ./components/containers/LandingPage.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandingPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "C:\\Users\\Marchi\\projects\\hackathon\\eazy-buy\\clinet\\components\\containers\\LandingPage.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      color: 'white',
      minHeight: '80vh'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    banner: {
      marginTop: '2em',
      display: 'flex',
      background: "url(https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center fixed",
      backgroundSize: 'cover',
      minHeight: '70vh',
      alignItems: 'strach',
      textAlign: 'center',
      boxShadow: '3px 3px 20px black',
      borderRadius: '6px',
      textShadow: '3px 3px 20px black'
    },
    container: {},
    bannerContent: {}
  };
});
function LandingPage() {
  _s();

  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.banner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.bannerContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, "ezBuy"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, "ezBuy"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, quaerat. Architecto animi illum sapiente blanditiis in. Tempore, ad ut dignissimos mollitia dolorem et, repellat soluta dolores possimus molestias neque laudantium?"), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, "Discover More"), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, "Join now")))));
}

_s(LandingPage, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = LandingPage;

var _c;

$RefreshReg$(_c, "LandingPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhaW5lcnMvTGFuZGluZ1BhZ2UuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImNvbG9yIiwibWluSGVpZ2h0IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsInRpdGxlIiwiYmFubmVyIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJ0ZXh0U2hhZG93IiwiY29udGFpbmVyIiwiYmFubmVyQ29udGVudCIsIkxhbmRpbmdQYWdlIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUUsVUFBRUMsS0FBRjtBQUFBLFNBQWU7QUFDekNDLFFBQUksRUFBRTtBQUNGQyxjQUFRLEVBQUUsQ0FEUjtBQUVGQyxXQUFLLEVBQUUsT0FGTDtBQUdGQyxlQUFTLEVBQUU7QUFIVCxLQURtQztBQU16Q0MsY0FBVSxFQUFFO0FBQ1JDLGlCQUFXLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFlLENBQWY7QUFETCxLQU42QjtBQVN6Q0MsU0FBSyxFQUFFO0FBQ0hOLGNBQVEsRUFBRTtBQURQLEtBVGtDO0FBWXpDTyxVQUFNLEVBQUU7QUFDSkMsZUFBUyxFQUFFLEtBRFA7QUFFSkMsYUFBTyxFQUFFLE1BRkw7QUFHSkMsZ0JBQVUsMklBSE47QUFJSkMsb0JBQWMsRUFBRSxPQUpaO0FBS0pULGVBQVMsRUFBRSxNQUxQO0FBTUpVLGdCQUFVLEVBQUUsUUFOUjtBQU9KQyxlQUFTLEVBQUUsUUFQUDtBQVFKQyxlQUFTLEVBQUUsb0JBUlA7QUFTSkMsa0JBQVksRUFBRSxLQVRWO0FBVUpDLGdCQUFVLEVBQUU7QUFWUixLQVppQztBQXdCekNDLGFBQVMsRUFBRSxFQXhCOEI7QUEyQnpDQyxpQkFBYSxFQUFFO0FBM0IwQixHQUFmO0FBQUEsQ0FBRixDQUE1QjtBQWdDZSxTQUFTQyxXQUFULEdBQ2Y7QUFBQTs7QUFDSSxNQUFNQyxPQUFPLEdBQUd4QixTQUFTLEVBQXpCO0FBRUEsU0FDSTtBQUFLLGFBQVMsRUFBRXdCLE9BQU8sQ0FBQ3JCLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFLLGFBQVMsRUFBRXFCLE9BQU8sQ0FBQ2IsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFYSxPQUFPLENBQUNILFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUcsT0FBTyxDQUFDRixhQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0T0FISixFQUlJO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixFQUtJO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixDQURKLENBREosQ0FGSixDQURKO0FBZ0JIOztHQXBCdUJDLFc7VUFFSnZCLFM7OztLQUZJdUIsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzcxNGI2NTM5NDEwNzY1MTE3NjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoICggdGhlbWUgKSA9PiAoIHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICc4MHZoJyxcclxuICAgIH0sXHJcbiAgICBtZW51QnV0dG9uOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoIDIgKSxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIGJhbm5lcjoge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzJlbScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IGB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzQ1NzcvcGV4ZWxzLXBob3RvLmpwZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWRgLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzcwdmgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdzdHJhY2gnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgYm94U2hhZG93OiAnM3B4IDNweCAyMHB4IGJsYWNrJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgICAgIHRleHRTaGFkb3c6ICczcHggM3B4IDIwcHggYmxhY2snLFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG5cclxuICAgIH0sXHJcbiAgICBiYW5uZXJDb250ZW50OiB7XHJcblxyXG4gICAgfVxyXG59ICkgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmdQYWdlKClcclxue1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIHsvKiBoZXJvIHNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhbm5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhbm5lckNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5lekJ1eTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPmV6QnV5PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVuaW0sIHF1YWVyYXQuIEFyY2hpdGVjdG8gYW5pbWkgaWxsdW0gc2FwaWVudGUgYmxhbmRpdGlpcyBpbi4gVGVtcG9yZSwgYWQgdXQgZGlnbmlzc2ltb3MgbW9sbGl0aWEgZG9sb3JlbSBldCwgcmVwZWxsYXQgc29sdXRhIGRvbG9yZXMgcG9zc2ltdXMgbW9sZXN0aWFzIG5lcXVlIGxhdWRhbnRpdW0/PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRpc2NvdmVyIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Sm9pbiBub3c8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==