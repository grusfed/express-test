import './index.scss';

import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import { routeCnf } from './route.cnf';

import { catsCtrl } from './main/cats/catsCtrl';
import { catEditCtrl } from './main/cats/catEditCtrl';
import { catAddCtrl } from './main/cats/catAddCtrl';
import { catsSrv } from './main/cats/catsSrv';

import { toolbarItemCtrl, toolbarItemDrv } from './toolbarItem/toolbarItemDrv';


angular.module('app', [ngAnimate, ngMaterial, uiRouter])
	.controller('catsCtrl', catsCtrl)
	.controller('catEditCtrl', catEditCtrl)
	.controller('catAddCtrl', catAddCtrl)
	.controller('toolbarItemCtrl', toolbarItemCtrl)
	.factory('catsSrv', catsSrv)
	.directive('toolbarItem', toolbarItemDrv)
	.config(routeCnf);

angular.bootstrap(window.document, ['app']);
