webpackJsonp([1,4],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaHttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaHttpService = (function () {
    function FaHttpService(http) {
        this.http = http;
        this.url = './fa.csv';
    }
    FaHttpService.prototype.getData = function () {
        var _this = this;
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) {
            return _this.csvToJSON(response.text());
        })
            .catch(this.handleError);
    };
    FaHttpService.prototype.csvToJSON = function (csv) {
        var lines = csv.split('\n');
        var headers = lines[0].split(',');
        var result = [];
        for (var i = 1; i < lines.length; i++) {
            var obj = {}, currentline = lines[i].split(',');
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return result; //JavaScript object
        //return JSON.stringify(result); //JSON
    };
    FaHttpService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body.response || {};
    };
    FaHttpService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(error.message || error);
    };
    FaHttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], FaHttpService);
    return FaHttpService;
    var _a;
}());
//# sourceMappingURL=/Users/yuhiisk/Work/sites/font-awesome-search/src/fa-http.service.js.map

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 292;


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(400);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/yuhiisk/Work/sites/font-awesome-search/src/main.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Font awesome(v4.7) japanese search';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(460),
            styles: [__webpack_require__(458)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/yuhiisk/Work/sites/font-awesome-search/src/app.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fa_list_fa_list_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fa_http_service__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__fa_list_fa_list_component__["a" /* FaListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__fa_http_service__["a" /* FaHttpService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/yuhiisk/Work/sites/font-awesome-search/src/app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fa_http_service__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var FaListComponent = (function () {
    function FaListComponent(document, faHttpService) {
        var _this = this;
        this.document = document;
        this.faHttpService = faHttpService;
        this.tags = ['ロゴ', '矢印', 'カーソル'];
        this.isLoaded = false;
        this.isVisible = 'invisible';
        this.model = { text: '', type: 'and' };
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.footerSearchInput = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        // Load and prepare tokenizer
        window['kuromoji'].builder({ dicPath: './dict/' }).build(function (error, _tokenizer) {
            if (error != null) {
                console.log(error);
            }
            _this.tokenizer = _tokenizer;
            _this.isLoaded = true;
            setTimeout(function () {
                _this.input = document.getElementById('search-text');
                _this.input.focus();
            }, 300);
        });
        // clipboard
        this.clipboard = new window['Clipboard']('.copy', {
            text: function (trigger) {
                // TODO: optionを選択できるようにする
                return "<i class=\"fa " + trigger.getAttribute('data-name') + "\"></i>";
            }
        });
        this.clipboard.on('success', function (e) {
            //console.info('Action:', .action);
            //console.info('Text:', e.text);
            //console.info('Trigger:', e.trigger);
            //e.clearSelection();
            e.trigger.innerHTML = 'clip!';
            setTimeout(function () {
                e.trigger.innerHTML = 'copy';
            }, 1000);
        });
        this.searchInput.valueChanges
            .debounceTime(300)
            .subscribe(function (text) {
            if (text === '') {
                _this.results = _this.datas;
            }
            else {
                var tokenized = _this.tokenizer.tokenize(_this.formatString(text));
                _this.search(tokenized);
            }
        });
    }
    FaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.faHttpService.getData()
            .then(function (data) {
            _this.datas = data;
            _this.results = data;
        });
    };
    FaListComponent.prototype.formatString = function (str) {
        var text = '';
        text = str.replace(/\s/g, ',').toLowerCase();
        return text;
    };
    FaListComponent.prototype.onSelectSearchType = function (event) {
        this.model.type = event.target.value;
    };
    FaListComponent.prototype.onClickTag = function (event, tag) {
        this.model.text = tag;
    };
    FaListComponent.prototype.submit = function () {
        if (this.model.text === '')
            return;
        var tokenized = this.tokenizer.tokenize(this.formatString(this.input.value));
        this.search(tokenized);
    };
    /**
     * カンマの分かち書きだけを削除
     * @param tokenized
     * @returns {any}
     */
    FaListComponent.prototype.deleteSeparater = function (tokenized) {
        var data;
        data = tokenized.filter(function (token) {
            return token.surface_form !== ',';
        });
        return data;
    };
    /**
     * 検索
     * @param _tokenized 分かち書き結果
     */
    FaListComponent.prototype.search = function (_tokenized) {
        var _this = this;
        var tokenized = this.deleteSeparater(_tokenized);
        var filtered = this.datas.filter(function (data, i) {
            var isMatch = false;
            var checked = [];
            // AND検索
            if (_this.model.type === 'and') {
                tokenized.forEach(function (token) {
                    if ((~data.name.indexOf(token.surface_form) ||
                        ~data.keywords.indexOf(token.surface_form)) ||
                        (token.reading && ~data.keywords.indexOf(token.reading))) {
                        checked.push(true);
                    }
                });
                if (checked.length === tokenized.length)
                    isMatch = true;
            }
            else if (_this.model.type === 'or') {
                tokenized.some(function (token) {
                    if (~data.name.indexOf(token.surface_form) ||
                        ~data.keywords.indexOf(token.surface_form) ||
                        (token.reading && ~data.keywords.indexOf(token.reading))) {
                        isMatch = true;
                        return false;
                    }
                });
            }
            if (isMatch)
                return data;
        });
        this.results = filtered;
    };
    FaListComponent.prototype.onScroll = function () {
        var scrollTop = this.document.body.scrollTop;
        if (scrollTop > 100) {
            this.isVisible = 'visible';
        }
        else if (this.isVisible === 'visible' && scrollTop > 10) {
            this.isVisible = 'invisible';
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* HostListener */])('window:scroll', []), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], FaListComponent.prototype, "onScroll", null);
    FaListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-fa-list',
            template: __webpack_require__(461),
            styles: [__webpack_require__(459)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* trigger */])('footer', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* state */])('invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* style */])({ transform: 'translateY(100%)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* state */])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* style */])({ transform: 'translateY(0)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* transition */])('invisible => visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* animate */])('500ms ease-out')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* transition */])('visible => invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* animate */])('300ms ease-out')),
                ])
            ]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DOCUMENT */])), 
        __metadata('design:paramtypes', [Object, (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__fa_http_service__["a" /* FaHttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__fa_http_service__["a" /* FaHttpService */]) === 'function' && _a) || Object])
    ], FaListComponent);
    return FaListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/yuhiisk/Work/sites/font-awesome-search/src/fa-list.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/Users/yuhiisk/Work/sites/font-awesome-search/src/environment.js.map

