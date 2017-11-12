/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class IModalParams {
}
/* unused harmony export IModalParams */

class ModalParams {
    constructor(componentId, 
        // public parentId?: string,
        title) {
        this.componentId = componentId;
        this.title = title;
    }
}
/* unused harmony export ModalParams */

class ModalComponent {
    constructor(name, parent) {
        this.name = name;
        this.params = new ModalComponentParams(parent);
    }
}
/* unused harmony export ModalComponent */

class ModalComponentParams {
    constructor(parent, title) {
        this.parent = parent;
        this.title = title;
    }
}
/* unused harmony export ModalComponentParams */

class ModalBase {
    get componentName() {
        let value = (this.component != null) ? this.component.name : undefined;
        return value;
    }
    constructor(componentName, componentId) {
        this.component = new ModalComponent(componentName);
        this.componentId = componentId;
        this.title = '';
        // if (params.parentId != null) {
        //     this.componentId = `${params.parentId}-${params.componentId}`;
        // } else {
        //     this.componentId = params.componentId;
        // }
        // if (params.title != null) {
        //     this.title = params.title;
        // } else {
        //     this.title = '';
        // }
        // console.log("componentName=%o, params=%o, this=%o", componentName, params, this);
        console.log("componentName=%o, componentId=%o, this=%o", componentName, componentId, this);
    }
    show(params) {
        let options = {
            backdrop: "static",
            show: true,
            keyboard: true,
        };
        console.log("params=%o, options=%o", params, options);
        $(`#${this.componentId}`).modal(options);
    }
    onCreateViewModel(params) {
        this.component.params = params;
        let componentId;
        let title;
        if (params != null) {
            if (params.parent != null) {
                componentId = `${params.parent.componentId}_${this.componentId}`;
            }
            if (params.title != null) {
                title = params.title;
            }
        }
        if (componentId == null) {
            componentId = `${this.componentName}-id`;
        }
        if (title == null) {
            title = '';
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ModalBase;



/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_components_Application_Application__ = __webpack_require__(4);

$(() => {
    let vm = new __WEBPACK_IMPORTED_MODULE_0__view_components_Application_Application__["a" /* default */]();
    ko.applyBindings(vm, $("html")[0]);
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FlexGridComponent_FlexGridComponent__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TopComponent_TopComponent__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CenterComponent_CenterComponent__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BottomComponent_BottomComponent__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ParentModal_ParentModal__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bindings_FlexGridBindingHandler__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_DemoData__ = __webpack_require__(24);





/** コンポーネント名 */


const COMPONENT_NAME = "application";
ko.bindingHandlers.exFlexGrid = new __WEBPACK_IMPORTED_MODULE_5__bindings_FlexGridBindingHandler__["a" /* FlexGridBindingHandler */]();
class Application {
    constructor() {
        this.component = COMPONENT_NAME;
        // グリッド
        this.flexGridComponent = new __WEBPACK_IMPORTED_MODULE_0__FlexGridComponent_FlexGridComponent__["a" /* default */]();
        // 上
        this.topComponent = new __WEBPACK_IMPORTED_MODULE_1__TopComponent_TopComponent__["a" /* default */]();
        // 中央
        this.centerComponent = new __WEBPACK_IMPORTED_MODULE_2__CenterComponent_CenterComponent__["a" /* default */]();
        // 左
        this.bottomComponent = new __WEBPACK_IMPORTED_MODULE_3__BottomComponent_BottomComponent__["a" /* default */]();
        // モーダル
        this.parentModal = new __WEBPACK_IMPORTED_MODULE_4__ParentModal_ParentModal__["a" /* default */]();
        ko.track(this);
    }
    onClickShowModalBtn(self, event) {
        console.log("self=%o, event=%o", self, event);
        this.parentModal.show();
    }
    onClickLoadGridDataButton(self, event) {
        console.log("self=%o, event=%o", self, event);
        // let rowItems: DemoRow = [];
        let rowItems = Array.from(Array(100).keys()).map((i) => {
            let row = new __WEBPACK_IMPORTED_MODULE_6__entities_DemoData__["a" /* DemoRow */]();
            row.id = i + 1;
            row.active = true;
            row.country = `country${i + 1}`;
            row.date = new Date();
            row.amount = (i + 1) * 1000;
            return row;
        });
        console.log("rowItems=%o", rowItems);
        this.flexGridComponent.setDataSource(rowItems);
    }
    // onClickDisplayBtn(target: this, event: any) {
    //     let message = `text1=${this.text1}, text2=${this.text2}, textArea1=${this.textArea1}, radio1=${this.radio1}, checkBoxCheckes=${this.checkBoxCheckes}`;
    //     alert(message);
    // }
    onCreateViewModel(params) {
        console.log("Application#onCreateViewModel(): params=%o", params);
        Split(['#subtree', '#main-contents'], {
            sizes: [15, 85],
            minSize: 100,
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Application;

__webpack_require__(25);
// require("./images/split/horizontal.png");
// require("./images/split/vertical.png");
ko.components.register(COMPONENT_NAME, {
    template: __webpack_require__(27),
    viewModel: {
        createViewModel(params, componentInfo) {
            console.log("params=%o", params);
            let vm;
            if (params instanceof Application) {
                vm = params;
            }
            else {
                vm = new Application();
                let options = params ? params.options : undefined;
                vm.onCreateViewModel(options);
                // if (params == null) {
                //     vm = new Application();
                //     vm.onCreateViewModel(params.options);
                // } else {
                //     vm = params.options;
                // }
            }
            return vm;
        }
    }
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FlexGrid_FlexGrid__ = __webpack_require__(6);

const COMPONENT_NAME = "ex-flex-grid";
const COMPONENT_ID = COMPONENT_NAME;
class FlexGridComponent {
    /** グリッド */
    get flexGrid() {
        return this._flexGrid;
    }
    /**
     * コンストラクタ
     */
    constructor() {
        this.component = COMPONENT_NAME;
        console.log(this.component);
        // ko.track(this);
    }
    /**
     * グリッドのコンポーネントが初期化された時の処理
     * @param self グリッドのコンポーネント
     * @param rawFlexGrid グリッド本体
     * @param args 引数
     */
    onInitialized(self, rawFlexGrid, args) {
        console.log("self=%o, rawFlexGrid=%o, args=%o", self, rawFlexGrid, args);
        self._flexGrid = self.createFlexGrid(rawFlexGrid);
    }
    createFlexGrid(rawFlexGrid) {
        let options = {
            autoGenerateColumns: false,
            columns: [
                { binding: 'id', header: 'ID' },
                { binding: 'country', header: 'country' },
                { binding: 'date', header: 'date' },
                { binding: 'amount', header: 'amount' },
                { binding: 'active', header: 'active' },
            ],
        };
        console.log("options=%o", options);
        // グリッドの初期化
        rawFlexGrid.initialize(options);
        rawFlexGrid.itemsSource = new wijmo.collections.CollectionView();
        // グリッドのインスタンス生成
        let flexGrid = new __WEBPACK_IMPORTED_MODULE_0__FlexGrid_FlexGrid__["a" /* FlexGrid */](rawFlexGrid);
        return flexGrid;
    }
    // protected createColumns(): Column[] {
    //     var columns: Column[] = [
    //         new Column({ binding: 'id', header: 'ID' }),
    //         new Column({ binding: 'country', header: 'country' }),
    //         new Column({ binding: 'Date', header: 'Date' }),
    //         new Column({ binding: 'amount', header: 'amount' }),
    //         new Column({ binding: 'active', header: 'active' }),
    //     ];
    //     return columns;
    // }
    /**
     * グリッドのデータを設定
     * @param data グリッドのデータ
     */
    setDataSource(data) {
        if (this._flexGrid) {
            this._flexGrid.setDataSource(data);
        }
        else {
            console.log("this._flexGrid is " + this._flexGrid);
        }
    }
    /**
     * インスタンスが生成された時の処理
     */
    onCreateViewModel(params) {
        console.log("FlexGridComponent#onCreateViewModel(): params=%o", params);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlexGridComponent;

__webpack_require__(7);
ko.components.register(COMPONENT_NAME, {
    template: __webpack_require__(10),
    viewModel: {
        createViewModel(params, componentInfo) {
            console.log("params=%o", params);
            let vm;
            if (params instanceof FlexGridComponent) {
                vm = params;
            }
            else {
                let options = params ? params.options : undefined;
                vm = new FlexGridComponent();
                vm.onCreateViewModel(options);
                // if (params != null && params.options != null) {
                //     vm = params.options;
                // } else {
                //     vm = new FlexGridComponent();
                //     vm.onCreateViewModel();
                // }
            }
            return vm;
        }
    }
});
// FlexGridComponent.register("./FlexGridComponent.html", "FlexGridComponent.css");


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Column extends wijmo.grid.Column {
    constructor(options) {
        super(options);
    }
}
/* unused harmony export Column */

class Row extends wijmo.grid.Row {
    constructor(dataItem) {
        super(dataItem);
    }
}
/* unused harmony export Row */

class FlexGrid {
    constructor(rawFlexGrid) {
        this.raw = rawFlexGrid;
    }
    get itemsSource() {
        return this.raw.itemsSource;
    }
    initialize(options) {
        this.raw.initialize(options);
        this.raw.itemsSource = new wijmo.collections.CollectionView();
    }
    setDataSource(data) {
        let src = [];
        if (data != null && data.length > 0) {
            src.push(...data);
        }
        this.itemsSource.sourceCollection = src;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlexGrid;



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!./FlexGridComponent.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!./FlexGridComponent.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".flex-grid .wj-flexgrid {\r\n    min-height: 100px;\r\n}", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ex-flex-grid\">\r\n    <div data-bind=\"wjFlexGrid: { initialized: onInitialized }\"></div>\r\n\r\n    <!-- <wj-flex-grid style=\"height:300px\" items-source=\"itemsSource\" auto-generate-columns=\"false\"> -->\r\n    <!-- <div data-bind=\"wjFlexGrid: { 'initialized': 'onInitialized', 'auto-generate-columns': false }\"> -->\r\n    <!-- autoGenerateColumns -->\r\n    <!-- <div data-bind=\"exFlexGrid: 'customBindings', wjFlexGrid: { initialized: onInitialized, 'auto-generate-columns': false }\"> -->\r\n    <!-- <div data-bind=\"exFlexGrid: 'customBindings', wjFlexGrid: { initialized: onInitialized, autoGenerateColumns: false }\"> -->\r\n    <!-- <div data-bind=\"wjFlexGrid: { initialized: onInitialized }\">\r\n        <div data-bind: \"wjFlexGridColumn: { binding:'id', header:'ID' }\"></div>\r\n        <div data-bind: \"wjFlexGridColumn: { binding:'country', header:'country' }\"></div>\r\n        <div data-bind: \"wjFlexGridColumn: { binding:'Date', header:'Date' }\"></div>\r\n        <div data-bind: \"wjFlexGridColumn: { binding:'amount', header:'amount' }\"></div>\r\n        <div data-bind: \"wjFlexGridColumn: { binding:'active', header:'active' }\"></div>\r\n    </div> -->\r\n    <!-- <wj-flex-grid exFlexGrid=\"customBindings\" initialized=\"onInitialized\" auto-generate-columns=\"false\">\r\n        <wj-flex-grid-column binding=\"'id'\" header=\"'ID'\"></wj-flex-grid-column>\r\n        <wj-flex-grid-column binding=\"'country'\" header=\"'Country'\"></wj-flex-grid-column>\r\n        <wj-flex-grid-column binding=\"'date'\" header=\"'Date'\"></wj-flex-grid-column>\r\n        <wj-flex-grid-column binding=\"'amount'\" header=\"'Amount'\"></wj-flex-grid-column>\r\n        <wj-flex-grid-column binding=\"'active'\" header=\"'Active'\"></wj-flex-grid-column>\r\n    </wj-flex-grid> -->\r\n</div>";

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** コンポーネント名 */
const COMPONENT_NAME = "top-component";
class TopComponent {
    constructor() {
        this.component = COMPONENT_NAME;
        this.text1 = "";
        this.text2 = "";
        this.textArea1 = "";
        this.radio1 = "";
        this.checkBoxCheckes = [];
        ko.track(this);
    }
    onCreateViewModel(params) {
        console.log("TopComponent#onCreateViewModel(): params=%o", params);
    }
    onClickDisplayBtn(target, event) {
        let message = this.createDisplayMesasge();
        alert(message);
    }
    callService() {
        try {
            console.log('callService START');
            let promise = new Promise(() => {
                let dummy = new DummyData('value1');
                console.log('callService:dummy=%o', dummy.toString());
                return dummy;
            });
            return promise;
        }
        finally {
            console.log('callService END');
        }
    }
    createData() {
        try {
            console.log('createData START');
            let promise = this.callService().then((data) => {
                console.log('createData:data=%o', data.toString());
                let tuple = [data, 'createData'];
                return tuple;
            });
            return promise;
        }
        finally {
            console.log('createData END');
        }
    }
    onClickPromiseTestBtn(target, event) {
        console.debug('onClickPromiseTestBtn START');
        // alert('onClickPromiseTestBtn START');
        let promise = this.createData().then((data) => {
            // func(dumy)
            let [dummy, str] = data;
            console.log('1:dummy=%o, str=%o', dummy.toString(), str);
            dummy.key2 = 'value22';
            console.log('2-1:dummy=%o, str=%o', dummy.toString(), str);
            return dummy;
        });
        promise.then((data) => {
            console.log('2-2:data=%o', data.toString());
            data.key3 = 'value333';
            console.log('3-1:data=%o', data.toString());
            return data;
        }).then((data) => {
            console.debug('then-3-2:data=%o', data.toString());
            data.key4 = 'value4444';
            console.debug('throw-4 data=%o', data.toString());
            throw data;
        }).then((data) => {
            console.debug('then:data=%o', data);
        }).catch((data) => {
            console.error('catch:data=%o', data.toString());
        });
        console.debug('onClickPromiseTestBtn END');
    }
    onClickTupleTestBtn(target, event) {
        let promise = new Promise((resolve) => {
            let list = [...Array(5).keys()].map((i) => {
                return new DummyData(`val_${i}`, '', '', '', i);
            });
            console.log('list=%o', list);
            resolve(list);
        }).then((list) => {
            console.log('then');
            let promiseList = list.map((dummy) => {
                return new Promise((resolve) => {
                    let data = [dummy, dummy.key1 + '_str1'];
                    console.log('list.map - new Promise: data=%o', data);
                    resolve(data);
                }).then(([dumy, str]) => {
                    console.log('list.map - then: dumy=%o, str=%o', dumy, str);
                    let num = (dummy.num != undefined) ? dummy.num : -1;
                    let data = [dummy, str, num];
                    return data;
                });
            });
            console.log('promiseList=%o', promiseList);
            let allList = Promise.all(promiseList);
            console.log('allList=%o', allList);
            return allList;
        });
        promise.then((list) => {
            console.debug('promise.then: list', list);
            return list.map(data => {
                let [dummy, str, num] = data;
                let newData = [dummy, str, num, dummy.key1 + '_str2'];
                console.log('Promise.all: newData', newData);
                return newData;
            });
        }).then((list) => {
            list.forEach((data) => {
                console.debug('promise.then - last: data', data);
            });
            throw list;
        }).catch((list) => {
            console.error(list);
        });
        // promise.then((data) => {
        //     console.debug('promise.then: data', data);
        // });
    }
    createDisplayMesasge() {
        let buff = [];
        buff.push(`text1=${this.text1}`);
        buff.push(`text2=${this.text2}`);
        buff.push(`textArea1=${this.textArea1}`);
        buff.push(`radio1=${this.radio1}`);
        buff.push(`checkBoxCheckes=${this.checkBoxCheckes}`);
        let message = buff.join(", ");
        return message;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TopComponent;

class DummyData {
    // key1: string
    // key2: string
    // key3: string
    constructor(key1, key2, key3, key4, num) {
        this.key1 = key1;
        this.key2 = key2;
        this.key3 = key3;
        this.key4 = key4;
        this.num = num;
    }
    toString() {
        return `key1=${this.key1},key2=${this.key2},key3=${this.key3},key4=${this.key4},num=${this.num}`;
    }
}
// require("./Application.css");
// require("./images/split/horizontal.png");
// require("./images/split/vertical.png");
ko.components.register(COMPONENT_NAME, {
    template: __webpack_require__(12),
    viewModel: {
        createViewModel(params, componentInfo) {
            console.log("params=%o", params);
            let vm;
            if (params instanceof TopComponent) {
                vm = params;
            }
            else {
                let options = params ? params.options : undefined;
                vm = new TopComponent();
                vm.onCreateViewModel(options);
                // if (params == null) {
                //     vm = new TopComponent();
                //     vm.onCreateViewModel();
                // } else {
                //     vm = params.options;
                // }
            }
            return vm;
        }
    }
});


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div>\r\n        <button data-bind=\"event: { click: onClickPromiseTestBtn }\">Promise Test</button>\r\n    </div>\r\n    <div>\r\n        <button data-bind=\"event: { click: onClickTupleTestBtn }\">Tuple Test</button>\r\n    </div>\r\n    <div>\r\n        <label>text1:\r\n            <input data-bind=\"value: text1\">\r\n        </label>\r\n    </div>\r\n    <div>\r\n        <label>text2:\r\n            <input data-bind=\"textInput: text2\">\r\n        </label>\r\n    </div>\r\n    <div>\r\n        <label>textArea1:\r\n            <textarea data-bind=\"textInput: textArea1\"></textarea>\r\n        </label>\r\n    </div>\r\n    <div>\r\n        <label>radio1=1:\r\n            <input type=\"radio\" name=\"radioGroup\" data-bind=\"checked: radio1\" value=\"radio1\">\r\n        </label>\r\n        <label>radio1=2:\r\n            <input type=\"radio\" name=\"radioGroup\" data-bind=\"checked: radio1\" value=\"radio2\">\r\n        </label>\r\n        <label>radio1=3:\r\n            <input type=\"radio\" name=\"radioGroup\" data-bind=\"checked: radio1\" value=\"radio3\">\r\n        </label>\r\n    </div>\r\n\r\n    <div>\r\n        <label>checkBox=1:\r\n            <input type=\"checkbox\" data-bind=\"checked: checkBoxCheckes\" value=\"checkbox1\">\r\n        </label>\r\n        <label>checkBox=2:\r\n            <input type=\"checkbox\" data-bind=\"checked: checkBoxCheckes\" value=\"checkbox2\">\r\n        </label>\r\n        <label>checkBox=3:\r\n            <input type=\"checkbox\" data-bind=\"checked: checkBoxCheckes\" value=\"checkbox3\">\r\n        </label>\r\n    </div>\r\n\r\n    <button data-bind=\"event: { click: onClickDisplayBtn }\">表示</button>\r\n</div>";

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** コンポーネント名 */
const COMPONENT_NAME = "center-component";
class CenterComponent {
    constructor() {
        this.component = COMPONENT_NAME;
        this.text1 = "";
        this.text2 = "";
        this.textArea1 = "";
        this.radio1 = "";
        this.checkBoxCheckes = [];
        ko.track(this);
    }
    onCreateViewModel(params) {
        console.log("CenterComponent#onCreateViewModel(): params=%o", params);
    }
    onClickDisplayBtn(target, event) {
        let message = this.createDisplayMesasge();
        alert(message);
    }
    createDisplayMesasge() {
        let buff = [];
        buff.push(`text1=${this.text1}`);
        buff.push(`text2=${this.text2}`);
        buff.push(`textArea1=${this.textArea1}`);
        buff.push(`radio1=${this.radio1}`);
        buff.push(`checkBoxCheckes=${this.checkBoxCheckes}`);
        let message = buff.join(", ");
        return message;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CenterComponent;

// require("./Application.css");
// require("./images/split/horizontal.png");
// require("./images/split/vertical.png");
ko.components.register(COMPONENT_NAME, {
    template: __webpack_require__(14),
    viewModel: {
        createViewModel(params, componentInfo) {
            console.log("params=%o", params);
            let vm;
            if (params instanceof CenterComponent) {
                vm = params;
            }
            else {
                vm = new CenterComponent();
                let options = params ? params.options : undefined;
                vm.onCreateViewModel(options);
                // vm.onCreateViewModel(params.options);
                // if (params == null) {
                //     vm = new CenterComponent();
                //     vm.onCreateViewModel();
                // } else {
                //     vm = params.options;
                // }
            }
            return vm;
        }
    }
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div>\r\n        <label>text1:<input data-bind=\"value: text1\"></label>\r\n    </div>\r\n    <div>\r\n        <label>text2:<input data-bind=\"textInput: text2\"></label>\r\n    </div>\r\n    <div>\r\n        <label>textArea1:<textarea data-bind=\"textInput: textArea1\"></textarea></label>\r\n    </div>\r\n    <div>\r\n        <label>radio1=1:<input type=\"radio\" name=\"radioGroup\" data-bind=\"checked: radio1\" value=\"radio1\"></label>\r\n        <label>radio1=2:<input type=\"radio\" name=\"radioGroup\" data-bind=\"checked: radio1\" value=\"radio2\"></label>\r\n        <label>radio1=3:<input type=\"radio\" name=\"radioGroup\" data-bind=\"checked: radio1\" value=\"radio3\"></label>\r\n    </div>\r\n\r\n    <div>\r\n        <label>checkBox=1:<input type=\"checkbox\" data-bind=\"checked: checkBoxCheckes\" value=\"checkbox1\"></label>\r\n        <label>checkBox=2:<input type=\"checkbox\" data-bind=\"checked: checkBoxCheckes\" value=\"checkbox2\"></label>\r\n        <label>checkBox=3:<input type=\"checkbox\" data-bind=\"checked: checkBoxCheckes\" value=\"checkbox3\"></label>\r\n    </div>\r\n\r\n    <button data-bind=\"event: { click: onClickDisplayBtn }\">表示</button>\r\n</div>";

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** コンポーネント名 */
const COMPONENT_NAME = "bottom-component";
class BottomComponent {
    constructor() {
        this.component = COMPONENT_NAME;
        this.text1 = "";
        this.text2 = "";
        this.textArea1 = "";
        this.radio1 = "";
        this.checkBoxCheckes = [];
        ko.track(this);
    }
    onCreateViewModel(params) {
        console.log("BottomComponent#onCreateViewModel(): params=%o", params);
    }
    onClickDisplayBtn(target, event) {
        let message = this.createDisplayMesasge();
        alert(message);
    }
    createDisplayMesasge() {
        let buff = [];
        buff.push(`text1=${this.text1}`);
        buff.push(`text2=${this.text2}`);
        buff.push(`textArea1=${this.textArea1}`);
        buff.push(`radio1=${this.radio1}`);
        buff.push(`checkBoxCheckes=${this.checkBoxCheckes}`);
        let message = buff.join(", ");
        return message;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BottomComponent;

// require("./Application.css");
// require("./images/split/horizontal.png");
// require("./images/split/vertical.png");
ko.components.register(COMPONENT_NAME, {
    template: __webpack_require__(16),
    viewModel: {
        createViewModel(params, componentInfo) {
            console.log("params=%o", params);
            let vm;
            if (params instanceof BottomComponent) {
                vm = params;
            }
            else {
                vm = new BottomComponent();
                let options = params ? params.options : undefined;
                vm.onCreateViewModel(options);
                // vm.onCreateViewModel(params.options);
                // if (params == null) {
                //     vm = new BottomComponent();
                //     vm.onCreateViewModel(params.options);
                // } else {
                //     vm = params.options;
                // }
            }
            return vm;
        }
    }
});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div>\r\n        <label>text1:<input data-bind=\"value: text1\"></label>\r\n    </div>\r\n    <div>\r\n        <label>text2:<input data-bind=\"textInput: text2\"></label>\r\n    </div>\r\n    <div>\r\n        <label>textArea1:<textarea data-bind=\"textInput: textArea1\"></textarea></label>\r\n    </div>\r\n    <div>\r\n        <label>radio1=1:<input type=\"radio\" name=\"radioGroup\" data-bind=\"checked: radio1\" value=\"radio1\"></label>\r\n        <label>radio1=2:<input type=\"radio\" name=\"radioGroup\" data-bind=\"checked: radio1\" value=\"radio2\"></label>\r\n        <label>radio1=3:<input type=\"radio\" name=\"radioGroup\" data-bind=\"checked: radio1\" value=\"radio3\"></label>\r\n    </div>\r\n\r\n    <div>\r\n        <label>checkBox=1:<input type=\"checkbox\" data-bind=\"checked: checkBoxCheckes\" value=\"checkbox1\"></label>\r\n        <label>checkBox=2:<input type=\"checkbox\" data-bind=\"checked: checkBoxCheckes\" value=\"checkbox2\"></label>\r\n        <label>checkBox=3:<input type=\"checkbox\" data-bind=\"checked: checkBoxCheckes\" value=\"checkbox3\"></label>\r\n    </div>\r\n\r\n    <button data-bind=\"event: { click: onClickDisplayBtn }\">表示</button>\r\n</div>";

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IModal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ChildModal_ChildModal__ = __webpack_require__(18);


const COMPONENT_NAME = "parent-modal";
const COMPONENT_ID = COMPONENT_NAME + '-id';
const TITLE = "親モーダル";
class ParentModal extends __WEBPACK_IMPORTED_MODULE_0__IModal__["a" /* ModalBase */] {
    constructor() {
        super(COMPONENT_NAME, COMPONENT_ID);
    }
    onClickShowModalBtn(self, event) {
        console.log("self=%o, event=%o", self, event);
        this.childModal.show();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ParentModal;

ko.components.register(COMPONENT_NAME, {
    template: __webpack_require__(22),
    viewModel: {
        createViewModel(params, componentInfo) {
            console.log("params=%o", params);
            let vm;
            if (params instanceof ParentModal) {
                vm = params;
            }
            else {
                let options = params ? params.options : undefined;
                vm = new ParentModal();
                vm.onCreateViewModel(options);
                vm.childModal = new __WEBPACK_IMPORTED_MODULE_1__ChildModal_ChildModal__["a" /* default */]();
                ko.track(vm);
            }
            return vm;
        }
    }
});


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IModal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SubChildModal_SubChildModal__ = __webpack_require__(19);


const COMPONENT_NAME = "child-modal";
const COMPONENT_ID = COMPONENT_NAME + '-id';
const TITLE = "子モーダル";
class ChildModal extends __WEBPACK_IMPORTED_MODULE_0__IModal__["a" /* ModalBase */] {
    constructor() {
        super(COMPONENT_NAME, COMPONENT_ID);
    }
    // constructor(parentId: string, title?: string) {
    //     super(COMPONENT_NAME, new ModalParams(COMPONENT_ID, parentId, (title != null) ? title : TITLE));
    //     // this.component = COMPONENT_NAME;
    //     // if (params != null) {
    //     //     if (params.parentId != null) {
    //     //         this.componentId = `${params.parentId}-${COMPONENT_ID}`;
    //     //     } else {
    //     //         this.componentId = COMPONENT_ID;
    //     //     }
    //     //     if (params.title != null) {
    //     //         this.title = params.title;
    //     //     } else {
    //     //         this.title = TITLE;
    //     //     }
    //     // }
    //     // let subChildModalParams = new ModalParams('sub', 'サブ子モーダル');
    //     this.subChildModal = new SubChildModal(this.componentId);
    //     ko.track(this);
    // }
    // show<T>(params?: T): void {
    //     let options: ModalOptions = {
    //         backdrop: "static",
    //         show: true,
    //         keyboard: true,
    //     };
    //     console.log("params=%o, options=%o", params, options);
    //     $(`#${this.componentId}`).modal(options);
    // }
    onClickShowModalBtn(self, event) {
        console.log("self=%o, event=%o", self, event);
        this.subChildModal.show();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ChildModal;

ko.components.register(COMPONENT_NAME, {
    template: __webpack_require__(21),
    viewModel: {
        createViewModel(params, componentInfo) {
            console.log("params=%o", params);
            let vm;
            if (params instanceof ChildModal) {
                vm = params;
            }
            else {
                let options = params ? params.options : undefined;
                vm = new ChildModal();
                vm.onCreateViewModel(options);
                // if (params == null) {
                //     vm = new ChildModal();
                //     vm.onCreateViewModel();
                // } else {
                //     vm = new ChildModal(params.options);
                //     // vm = params.options;
                // }
                vm.subChildModal = new __WEBPACK_IMPORTED_MODULE_1__SubChildModal_SubChildModal__["a" /* default */]();
                ko.track(vm);
            }
            return vm;
        }
    }
});


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IModal__ = __webpack_require__(0);

const COMPONENT_NAME = "sub-child-modal";
const COMPONENT_ID = COMPONENT_NAME + '-id';
const TITLE = "サブ子モーダル";
class SubChildModal extends __WEBPACK_IMPORTED_MODULE_0__IModal__["a" /* ModalBase */] {
    constructor() {
        super(COMPONENT_NAME, COMPONENT_ID);
        // ko.track(this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SubChildModal;

ko.components.register(COMPONENT_NAME, {
    template: __webpack_require__(20),
    viewModel: {
        createViewModel(params, componentInfo) {
            console.log("params=%o", params);
            let vm;
            if (params instanceof SubChildModal) {
                vm = params;
            }
            else {
                let options = params ? params.options : undefined;
                // vm = new SubChildModal(options);
                vm = new SubChildModal();
                vm.onCreateViewModel(options);
                // if (params == null) {
                //     vm = new SubChildModal();
                //     vm.onCreateViewModel();
                // } else {
                //     vm = new SubChildModal(params.options);
                //     // vm = params.options;
                // }
                ko.track(vm);
            }
            return vm;
        }
    }
});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" data-bind=\"attr: { id: componentId }\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\" data-bind=\"text: title\"></h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <div>\r\n                    サブ子モーダル\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">閉じる</button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" data-bind=\"attr: { id: componentId }\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\" data-bind=\"text: title\"></h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <div>\r\n                    子モーダル\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">閉じる</button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" data-bind=\"attr: { id: componentId }\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\" data-bind=\"text: title\"></h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <div>\r\n                    親モーダル\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-primary\" data-bind=\"event: { click: onClickShowModalBtn }\">子モーダル表示</button>\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">閉じる</button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <child-modal params=\"parent: $data\"></child-modal> -->";

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class FlexGridBindingHandler {
    init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        //
        console.log("element=%o, allBindingsAccessor=%o, viewModel=%o, bindingContext=%o", element, allBindingsAccessor, viewModel, bindingContext);
    }
    update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        //
        console.log("element=%o, allBindingsAccessor=%o, viewModel=%o, bindingContext=%o", element, allBindingsAccessor, viewModel, bindingContext);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlexGridBindingHandler;

// ko.bindingHandlers.exFlexGrid = {
//     init: function (element, valueAccessor) {
//         $(element).focus(function () {
//             var value = valueAccessor();
//             value(true);
//         });
//         $(element).blur(function () {
//             var value = valueAccessor();
//             value(false);
//         });
//     },
//     update: function (element, valueAccessor) {
//         var value = valueAccessor();
//         if (ko.unwrap(value))
//             element.focus();
//         else
//             element.blur();
//     }
// }; 


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DemoRow {
    constructor(id, country, date, amount, active) {
        this.id = id;
        this.country = country;
        this.date = date;
        this.amount = amount;
        this.active = active;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DemoRow;

// { binding: 'id', header: 'ID' },
// { binding: 'country', header: 'country' },
// { binding: 'Date', header: 'Date' },
// { binding: 'amount', header: 'amount' },
// { binding: 'active', header: 'active' }, 


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!./Application.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!./Application.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "html, body {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    padding: 8px;\r\n    background-color: #F6F6F6;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.split {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.content {\r\n    border: 1px solid #C0C0C0;\r\n    box-shadow: inset 0 1px 2px #e4e4e4;\r\n    background-color: #fff;\r\n}\r\n\r\n.gutter {\r\n    background-color: transparent;\r\n\r\n    background-repeat: no-repeat;\r\n    background-position: 50%;\r\n}\r\n\r\n.gutter.gutter-horizontal {\r\n    cursor: col-resize;\r\n    /* background-image: url('./images/vertical.png'); */\r\n}\r\n\r\n.gutter.gutter-vertical {\r\n    cursor: row-resize;\r\n    /* background-image: url('../../images/horizontal.png'); */\r\n}\r\n\r\n.split.split-horizontal, .gutter.gutter-horizontal {\r\n    height: 100%;\r\n    float: left;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div id=\"subtree\" class=\"split split-horizontal\">\r\n        subtree\r\n    </div>\r\n    <div id=\"main-contents\" class=\"split split-horizontal\">\r\n\r\n        <div>\r\n            <button class=\"btn btn-primary\" data-bind=\"event: { click: onClickShowModalBtn }\">モーダル表示</button>\r\n        </div>\r\n\r\n        <div>\r\n            <div>\r\n                <button data-bind=\"click: onClickLoadGridDataButton\">データ読み込み</button>\r\n            </div>\r\n            <!-- <ex-flex-grid></ex-flex-grid> -->\r\n            <!-- <div data-bind=\"component: 'ex-flex-grid'\"></div> -->\r\n            <div data-bind=\"component: { name: 'ex-flex-grid', params: flexGridComponent }\"></div>\r\n        </div>\r\n        <div>\r\n            <div data-bind=\"component: 'top-component'\"></div>\r\n        </div>\r\n\r\n        <div>\r\n            <div data-bind=\"component: 'center-component'\"></div>\r\n        </div>\r\n\r\n        <div>\r\n            <div data-bind=\"component: 'bottom-component'\"></div>\r\n        </div>\r\n\r\n        <div>\r\n            <parent-modal params=\"parent: $data\"></parent-modal>\r\n            <!-- <child-modal></child-modal> -->\r\n        </div>\r\n    </div>\r\n</div>";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map