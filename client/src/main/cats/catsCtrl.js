function catsCtrl(catsSrv, cats) {
	let vm = this;
	vm.data = {
    cats
	};
  vm.deleteCat = deleteCat;

  function deleteCat(id) {

    function onResolve(cat) {
      console.log('deleted: ' + cat);
      vm.data.cats.splice(cat, 1);
    }

    function onReject(err) {
      console.log(err);
    }

    catsSrv
      .deleteCat(id)
      .then(onResolve, onReject);
  }
}

catsCtrl.$inject = ['catsSrv', 'cats'];

export { catsCtrl }
