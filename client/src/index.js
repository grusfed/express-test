import './index.scss';
import angular from 'angular'
import uiRouter from 'angular-ui-router';
import { routeCnf } from './route.cnf';

import { catsCtrl } from './main/cats/catsCtrl';
import { catsSrv } from './main/cats/catsSrv';

import { emailsCtrl } from './main/emails/emails.ctrl';
import { emailsSrv } from './main/emails/emails.srv';

import { topMenuCtrl, topMenuDrv } from './topMenu/topMenu.drv';

angular.module('app', [uiRouter])
	.controller('catsCtrl', catsCtrl)
	.controller('emailsCtrl', emailsCtrl)
	.controller('topMenuCtrl', topMenuCtrl)
	.factory('catsSrv', catsSrv)
	.factory('emailsSrv', emailsSrv)
	.directive('topMenu', topMenuDrv)
	.config(routeCnf);

angular.bootstrap(window.document, ['app']);
