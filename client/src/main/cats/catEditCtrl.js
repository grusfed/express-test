function catEditCtrl($state, catsSrv,  cat) {
  let vm = this;
  vm.cat = cat;

  vm.submit = function (isValid) {

    function onResolve(cat) {
      console.log('updated: ' + cat);
      $state.go('cats');
    }

    function onReject(err) {
      console.log(err);
    }

    if (isValid) {
      console.log("cat updated");
      catsSrv.updateCat(vm.cat)
              .then(onResolve, onReject);
    } else {
      alert("Please correct the validation errors first.");
    }
  };

  vm.cancel = function () {
    $state.go('cats');
  };
}

catEditCtrl.$inject = ['$state', 'catsSrv', 'cat'];

export { catEditCtrl }
