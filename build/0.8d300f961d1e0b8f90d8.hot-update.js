webpackHotUpdate(0,{

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return catEditCtrl; });
function catEditCtrl($state, cat) {
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
//# sourceMappingURL=0.8d300f961d1e0b8f90d8.hot-update.js.map?hash=e08ce586a9f4d195dbd7