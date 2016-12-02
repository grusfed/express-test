webpackHotUpdate(0,{

/***/ 64:
/***/ function(module, exports) {

module.exports = "<div class=cards> <h2 class=page-header>Cats</h2> <div class=card ng-repeat=\"cat in vm.data.cats track by $index\"> <header class=card-header ng-style=\"{backgroundImage: 'url('+cat.img+')'}\"> <a ui-sref=\"catEdit({id: cat.id})\"><h4 class=cat-name ng-bind=::cat.name></h4> </a> </header> <div class=card-body> <ul class=cat-info> <li><i class=\"glyphicon glyphicon-phone\"></i> {{::cat.age}}</li> <li><i class=\"glyphicon glyphicon-envelope\"></i> {{::cat.owner}}</li> </ul> </div> </div> <pre ng-bind=\"::vm.data.cats | json\"></pre> </div> ";

/***/ }

})
//# sourceMappingURL=0.6d6bb2e04e4d5aa11003.hot-update.js.map?hash=67fdf16be93d72530aa9