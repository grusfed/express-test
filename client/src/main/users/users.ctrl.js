function usersCtrl(users) {
	let vm = this;
	vm.data = {
		users
	};
}

usersCtrl.$inject = ['users'];

export { usersCtrl }