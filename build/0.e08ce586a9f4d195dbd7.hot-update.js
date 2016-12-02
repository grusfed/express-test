webpackHotUpdate(0,{

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return catEditCtrl; });
function catEditCtrl($state, cat) {
  var vm = this;
  vm.cat = cat;

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
//# sourceMappingURL=0.e08ce586a9f4d195dbd7.hot-update.js.map?hash=079453cdf7df947bca8d