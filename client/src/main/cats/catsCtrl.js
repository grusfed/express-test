function catsCtrl(cats) {
	let vm = this;
	vm.data = {
    cats
	};
}

catsCtrl.$inject = ['cats'];

export { catsCtrl }
