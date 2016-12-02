function emailsCtrl(emails) {
	let vm = this;
	vm.data = {
		emails
	};
}

emailsCtrl.$inject = ['emails'];

export { emailsCtrl }