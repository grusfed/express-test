import topMenuTpl from 'html-loader!./topMenu.drv.html';

function topMenuCtrl() {
	let vm = this;
}

function topMenuDrv() {
	return {
		restrict: 'EA',
		template: topMenuTpl,
		replace: true,
		scope: {},
		controller: 'topMenuCtrl',
		controllerAs: 'vm',
		bindToController: true
	};
}

export {topMenuCtrl, topMenuDrv}