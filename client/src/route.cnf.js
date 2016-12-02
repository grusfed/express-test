import usersTpl from 'html-loader!./main/users/users.html';
import emailsTpl from 'html-loader!./main/emails/emails.html';

function routeCnf($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('main', {
			url: '/',
			template: usersTpl,
			controller: 'usersCtrl',
			resolve: {
				users: userResolver
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

	function userResolver(usersSrv) {
		return usersSrv.getUsers();
	}
	userResolver.$inject = ['usersSrv'];

	function emailsResolver(emailsSrv) {
		return emailsSrv.getEmails();
	}
	emailsResolver.$inject = ['emailsSrv'];
}

routeCnf.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routeCnf };