webpackHotUpdate(0,{

/***/ 64:
/***/ function(module, exports) {

module.exports = "<div class=cards> <h2 class=page-header>Cats</h2> <div class=card ng-repeat=\"cat in vm.data.cats track by $index\"> <header class=card-header ng-style=\"{backgroundImage: 'url('+cat.img+')'}\"> <a class=cat-link ui-sref=\"cat-edit({id: cat.id})\"> <h4 class=cat-name ng-bind=::cat.name></h4> </a> </header> <div class=card-body> <ul class=cat-info> <li><i class=\"glyphicon glyphicon-phone\"></i> {{::cat.age}}</li> <li><i class=\"glyphicon glyphicon-envelope\"></i> {{::cat.owner}}</li> </ul> </div> </div> <pre ng-bind=\"::vm.data.cats | json\"></pre> </div> ";

/***/ }

})
//# sourceMappingURL=0.237f07956ea27f3af15f.hot-update.js.map?hash=d8247200670c7eb7b36e