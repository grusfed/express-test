webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var store      = __webpack_require__(23)('wks')
  , uid        = __webpack_require__(27)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ },
/* 1 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 5 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(13);
module.exports = __webpack_require__(4) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(3)
  , IE8_DOM_DEFINE = __webpack_require__(43)
  , toPrimitive    = __webpack_require__(59)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = {};

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys')
  , uid    = __webpack_require__(27);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 15 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 16 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(38);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 19 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(9)
  , ctx       = __webpack_require__(17)
  , hide      = __webpack_require__(6)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(5)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(44)
  , defined = __webpack_require__(10);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(10);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 27 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return catsCtrl; });
function catsCtrl(cats) {
	var vm = this;
	vm.data = {
		cats: cats
	};
}

catsCtrl.$inject = ['cats'];



/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return catsSrv; });
function catsSrv($q, $http) {
  var apiUrl = '/api/v1/cats';
  return {
    getCats: getCats
  };

  function getCats() {
    var deferred = $q.defer();
    $http.get(apiUrl).then(function (res) {
      console.log(res);
      return deferred.resolve(res.data);
    }, function (err) {
      console.log('error: ', err);
      deferred.reject(err);
    });
    return deferred.promise;
  }
}
catsSrv.$inject = ['$q', '$http'];



/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return emailsCtrl; });
function emailsCtrl(emails) {
	var vm = this;
	vm.data = {
		emails: emails
	};
}

emailsCtrl.$inject = ['emails'];



/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return emailsSrv; });

function emailsSrv($q, $http) {
	return {
		getEmails: getEmails
	};

	function getEmails() {
		var deferred = $q.defer(),
		    tpl = {
			from: 'user',
			subject: 'Some lorem subject',
			date: +new Date(),
			message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when'
		};

		var list = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from___default()({ length: 20 }, function (item, i) {
			return {
				from: tpl.from + i,
				subject: tpl.subject,
				date: tpl.date,
				message: tpl.message
			};
		});

		deferred.resolve(list);
		return deferred.promise;
	}
}
emailsSrv.$inject = ['$q', '$http'];



/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_loader_main_cats_catsView_html__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_loader_main_cats_catsView_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_html_loader_main_cats_catsView_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_html_loader_main_cats_catEditView_html__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_html_loader_main_cats_catEditView_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_html_loader_main_cats_catEditView_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_html_loader_main_emails_emails_html__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_html_loader_main_emails_emails_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_html_loader_main_emails_emails_html__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routeCnf; });




function routeCnf($stateProvider, $urlRouterProvider) {
	$stateProvider.state('cats', {
		url: '/',
		template: __WEBPACK_IMPORTED_MODULE_0_html_loader_main_cats_catsView_html___default.a,
		controller: 'catsCtrl',
		resolve: {
			cats: catResolver
		},
		controllerAs: 'vm'
	}).state('cat', {
		url: '/cats/:id',
		template: __WEBPACK_IMPORTED_MODULE_1_html_loader_main_cats_catEditView_html___default.a,
		controller: 'catEditCtrl',
		resolve: {
			cat: catEditResolver
		},
		controllerAs: 'vm'
	}).state('emails', {
		url: '/emails',
		template: __WEBPACK_IMPORTED_MODULE_2_html_loader_main_emails_emails_html___default.a,
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


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_loader_topMenu_drv_html__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_loader_topMenu_drv_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_html_loader_topMenu_drv_html__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return topMenuCtrl; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return topMenuDrv; });


function topMenuCtrl() {
	var vm = this;
}

function topMenuDrv() {
	return {
		restrict: 'EA',
		template: __WEBPACK_IMPORTED_MODULE_0_html_loader_topMenu_drv_html___default.a,
		replace: true,
		scope: {},
		controller: 'topMenuCtrl',
		controllerAs: 'vm',
		bindToController: true
	};
}



/***/ },
/* 34 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(61);
module.exports = __webpack_require__(9).Array.from;

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(24)
  , toLength  = __webpack_require__(25)
  , toIndex   = __webpack_require__(58);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(16)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var $defineProperty = __webpack_require__(7)
  , createDesc      = __webpack_require__(13);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(21)(function(){
  return Object.defineProperty(__webpack_require__(18)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(16);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(12)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(3);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var create         = __webpack_require__(51)
  , descriptor     = __webpack_require__(13)
  , setToStringTag = __webpack_require__(22)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var LIBRARY        = __webpack_require__(50)
  , $export        = __webpack_require__(20)
  , redefine       = __webpack_require__(56)
  , hide           = __webpack_require__(6)
  , has            = __webpack_require__(5)
  , Iterators      = __webpack_require__(12)
  , $iterCreate    = __webpack_require__(47)
  , setToStringTag = __webpack_require__(22)
  , getPrototypeOf = __webpack_require__(53)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports = true;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(3)
  , dPs         = __webpack_require__(52)
  , enumBugKeys = __webpack_require__(19)
  , IE_PROTO    = __webpack_require__(14)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(18)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(42).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(3)
  , getKeys  = __webpack_require__(55);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(5)
  , toObject    = __webpack_require__(26)
  , IE_PROTO    = __webpack_require__(14)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(5)
  , toIObject    = __webpack_require__(24)
  , arrayIndexOf = __webpack_require__(39)(false)
  , IE_PROTO     = __webpack_require__(14)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(54)
  , enumBugKeys = __webpack_require__(19);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15)
  , defined   = __webpack_require__(10);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(40)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(12);
module.exports = __webpack_require__(9).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var ctx            = __webpack_require__(17)
  , $export        = __webpack_require__(20)
  , toObject       = __webpack_require__(26)
  , call           = __webpack_require__(46)
  , isArrayIter    = __webpack_require__(45)
  , toLength       = __webpack_require__(25)
  , createProperty = __webpack_require__(41)
  , getIterFn      = __webpack_require__(60);

$export($export.S + $export.F * !__webpack_require__(49)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var $at  = __webpack_require__(57)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(48)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = "<form class=form-horizontal name=catForm> <fieldset> <legend>Cat Information</legend> <div class=form-group> <label class=\"col-md-2 control-label\" for=name>Name</label> <div class=col-md-4> <input class=form-control id=name name=name type=text placeholder=\"Cat Name\" ng-model=vm.cat.name required/> </div> </div> <div class=form-group> <label class=\"col-md-2 control-label\" for=age>Age</label> <div class=col-md-4> <input class=form-control id=age name=age type=text placeholder=\"Cat Age\" ng-model=vm.cat.age required/> </div> </div> <div class=form-group> <label class=\"col-md-2 control-label\" for=owner>Cat Owner</label> <div class=col-md-4> <input class=form-control id=owner name=owner type=text placeholder=\"Cat Owner\" ng-model=vm.cat.owner required/> </div> </div> <div class=form-group> <div class=\"col-md-4 col-md-offset-2\"> <span> <button class=\"btn btn-primary\" style=width:80px;margin-right:10px ng-click=vm.submit(catForm.$valid) ng-disabled=catForm.$invalid> Save </button> </span> <span> <button class=\"btn btn-default\" style=width:70px ng-click=vm.cancel()> Cancel </button> </span> </div> </div> </fieldset> </form> ";

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = "<div class=cards> <h2 class=page-header>Cats</h2> <div class=card ng-repeat=\"cat in vm.data.cats track by $index\"> <header class=card-header ng-style=\"{backgroundImage: 'url('+cat.img+')'}\"> <a ui-sref=\"catEdit({id: cat.id})\"><h4 class=cat-name ng-bind=::cat.name></h4> </a> </header> <div class=card-body> <ul class=cat-info> <li><i class=\"glyphicon glyphicon-phone\"></i> {{::cat.age}}</li> <li><i class=\"glyphicon glyphicon-envelope\"></i> {{::cat.owner}}</li> </ul> </div> </div> <pre ng-bind=\"::vm.data.cats | json\"></pre> </div> ";

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = "<div class=emails> <h2 class=page-header>Email</h2> <table class=\"table table-striped\"> <thead> <tr> <th>from</th> <th>date</th> <th>subject</th> </tr> </thead> <tbody> <tr ng-repeat=\"email in vm.data.emails track by $index\"> <td ng-bind=::email.from></td> <td ng-bind=\"::email.date | date\"></td> <td ng-bind=::email.subject></td> </tr> </tbody> </table> </div>";

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = "<nav> <ul class=\"nav nav-pills pull-right\"> <li role=presentation ui-sref-active=active> <a ui-sref=main>Cats</a> </li> <li role=presentation ui-sref-active=active> <a ui-sref=emails>Email 2</a> </li> </ul> </nav> ";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_ui_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_ui_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_ui_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__route_cnf__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_cats_catsCtrl__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_cats_catsSrv__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_emails_emails_ctrl__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_emails_emails_srv__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__topMenu_topMenu_drv__ = __webpack_require__(33);













__WEBPACK_IMPORTED_MODULE_1_angular___default.a.module('app', [__WEBPACK_IMPORTED_MODULE_2_angular_ui_router___default.a]).controller('catsCtrl', __WEBPACK_IMPORTED_MODULE_4__main_cats_catsCtrl__["a" /* catsCtrl */]).controller('emailsCtrl', __WEBPACK_IMPORTED_MODULE_6__main_emails_emails_ctrl__["a" /* emailsCtrl */]).controller('topMenuCtrl', __WEBPACK_IMPORTED_MODULE_8__topMenu_topMenu_drv__["a" /* topMenuCtrl */]).factory('catsSrv', __WEBPACK_IMPORTED_MODULE_5__main_cats_catsSrv__["a" /* catsSrv */]).factory('emailsSrv', __WEBPACK_IMPORTED_MODULE_7__main_emails_emails_srv__["a" /* emailsSrv */]).directive('topMenu', __WEBPACK_IMPORTED_MODULE_8__topMenu_topMenu_drv__["b" /* topMenuDrv */]).config(__WEBPACK_IMPORTED_MODULE_3__route_cnf__["a" /* routeCnf */]);

__WEBPACK_IMPORTED_MODULE_1_angular___default.a.bootstrap(window.document, ['app']);

/***/ }
],[67]);
//# sourceMappingURL=index.js.map?hash=67fdf16be93d72530aa9