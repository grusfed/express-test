import toolbarItemTpl from 'html-loader!./toolbarItemDrv.html';

function toolbarItemCtrl() {
  this.currentNavItem = 'page1';
  this.goto = function goto() {

  }
}

function toolbarItemDrv() {
	return {
		restrict: 'EA',
		template: toolbarItemTpl,
		replace: true,
    scope: {},
		controller: 'toolbarItemCtrl',
		controllerAs: 'vm',
		bindToController: true
	};
}

export {toolbarItemCtrl, toolbarItemDrv}
