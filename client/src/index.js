import './index.scss';
import angular from 'angular'
import uiRouter from 'angular-ui-router';
import { routeCnf } from './route.cnf';

import { usersCtrl } from './main/users/users.ctrl';
import { usersSrv } from './main/users/users.srv';

import { emailsCtrl } from './main/emails/emails.ctrl';
import { emailsSrv } from './main/emails/emails.srv';

import { topMenuCtrl, topMenuDrv } from './topMenu/topMenu.drv';

angular.module('app', [uiRouter])
	.controller('usersCtrl', usersCtrl)
	.controller('emailsCtrl', emailsCtrl)
	.controller('topMenuCtrl', topMenuCtrl)
	.factory('usersSrv', usersSrv)
	.factory('emailsSrv', emailsSrv)
	.directive('topMenu', topMenuDrv)
	.config(routeCnf);

angular.bootstrap(window.document, ['app']);