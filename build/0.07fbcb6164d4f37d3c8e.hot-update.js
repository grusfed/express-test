webpackHotUpdate(0,{

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_ui_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_ui_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_ui_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__route_cnf__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_cats_catsCtrl__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_cats_catEditCtrl__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_cats_catsSrv__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_emails_emails_ctrl__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_emails_emails_srv__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__topMenu_topMenu_drv__ = __webpack_require__(33);














__WEBPACK_IMPORTED_MODULE_1_angular___default.a.module('app', [__WEBPACK_IMPORTED_MODULE_2_angular_ui_router___default.a]).controller('catsCtrl', __WEBPACK_IMPORTED_MODULE_4__main_cats_catsCtrl__["a" /* catsCtrl */]).controller('catEditCtrl', __WEBPACK_IMPORTED_MODULE_5__main_cats_catEditCtrl__["a" /* catEditCtrl */]).controller('emailsCtrl', __WEBPACK_IMPORTED_MODULE_7__main_emails_emails_ctrl__["a" /* emailsCtrl */]).controller('topMenuCtrl', __WEBPACK_IMPORTED_MODULE_9__topMenu_topMenu_drv__["a" /* topMenuCtrl */]).factory('catsSrv', __WEBPACK_IMPORTED_MODULE_6__main_cats_catsSrv__["a" /* catsSrv */]).factory('emailsSrv', __WEBPACK_IMPORTED_MODULE_8__main_emails_emails_srv__["a" /* emailsSrv */]).directive('topMenu', __WEBPACK_IMPORTED_MODULE_9__topMenu_topMenu_drv__["b" /* topMenuDrv */]).config(__WEBPACK_IMPORTED_MODULE_3__route_cnf__["a" /* routeCnf */]);

__WEBPACK_IMPORTED_MODULE_1_angular___default.a.bootstrap(window.document, ['app']);

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return catEditCtrl; });
function catEditCtrl(cat) {
  var vm = this;
  vm.cats = cat;

  vm.submit = function (isValid) {
    if (isValid) {
      console.log("save cat");
    } else {
      alert("Please correct the validation errors first.");
    }
  };

  vm.cancel = function () {
    $state.go('cats');
  };
}



/***/ }

})
//# sourceMappingURL=0.07fbcb6164d4f37d3c8e.hot-update.js.map?hash=8d300f961d1e0b8f90d8