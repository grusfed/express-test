import topMenuTpl from 'html-loader!./topMenu.drv.html';

function topMenuCtrl() {
  this.currentNavItem = 'page1';
  this.goto = function goto() {

  }
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
