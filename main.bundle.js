webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n\r\n  <div class=\"panel panel-primary\">\r\n\r\n    <div class=\"panel-body\">\r\n      <ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\r\n        <li *ngFor=\"let searchTab of searchTabs; let i = index\" class=\"nav-item\">\r\n          <a class=\"nav-link\" id=\"{{searchTab.id}}-tab\" data-toggle=\"pill\" (click)=\"selectTab(searchTab)\" href=\"#{{searchTab.id}}-tabPane\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\">&nbsp;{{getTabName(searchTab)}} <button class=\"close\" (click)=\"deleteTab(searchTab)\" type=\"button\">×</button> </a>\r\n        </li>\r\n        <li><button class=\"close addTabs\" type=\"button\" (click)=\"addTab()\">+</button></li>\r\n      </ul>\r\n      <div class=\"tab-content\" id=\"pills-tabContent\">\r\n        <div *ngFor=\"let searchTab of searchTabs; let i = index\" class=\"tab-pane fade show\" id=\"{{searchTab.id}}-tabPane\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <h4>Type your search criteria</h4>\r\n              <div id=\"custom-search-input\">\r\n                <div class=\"input-group col-md-12\">\r\n                  <input [(ngModel)]=\"searchTab.query\" type=\"text\" class=\"form-control input-lg\" placeholder=\"Search..\" />\r\n                  <span class=\"input-group-btn\">\r\n                    <button class=\"btn btn-primary btn-lg \" type=\"button\" (click)=\"search(searchTab)\">\r\n                      Search\r\n                    </button>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row marginTop\">\r\n            <div class=\"col-md-12\">\r\n              <label class=\"radio-inline\">\r\n                <input type=\"radio\" value=\"video\" name=\"searchType_{{searchTab.id}}\"  [(ngModel)]=\"searchTab.type\">Videos\r\n              </label>\r\n              <label class=\"radio-inline\">\r\n                <input type=\"radio\" value=\"image\" name=\"searchType_{{searchTab.id}}\"  [(ngModel)]=\"searchTab.type\">Images\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row marginTop\">\r\n\r\n            <div *ngIf=\"isLoading\" class=\"col-md-12\">\r\n              <div class=\"loading\">\r\n              </div>\r\n            </div>\r\n\r\n            <div  *ngFor=\"let result of searchTab.results; let i = index\" class=\"col-xs-12 col-sm-6 col-md-3\">\r\n\r\n              <div *ngIf=\"!isLoading\" class=\"panel panel-default \">\r\n                <div class=\"panel-body multimedia-container\">\r\n                  <a style=\"cursor:pointer\" data-toggle=\"modal\" (click)=\"loadMediaDetails(result)\" data-target=\"#mediaModal\" title=\"{{result.description}}\" data-type=\"image\">\r\n                    <img class=\"multimedia-image\" src=\"{{result.smallThumb}}\" alt=\"{{result.description}}\" />\r\n                    <span class=\"overlay\"><i class=\"glyphicon glyphicon-fullscreen\"></i></span>\r\n                  </a>\r\n                </div>\r\n                <div class=\"panel-footer\">\r\n                  <span>{{result.title}}</span>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"bottomtag\"></div>\r\n\r\n<!--BEGIN MODAL DIALOG-->\r\n<div class=\"modal fade\" id=\"mediaModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Media Details</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n\r\n          <div class=\"panel panel-default \">\r\n            <div class=\"panel-body multimedia-container modal-container\">\r\n              <a title=\"{{selectedResult.description}}\"  data-type=\"image\" data-toggle=\"lightbox\">\r\n                <img class=\"multimedia-image\" src=\"{{selectedResult.largeThumb}}\" alt=\"{{selectedResult.description}}\" />\r\n                <span class=\"overlay\"><i class=\"glyphicon glyphicon-fullscreen\"></i></span>\r\n              </a>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n              <span>{{selectedResult.title}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--END MODAL DIALOG-->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_searchTab__ = __webpack_require__("./src/app/models/searchTab.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_searchResult__ = __webpack_require__("./src/app/models/searchResult.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.title = 'app';
        this.searchTabs = [];
        this.isLoading = false;
        this.focusTab = null;
        this.selectedResult = new __WEBPACK_IMPORTED_MODULE_3__models_searchResult__["a" /* SearchResult */]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var searchTab = new __WEBPACK_IMPORTED_MODULE_2__models_searchTab__["a" /* SearchTab */]();
        searchTab.id = this.createGuid();
        this.searchTabs.push(searchTab);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $("#" + this.searchTabs[0].id + "-tab").trigger("click");
        this.searchTabs[0].isActive = true;
        $(window).scroll(function () {
            var fromTop = $('#bottomtag').offset().top - $(document).scrollTop() - $(window).height();
            if (fromTop < 100) {
                _this.loadMoreResults();
            }
        });
    };
    AppComponent.prototype.loadMoreResults = function () {
        for (var _i = 0, _a = this.searchTabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            if (tab.isActive && tab.type == "video") {
                this.getResults(tab);
            }
        }
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        if (this.focusTab != null) {
            $("#" + this.focusTab.id + "-tab").trigger("click");
            this.focusTab = null;
        }
    };
    AppComponent.prototype.deleteTab = function (searchTab) {
        if (searchTab.isActive) {
            if (this.searchTabs.indexOf(searchTab) > 0) {
                $("#" + this.searchTabs[this.searchTabs.indexOf(searchTab) - 1].id + "-tab").trigger("click");
                this.searchTabs[this.searchTabs.indexOf(searchTab) - 1].isActive = true;
            }
            else if (this.searchTabs.length > this.searchTabs.indexOf(searchTab) + 1) {
                $("#" + this.searchTabs[this.searchTabs.indexOf(searchTab) + 1].id + "-tab").trigger("click");
                this.searchTabs[this.searchTabs.indexOf(searchTab) + 1].isActive = true;
            }
        }
        this.searchTabs.splice(this.searchTabs.indexOf(searchTab), 1);
    };
    AppComponent.prototype.selectTab = function (searchTab) {
        for (var _i = 0, _a = this.searchTabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            tab.isActive = false;
        }
        searchTab.isActive = true;
    };
    AppComponent.prototype.addTab = function () {
        var searchTab = new __WEBPACK_IMPORTED_MODULE_2__models_searchTab__["a" /* SearchTab */]();
        searchTab.id = this.createGuid();
        this.searchTabs.push(searchTab);
        this.selectTab(searchTab);
        this.focusTab = searchTab;
    };
    AppComponent.prototype.getTabName = function (searchTab) {
        if (searchTab.query == "" || searchTab.query == undefined) {
            return "New";
        }
        return searchTab.query;
    };
    AppComponent.prototype.loadMediaDetails = function (searchResult) {
        this.selectedResult = searchResult;
    };
    AppComponent.prototype.search = function (searchTab) {
        if (searchTab.query == "" || searchTab.query == undefined) {
            alert("Please type your search criteria.");
        }
        else {
            this.isLoading = true;
            searchTab.results = [];
            this.isLoading = true;
            searchTab.nextPageToken = "";
            this.getResults(searchTab);
        }
    };
    AppComponent.prototype.getResults = function (searchTab) {
        var _this = this;
        if (searchTab.type == "video") {
            this.dataService.getVideos(searchTab)
                .subscribe(function (response) {
                _this.isLoading = false;
            }, function (err) { return console.log(err); }, function () { return console.log('getVideos'); });
        }
        else {
            this.dataService.getImages(searchTab)
                .subscribe(function (response) {
                _this.isLoading = false;
            }, function (err) { return console.log(err); }, function () { return console.log('getImages'); });
        }
    };
    AppComponent.prototype.createGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_searchResult__ = __webpack_require__("./src/app/models/searchResult.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.googleKey = "AIzaSyA7cz-zH2PGSU-ON8dRk-clEH38BcXSf8I";
        this.videosRequestCount = 25;
        this.imagesRequestCount = 10;
        this.videosUrl = "https://www.googleapis.com/youtube/v3/search?key=" + this.googleKey + "&part=snippet&maxResults=" + this.videosRequestCount;
        this.imagesUrl = "https://www.googleapis.com/customsearch/v1?cx=014402409906423180924:pxmsl9dlkl4&key=" + this.googleKey + "&searchtype=image&hl=en&num=" + this.imagesRequestCount;
    }
    DataService.prototype.getVideos = function (searchTab) {
        var url = this.videosUrl + "&q=" + searchTab.query;
        if (searchTab.nextPageToken != undefined && searchTab.nextPageToken != "")
            url += "&pageToken=" + searchTab.nextPageToken;
        return this.http.get(url).map(function (res) {
            var videosResponse = JSON.parse(res._body);
            searchTab.nextPageToken = videosResponse.nextPageToken;
            for (var _i = 0, _a = videosResponse.items; _i < _a.length; _i++) {
                var video = _a[_i];
                if (video.snippet != null && video.snippet != undefined) {
                    var searchResult = new __WEBPACK_IMPORTED_MODULE_6__models_searchResult__["a" /* SearchResult */]();
                    searchResult.title = video.snippet.channelTitle;
                    searchResult.description = video.snippet.description;
                    if (video.snippet.thumbnails != null && video.snippet.thumbnails != undefined) {
                        searchResult.smallThumb = video.snippet.thumbnails.medium.url;
                        searchResult.largeThumb = video.snippet.thumbnails.high.url;
                        searchTab.results.push(searchResult);
                    }
                }
            }
            return searchTab;
        })
            .catch(this.handleError);
    };
    DataService.prototype.getImages = function (searchTab) {
        var url = this.imagesUrl + "&q=" + searchTab.query + "&start" + searchTab.imageStartIndex;
        return this.http.get(url).map(function (res) {
            var imagesResponse = JSON.parse(res._body);
            for (var _i = 0, _a = imagesResponse.items; _i < _a.length; _i++) {
                var image = _a[_i];
                var searchResult = new __WEBPACK_IMPORTED_MODULE_6__models_searchResult__["a" /* SearchResult */]();
                searchResult.title = image.title;
                searchResult.description = image.title;
                if (image.pagemap.cse_thumbnail != undefined) {
                    searchResult.smallThumb = image.pagemap.cse_thumbnail[0].src;
                    if (image.pagemap.cse_image != undefined) {
                        searchResult.largeThumb = image.pagemap.cse_image[0].src;
                    }
                    searchTab.results.push(searchResult);
                }
            }
            return searchTab;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || error.json().message);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/models/searchResult.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResult; });
var SearchResult = /** @class */ (function () {
    function SearchResult() {
    }
    return SearchResult;
}());



/***/ }),

/***/ "./src/app/models/searchTab.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTab; });
var SearchTab = /** @class */ (function () {
    function SearchTab() {
        this.type = "video";
        this.imageStartIndex = 1;
        this.results = [];
    }
    return SearchTab;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map