import catsTpl from 'html-loader!./main/cats/catsView.html';
import catEditTpl from 'html-loader!./main/cats/catEditView.html';
import catAddTpl from 'html-loader!./main/cats/catAddView.html';
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
    .state('editCat', {
      url: '/cats/:id/edit',
      template: catEditTpl,
      controller: 'catEditCtrl',
      resolve: {
        cat: catEditResolver
      },
      controllerAs: 'vm'
    })
    .state('newCat', {
      url: '/cats/new',
      template: catAddTpl,
      controller: 'catAddCtrl',
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

  function catEditResolver($stateParams, catsSrv) {
    var id = $stateParams.id;
    return catsSrv.getCatById(id);
  }
  catEditResolver.$inject = ['$stateParams', 'catsSrv'];

  function catResolver(catsSrv) {
    return catsSrv.getCats();
  }
  catResolver.$inject = ['catsSrv'];

  function emailsResolver(emailsSrv) {
    return emailsSrv.getEmails();
  }
  emailsResolver.$inject = ['emailsSrv'];
}
export { routeCnf };
