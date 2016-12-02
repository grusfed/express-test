import catsTpl from 'html-loader!./main/cats/catsView.html';
import catEditTpl from 'html-loader!./main/cats/catEditView.html';
import emailsTpl from 'html-loader!./main/emails/emails.html';

function routeCnf($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('cats', {
			url: '/',
			template: catsTpl,
			controller: 'catsCtrl',
			resolve: {
				cats: catResolver
			},
			controllerAs: 'vm'
		})
    .state('cat', {
      url: '/cats/:id',
      template: catEditTpl,
      controller: 'catEditCtrl',
      resolve: {
        cat: catEditResolver
      },
      controllerAs: 'vm'
    })
		.state('emails', {
			url: '/emails',
			template: emailsTpl,
			controller: 'emailsCtrl',
			resolve: {
				emails: emailsResolver
			},
			controllerAs: 'vm'
		});

	$urlRouterProvider.otherwise('/');

  function catEditResolver(catsSrv) {
    return catsSrv.getCats();
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
export { routeCnf };