/***/ }),

/***/ 458:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

module.exports = ".search-area {\n  padding: 20px;\n  border-radius: 3px;\n  background-color: #f1f1f1;\n}\n\n.search-area input[type=\"text\"],\n.footer-search input[type=\"text\"] {\n  background-color: #fff;\n}\n\n.shortcuts {\n  margin: 0;\n}\n.shortcuts span {\n  dipslay: inline-block;\n  margin: 0 5px;\n  font-size: 14px;\n}\n.shortcuts span:after {\n  content: ',';\n}\n.shortcuts span:last-child:after {\n  content: '';\n}\n\n.result-view {\n  padding: 0 20px;\n}\n\ntable th {\n  text-align: center;\n}\n\n/* icon */\ntable td:first-child i {\n  /*color: #1E9F75;*/\n  /*color: #59b765;*/\n}\n\n/* keywords */\ntable td:nth-child(4) {\n  font-family: 'Roboto', 'YuGothic', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n}\n\ntable td:last-child {\n  text-align: center;\n}\ntable td:last-child button {\n  margin-bottom: 0;\n}\n\n\n/* footer */\n.footer-search {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  padding: 20px;\n  background-color: #f1f1f1;\n  -webkit-transform: translateY(100%);\n  transform: translateY(100%);\n}\n\n.footer-search.is-visible {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n\n.footer-search p,\n.footer-search input {\n  margin-bottom: 0;\n}\n\n"

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<app-fa-list></app-fa-list>\n"

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<div class=\"search-area\">\n  <div class=\"row\" *ngIf=\"isLoaded\">\n    <div class=\"column\"><input type=\"text\" id=\"search-text\" [(ngModel)]=\"model.text\" name=\"text\" [formControl]=\"searchInput\" placeholder=\"eg: ロゴ, 矢印, arrow\"></div>\n    <div class=\"column column-25\"><input type=\"submit\" value=\"search\" (click)=\"submit()\" class=\"button\"></div>\n  </div>\n  <p *ngIf=\"!isLoaded\">Loading...</p>\n\n  <input type=\"radio\" id=\"and\" name=\"type\" value=\"and\" [checked]=\"model.type === 'and'\" (change)=\"onSelectSearchType($event)\">\n  <label class=\"label-inline\" for=\"and\">AND検索</label>\n\n  <input type=\"radio\" id=\"or\" name=\"type\" value=\"or\" [checked]=\"model.type === 'or'\" (change)=\"onSelectSearchType($event)\">\n  <label class=\"label-inline\" for=\"or\">OR検索</label>\n\n  <p class=\"shortcuts\">shortcuts:\n  <span *ngFor=\"let tag of tags\"><a href=\"#\" (click)=\"onClickTag($event, tag)\">{{tag}}</a></span>\n  </p>\n</div>\n\n<div class=\"result-view\">\n  <table>\n    <thead>\n      <tr>\n        <th>icon</th>\n        <th>name</th>\n        <th>unicode</th>\n        <th>keywords</th>\n        <th>copy</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of results\">\n        <td><i [ngClass]=\"['fa', data.name, 'fa-2x', 'fa-fw']\"></i></td>\n        <td>{{data.name}}</td>\n        <td>{{data.unicode}}</td>\n        <td>{{data.keywords}}</td>\n        <td><button class=\"copy\" [attr.data-name]=\"data.name\">copy</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div [@footer]=\"isVisible\" class=\"footer-search\">\n  <div class=\"row\" *ngIf=\"isLoaded\">\n    <div class=\"column\"><input type=\"text\" [(ngModel)]=\"model.text\" name=\"text\" [formControl]=\"footerSearchInput\" placeholder=\"eg: ロゴ, 矢印, arrow\"></div>\n    <div class=\"column column-25\"><input type=\"submit\" value=\"search\" (click)=\"submit()\" class=\"button\"></div>\n  </div>\n  <p *ngIf=\"!isLoaded\">Loading...</p>\n</div>\n"

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(293);


/***/ })

},[483]);
//# sourceMappingURL=main.bundle.map