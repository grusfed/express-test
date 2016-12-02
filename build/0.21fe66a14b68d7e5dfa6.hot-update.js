webpackHotUpdate(0,{

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_loader_main_cats_catsView_html__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_loader_main_cats_catsView_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_html_loader_main_cats_catsView_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_html_loader_main_cats_catEditView_html__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_html_loader_main_cats_catEditView_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_html_loader_main_cats_catEditView_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_html_loader_main_emails_emails_html__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_html_loader_main_emails_emails_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_html_loader_main_emails_emails_html__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routeCnf; });




function routeCnf($stateProvider, $urlRouterProvider) {
	$stateProvider.state('cats', {
		url: '/',
		template: __WEBPACK_IMPORTED_MODULE_0_html_loader_main_cats_catsView_html___default.a,
		controller: 'catsCtrl',
		resolve: {
			cats: catResolver
		},
		controllerAs: 'vm'
	}).state('cat', {
		url: '/cats/:id',
		template: __WEBPACK_IMPORTED_MODULE_1_html_loader_main_cats_catEditView_html___default.a,
		controller: 'catEditCtrl',
		resolve: {
			cat: catEditResolver
		},
		controllerAs: 'vm'
	}).state('emails', {
		url: '/emails',
		template: __WEBPACK_IMPORTED_MODULE_2_html_loader_main_emails_emails_html___default.a,
		controller: 'emailsCtrl',
		resolve: {
			emails: emailsResolver
		},
		controllerAs: 'vm'
	});

	$urlRouterProvider.otherwise('/');

	function catEditResolver(catsSrv) {
		return catsSrv.getCatById();
	}
	catEditResolver.$inject = ['catsSrv'];

	function catResolver(catsSrv) {
		return catsSrv.getCats();
	}
	catResolver.$inject = ['catsSrv'];

	function emailsResolver(emailsSrv) {
		return emailsSrv.getEmails();
	}
	emailsResolver.$inject = ['emailsSrv'];
}

routeCnf.$inject = ['$stateProvider', '$urlRouterProvider'];


/***/ }

})
//# sourceMappingURL=0.21fe66a14b68d7e5dfa6.hot-update.js.map?hash=07fbcb6164d4f37d3c8e