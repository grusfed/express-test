import './index.scss';

import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import { routeCnf } from './route.cnf';

import { catsCtrl } from './main/cats/catsCtrl';
import { catEditCtrl } from './main/cats/catEditCtrl';
import { catAddCtrl } from './main/cats/catAddCtrl';
import { catsSrv } from './main/cats/catsSrv';


import { emailsCtrl } from './main/emails/emails.ctrl';
import { emailsSrv } from './main/emails/emails.srv';

import { topMenuCtrl, topMenuDrv } from './topMenu/topMenu.drv';


angular.module('app', [ngAnimate, ngMaterial, uiRouter])
	.controller('catsCtrl', catsCtrl)
	.controller('catEditCtrl', catEditCtrl)
	.controller('catAddCtrl', catAddCtrl)
	.controller('emailsCtrl', emailsCtrl)
	.controller('topMenuCtrl', topMenuCtrl)
	.factory('catsSrv', catsSrv)
	.factory('emailsSrv', emailsSrv)
	.directive('topMenu', topMenuDrv)
	.config(routeCnf);

angular.bootstrap(window.document, ['app']);
