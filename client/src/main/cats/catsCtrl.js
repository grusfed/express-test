function catsCtrl(catsSrv, cats) {
	let vm = this;
	vm.data = {
    cats
	};
  vm.deleteCat = deleteCat;

  function deleteCat(id) {

    function onResolve(deletedId) {

      let index = vm.data.cats.findIndex((el, ind, arr) => el.id === deletedId);
      if (-1 !== index) {
        console.log('deleted: ' + vm.data.cats[index]);
        vm.data.cats.splice(index, 1);
      }
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
