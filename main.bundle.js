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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(167);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fa_http_service__ = __webpack_require__(275);
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




var FaListComponent = (function () {
    function FaListComponent(faHttpService) {
        var _this = this;
        this.faHttpService = faHttpService;
        this.isLoaded = false;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
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
            //vm.message = "Ready";
            //
            //vm.inputText = "すもももももももものうち";
            //vm.isLoading = false;
        });
        // clipboard
        this.clipboard = new window['Clipboard']('.copy', {
            text: function (trigger) {
                // TODO: option
                return "<i class=\"fa " + trigger.getAttribute('data-name') + "\"></i>";
            }
        });
        this.clipboard.on('success', function (e) {
            //console.info('Action:', e.action);
            //console.info('Text:', e.text);
            //console.info('Trigger:', e.trigger);
            //e.clearSelection();
            e.trigger.innerHTML = 'clip!';
            setTimeout(function () {
                e.trigger.innerHTML = 'copy';
            }, 1000);
        });
        //console.log(this.searchInput.valueChanges);
        this.searchInput.valueChanges
            .debounceTime(150)
            .subscribe(function (text) {
            //console.log(text);
            if (text === '') {
                _this.results = _this.datas;
            }
            else {
                _this.search(_this.tokenizer.tokenize(text));
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
    FaListComponent.prototype.submit = function () {
        if (this.input.value === '')
            return;
        this.search(this.tokenizer.tokenize(this.input.value));
    };
    FaListComponent.prototype.search = function (tokenized) {
        //console.log(tokenized, this.datas);
        var filtered = this.datas.filter(function (data, i) {
            var isMatch = false;
            tokenized.some(function (token) {
                if (~data.name.indexOf(token.surface_form) ||
                    ~data.keywords.indexOf(token.surface_form) ||
                    (token.reading && ~data.keywords.indexOf(token.reading))) {
                    isMatch = true;
                    return false;
                }
            });
            if (isMatch)
                return data;
        });
        //console.log(tokenized, filtered);
        this.results = filtered;
    };
    FaListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-fa-list',
            template: __webpack_require__(461),
            styles: [__webpack_require__(459)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__fa_http_service__["a" /* FaHttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__fa_http_service__["a" /* FaHttpService */]) === 'function' && _a) || Object])
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

module.exports = "table td:nth-child(4) {\n  font-family: 'Roboto', 'YuGothic', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n}\n\ntable th {\n  text-align: center;\n}\n"

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<app-fa-list></app-fa-list>\n"

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" *ngIf=\"isLoaded\">\n  <div class=\"column\"><input type=\"text\" name=\"search-text\" id=\"search-text\" [formControl]=\"searchInput\" placeholder=\"ex: ロゴ, 矢印, arrow\"></div>\n  <div class=\"column column-25\"><input type=\"submit\" value=\"filter\" (click)=\"submit()\" class=\"button\"></div>\n</div>\n<p *ngIf=\"!isLoaded\">Loading...</p>\n\n<p><small>※複数キーワードには未対応です</small></p>\n\n<table>\n  <thead>\n    <tr>\n      <th>icon</th>\n      <th>name</th>\n      <th>unicode</th>\n      <th>keywords</th>\n      <th>copy</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of results\">\n      <td><i [ngClass]=\"['fa', data.name, 'fa-2x', 'fa-fw']\"></i></td>\n      <td>{{data.name}}</td>\n      <td>{{data.unicode}}</td>\n      <td>{{data.keywords}}</td>\n      <td><button class=\"copy\" [attr.data-name]=\"data.name\">copy</button></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(293);


/***/ })

},[483]);
//# sourceMappingURL=main.bundle.map