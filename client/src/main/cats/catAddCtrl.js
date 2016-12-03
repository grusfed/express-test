function catAddCtrl($state, catsSrv) {
  let vm = this;
  vm.cat = {};

  vm.submit = function (isValid) {

    function onResolve(cat) {
      console.log('added: ' + cat);
      $state.go('cats');
    }

    function onReject(err) {
      console.log(err);
    }

    if (isValid) {
      console.log("cat added");
      catsSrv.addCat(vm.cat)
              .then(onResolve, onReject);
    } else {
      alert("Please correct the validation errors first.");
    }
  };

  vm.cancel = function () {
    $state.go('cats');
  };
}

catAddCtrl.$inject = ['$state', 'catsSrv'];

export { catAddCtrl }
