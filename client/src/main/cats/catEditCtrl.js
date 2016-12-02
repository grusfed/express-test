function catEditCtrl(cat) {
  let vm = this;
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

export { catEditCtrl }
