import './index.scss';

import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import { routeCnf } from './route.cnf';

import { catsCtrl } from './main/cats/catsCtrl';
import { catEditCtrl } from './main/cats/catEditCtrl';
import { catAddCtrl } from './main/cats/catAddCtrl';
import { catsSrv } from './main/cats/catsSrv';

import { topMenuCtrl, topMenuDrv } from './topMenu/topMenu.drv';


angular.module('app', [ngMaterial, uiRouter])
	.controller('catsCtrl', catsCtrl)
	.controller('catEditCtrl', catEditCtrl)
	.controller('catAddCtrl', catAddCtrl)
	.controller('topMenuCtrl', topMenuCtrl)
	.factory('catsSrv', catsSrv)
	.directive('topMenu', topMenuDrv)
	.config(routeCnf);

angular.bootstrap(window.document, ['app']);
