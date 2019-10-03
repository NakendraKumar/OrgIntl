(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrapper\" *ngIf=\"!isIFrame && isAuthenticated\">\n  <section class=\"app-container\">\n    <app-header></app-header>\n    <section class=\"home-page\">\n      <!-- <app-home></app-home> -->\n      <router-outlet></router-outlet>\n    </section>\n    <section class=\"footer-page\">\n      <app-footer></app-footer>\n    </section>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/graph/graph.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/graph/graph.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{ blur_container: loader }\">\n  <div id=\"graph\"></div>\n  <app-loader [isLoading]=\"loader\" [message]=\"message\"></app-loader>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/home/home.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/home/home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{ blur_container: loader }\">\n  <div class=\"custom-header\">\n    Search for an Organization\n  </div>\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit(searchForm)\">\n    <div class=\"example-container\">\n      <mat-form-field>\n        <input\n          matInput\n          placeholder=\"Company Name\"\n          formControlName=\"companyName\"\n          required\n        />\n      </mat-form-field>\n      <mat-form-field>\n        <input\n          matInput\n          placeholder=\"Country\"\n          formControlName=\"country\"\n          required\n        />\n      </mat-form-field>\n      <div class=\"example-button-row\">\n        <button\n          type=\"submit\"\n          [disabled]=\"searchForm.invalid\"\n          mat-raised-button\n          color=\"#ffe600\"\n        >\n          Search\n        </button>\n      </div>\n    </div>\n  </form>\n  <app-loader [isLoading]=\"loader\" [message]=\"message\"></app-loader>\n  <div\n    *ngIf=\"dataSource.length\"\n    class=\"custom-table mat-elevation-z8\"\n  >\n    <table mat-table [dataSource]=\"dataSource\">\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"orgkey\">\n        <th mat-header-cell *matHeaderCellDef>Org Key</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.orgkey }}</td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>Name</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n      </ng-container>\n\n      <!-- Country Column -->\n      <ng-container matColumnDef=\"country\">\n        <th mat-header-cell *matHeaderCellDef>Country</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.country }}</td>\n      </ng-container>\n\n      <!-- Country Column -->\n      <ng-container matColumnDef=\"graph\">\n        <th mat-header-cell *matHeaderCellDef>Graph</th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-icon style=\"cursor: pointer;\" (click)=\"showGraph(row)\"\n            >visibility</mat-icon\n          >\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n    </table>\n  </div>\n  <div\n    *ngIf=\"dataSource.length && !loader\"\n    class=\"no_data\"\n    role=\"alert\"\n  >\n    No Data\n  </div>\n</div>\n<!-- <app-graph></app-graph> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <span>&copy; {{ copyrightYear }} </span>\n  <span translate>Copyright</span>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"logo-box\">\n    <a><img src=\"../../../assets/images/EYLogo.svg\"/></a>\n    <div class=\"app-name\" translate>{{ appName }}</div>\n  </div>\n\n  <div class=\"profile-box\">\n    <app-user-profile [userName]=\"userName\"></app-user-profile>\n    <div class=\"signout\" title=\"Logout\" id=\"logout\" (click)=\"logout()\">\n      <i class=\"fas fa-sign-out-alt\"></i>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header/user-profile/user-profile.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header/user-profile/user-profile.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-block\">\n  <div class=\"user-details\">\n    <div class=\"user-name\">{{ userName }}</div>\n    <div class=\"user-designation\">Software Engineer - Advisory</div>\n  </div>\n  <div class=\"profile-holder\">\n    <app-profile-image></app-profile-image>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layout/layout.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layout/layout.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"app-container\">\n  <app-header></app-header>\n  <section class=\"home-page\">\n    <app-home></app-home>\n  </section>\n  <section class=\"footer-page\">\n    <app-footer></app-footer>\n  </section>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/loader/loader.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/loader/loader.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isLoading\" class=\"text-xs-center centered\">\n  <i class=\"fas fa-cog fa-spin fa-3x\"></i> <span>{{ message }}</span>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/profile-image/profile-image.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/profile-image/profile-image.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"user-pic\"\n  [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')' }\"\n></div>\n"

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = 'https://orgintel-dev-cd.sbp.eyclienthub.com/api/v1.0/orgkey';
    }
    getData(companyName, country) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.httpClient.get(`${this.apiURL}?name=${companyName}&country=${country}`, { headers: headers });
    }
    getChildren(orgKey) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.httpClient.get(`${this.apiURL}/${orgKey}/OrgHeirarchy/Children`, { headers: headers });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! microsoft-adal-angular6 */ "./node_modules/microsoft-adal-angular6/fesm2015/microsoft-adal-angular6.js");
/* harmony import */ var _core_graph_graph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/graph/graph.component */ "./src/app/core/graph/graph.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");






const routes = [
    // Fallback when no prior route is matched
    {
        path: '',
        component: _core__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        canActivate: [microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]]
    },
    {
        path: 'graph',
        component: _core_graph_graph_component__WEBPACK_IMPORTED_MODULE_4__["GraphComponent"],
        canActivate: [microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-wrapper {\n  height: 100%;\n}\n\n.app-container {\n  width: 100%;\n  margin: 0 auto;\n  min-height: 100%;\n  background: #fbfbfb;\n}\n\n.footer-page {\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n}\n\n.home-page {\n  padding: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWtlbmRyYS5rdW1hci9Eb2N1bWVudHMvY29ycmVjdC9PcmdJbnRsL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hcHAtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xufVxuXG4uZm9vdGVyLXBhZ2Uge1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ob21lLXBhZ2Uge1xuICBwYWRkaW5nOiA0MHB4O1xufVxuIiwiLmFwcC13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXBwLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbn1cblxuLmZvb3Rlci1wYWdlIHtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaG9tZS1wYWdlIHtcbiAgcGFkZGluZzogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! microsoft-adal-angular6 */ "./node_modules/microsoft-adal-angular6/fesm2015/microsoft-adal-angular6.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");










const log = new _app_core__WEBPACK_IMPORTED_MODULE_9__["Logger"]('App');
let AppComponent = class AppComponent {
    constructor(adalService, router, activatedRoute, titleService, translateService, i18nService) {
        this.adalService = adalService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.translateService = translateService;
        this.i18nService = i18nService;
        this.isAuthenticated = false;
        this.isIFrame = false;
        this.isAuthenticated = this.adalService.isAuthenticated;
    }
    ngOnInit() {
        // Setup logger
        if (_env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production) {
            _app_core__WEBPACK_IMPORTED_MODULE_9__["Logger"].enableProductionMode();
        }
        log.debug('init');
        if (top !== self) {
            console.log('1');
            this.isIFrame = true;
        }
        else {
            console.log('2');
            // Setup translations
            this.i18nService.init(_env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].defaultLanguage, _env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].supportedLanguages);
            const onNavigationEnd = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]));
            // Change page title on navigation or language change, based on route data
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.translateService.onLangChange, onNavigationEnd)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => {
                let route = this.activatedRoute;
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(route => route.outlet === 'primary'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(route => route.data), Object(_app_core__WEBPACK_IMPORTED_MODULE_9__["untilDestroyed"])(this))
                .subscribe(event => {
                const title = event.title;
                if (title) {
                    this.titleService.setTitle(this.translateService.instant(title));
                }
            });
        }
    }
    ngOnDestroy() {
        // this.i18nService.destroy();
    }
};
AppComponent.ctorParameters = () => [
    { type: microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_7__["MsAdalAngular6Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _app_core__WEBPACK_IMPORTED_MODULE_9__["I18nService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! microsoft-adal-angular6 */ "./node_modules/microsoft-adal-angular6/fesm2015/microsoft-adal-angular6.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('./ngsw-worker.js', {
                enabled: _env_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
            }),
            microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_9__["MsAdalAngular6Module"].forRoot({
                tenant: _env_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].config.tenant,
                clientId: _env_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].config.clientId,
                redirectUri: window.location.origin,
                endpoints: _env_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].config.endpoints,
                navigateToLoginRequestUrl: false,
                expireOffsetSeconds: 300,
                cacheLocation: _env_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].config.cacheLocation,
                postLogoutRedirectUri: _env_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].postLogoutRedirectUri
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _app_core__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
            _app_shared__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"] // must be imported as the last module as it contains the fallback route
        ],
        exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
        providers: [microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_9__["AuthenticationGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./route-reusable-strategy */ "./src/app/core/route-reusable-strategy.ts");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http/http.service */ "./src/app/core/http/http.service.ts");









// import { GraphComponent } from './graph/graph.component';
let CoreModule = class CoreModule {
    constructor(parentModule) {
        // Import guard
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
        }
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
                useClass: _http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]
            },
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
                useClass: _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_7__["RouteReusableStrategy"]
            }
        ],
        declarations: []
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())
], CoreModule);



/***/ }),

/***/ "./src/app/core/graph/graph.component.scss":
/*!*************************************************!*\
  !*** ./src/app/core/graph/graph.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blur_container {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWtlbmRyYS5rdW1hci9Eb2N1bWVudHMvY29ycmVjdC9PcmdJbnRsL3NyYy9hcHAvY29yZS9ncmFwaC9ncmFwaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9ncmFwaC9ncmFwaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZ3JhcGgvZ3JhcGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1cl9jb250YWluZXIge1xuICBvcGFjaXR5OiAwLjU7XG59XG4iLCIuYmx1cl9jb250YWluZXIge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/graph/graph.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/graph/graph.component.ts ***!
  \***********************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _share_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share-data.service */ "./src/app/share-data.service.ts");


//import * as d3 from 'd3';



let GraphComponent = class GraphComponent {
    constructor(apiService, shareData) {
        this.apiService = apiService;
        this.shareData = shareData;
        this.loader = false;
        this.treeData = {
            orgkey: 'dK468791727385',
            name: 'MICROSOFT'
        };
        this.setRoot = data => {
            // console.log('data', data);
            this.root = d3.hierarchy(data, function (d) {
                return d.children;
            });
            // console.log('this.root', this.root);
        };
        this.setInitialState = () => {
            // Collapse after the second level
            // this.root.children.forEach(this.collapse);
            this.update(this.root);
        };
        // Collapse the node and all it's children
        this.collapse = d => {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(this.collapse);
                d.children = null;
            }
        };
        this.update = source => {
            // console.log('this.root', this.root);
            // console.log('source', source);
            // Assigns the x and y position for the nodes
            var treeData = this.treemap(this.root);
            // Compute the new tree layout.
            var nodes = treeData.descendants(), links = treeData.descendants().slice(1);
            // Normalize for fixed-depth.
            nodes.forEach(function (d) {
                d.y = d.depth * 180;
            });
            // ****************** Nodes section ***************************
            // Update the nodes...
            var node = this.svg.selectAll('g.node').data(nodes, function (d) {
                return d.id || (d.id = ++this.i);
            });
            // Enter any new modes at the parent's previous position.
            var nodeEnter = node
                .enter()
                .append('g')
                .attr('class', 'node')
                .attr('transform', function (d) {
                return 'translate(' + source.y0 + ',' + source.x0 + ')';
            })
                .on('click', this.click);
            // Add Circle for the nodes
            nodeEnter
                .append('circle')
                .attr('class', 'node')
                .attr('r', 1e-6)
                .style('fill', function (d) {
                return d._children ? 'lightsteelblue' : '#fff';
            });
            // Add labels for the nodes
            nodeEnter
                .append('text')
                .attr('dy', '.35em')
                .attr('x', function (d) {
                return d.children || d._children ? -13 : 13;
            })
                .attr('text-anchor', function (d) {
                return d.children || d._children ? 'end' : 'start';
            })
                .text(function (d) {
                return d.data.name;
            });
            // UPDATE
            var nodeUpdate = nodeEnter.merge(node);
            // Transition to the proper position for the node
            nodeUpdate
                .transition()
                .duration(this.duration)
                .attr('transform', function (d) {
                return 'translate(' + d.y + ',' + d.x + ')';
            });
            // Update the node attributes and style
            nodeUpdate
                .select('circle.node')
                .attr('r', 10)
                .style('fill', function (d) {
                return d._children ? 'lightsteelblue' : '#fff';
            })
                .attr('cursor', 'pointer');
            // Remove any exiting nodes
            var nodeExit = node
                .exit()
                .transition()
                .duration(this.duration)
                .attr('transform', function (d) {
                return 'translate(' + source.y + ',' + source.x + ')';
            })
                .remove();
            // On exit reduce the node circles size to 0
            nodeExit.select('circle').attr('r', 1e-6);
            // On exit reduce the opacity of text labels
            nodeExit.select('text').style('fill-opacity', 1e-6);
            // ****************** links section ***************************
            // Update the links...
            var link = this.svg.selectAll('path.link').data(links, function (d) {
                return d.id;
            });
            // Enter any new links at the parent's previous position.
            var linkEnter = link
                .enter()
                .insert('path', 'g')
                .attr('class', 'link')
                .attr('d', function (d) {
                var o = { x: source.x0, y: source.y0 };
                return diagonal(o, o);
            });
            // UPDATE
            var linkUpdate = linkEnter.merge(link);
            // Transition back to the parent element position
            linkUpdate
                .transition()
                .duration(this.duration)
                .attr('d', function (d) {
                return diagonal(d, d.parent);
            });
            // Remove any exiting links
            var linkExit = link
                .exit()
                .transition()
                .duration(this.duration)
                .attr('d', function (d) {
                var o = { x: source.x, y: source.y };
                return diagonal(o, o);
            })
                .remove();
            // Store the old positions for transition.
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
            // Creates a curved (diagonal) path from parent to the child nodes
            function diagonal(s, d) {
                let path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;
                return path;
            }
        };
        this.handleChildren = d => {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            }
            else {
                d.children = d._children;
                d._children = null;
            }
            return d;
        };
        this.updateData = (node, updatedData) => {
            // console.log('update Data');
            // console.log('node', node);
            // console.log('New Node', node);
            this.setRoot(updatedData);
            this.update(this.handleChildren(node));
            // this.setInitialState();
        };
        // click = d => {
        //   //   console.log(d);
        //   if (d.children) {
        //     d._children = d.children;
        //     d.children = null;
        //     this.update(d);
        //   } else {
        //     let data = [
        //       {
        //         name: 'MICROSOFT PROPERTIES UK LIMITED',
        //         orgkey: 'dK018401192829'
        //       },
        //       { name: 'MICROSOFT EMEA', orgkey: 'dK934835055619' }
        //     ];
        //     var children = [];
        //     for (var i = 0; i < data.length; i++) {
        //       children.push(i);
        //     }
        //     d.children = children;
        //     this.update(d);
        //   }
        // };
        // findAndUpdate = (obj, node) => {
        //   console.log('obj', obj);
        //   let data = [
        //     {
        //       name: 'XXX',
        //       orgkey: 'dK018s401192829'
        //     },
        //     { name: 'YYY', orgkey: 'dK9348350d55619' }
        //   ];
        //   if (obj.orgkey == node.data.orgkey) {
        //     const childData = _.union(obj['children'] || [], data);
        //     obj['children'] = childData;
        //     // console.log('if found', obj);
        //     return obj;
        //   }
        //   // console.log('childData', childData);
        //   if (obj['children'] && obj['children'].length > 0) {
        //     for (const child of obj['children']) {
        //       // console.log('child', child);
        //       return this.findAndUpdate(child, node);
        //     }
        //   }
        // };
        this.findAndUpdate = (d, child) => {
            let dataSet = [
                {
                    name: 'XXX',
                    orgkey: 'dK018s401192829'
                },
                { name: 'YYY', orgkey: 'dK9348350d55619' }
            ];
            let dataSet1 = [
                {
                    name: '12XXX',
                    orgkey: 'dK018s4011192829'
                },
                { name: '12YYY', orgkey: 'dK91348350d55619' }
            ];
            let mainArray = [];
            mainArray.push(this.treeData);
            mainArray.forEach(function iter(a) {
                if (d.data.orgkey == a.orgkey) {
                    console.log('xxx');
                    let childData = [];
                    childData = child;
                    a.children = childData;
                }
                Array.isArray(a.children) && a.children.forEach(iter);
                // a.children && a.children.length > 0 && a.children.forEach(iter);
            });
            setTimeout(undefined, 1000);
            return mainArray[0];
        };
        // Toggle children on click.
        this.click = d => {
            // console.log('clicked node', d);
            // console.log('this.treeData', this.treeData);
            let objectFound = {};
            let childrenFromApi = [];
            this.loader = true;
            // dK468791727385
            this.apiService.getChildren(d.data.orgkey).subscribe(data => {
                this.loader = false;
                console.log('data', data);
                if (data && data['children']) {
                    console.log('childrenFromApi', data['children'][0]);
                    childrenFromApi = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(data['children'][0], lodash__WEBPACK_IMPORTED_MODULE_2___default.a.partialRight(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.pick, ['name', 'orgkey']));
                    if (data['children'][0].length > 1) {
                        childrenFromApi.splice(-(data['children'][0].length - 10));
                    }
                    console.log('childrenFromApi', childrenFromApi);
                    objectFound = this.findAndUpdate(d, childrenFromApi);
                    console.log('objectFound', objectFound);
                    // this.treeData = objectFound;
                    this.updateData(d, objectFound);
                }
            }, err => {
                this.loader = false;
                console.log('err', err);
            });
            // _.forEach(mainArray, function(obj) {
            //   _.set(_.find(obj.children, { orgkey: d.data.orgkey }), 'children', data);
            // });
            // objectFound = new Proxy({}, this.findAndUpdate(this.treeData, d));
            // objectFound = this.findAndUpdate(this.treeData, d);
        };
        // this.setRoot(this.treeData);
    }
    ngOnInit() {
        this.nodeInfo = this.shareData.node;
        // this.treeData = { name: this.nodeInfo.name, orgkey: this.nodeInfo.orgkey };
        console.log('this.nodeInfo', this.nodeInfo);
        console.log('this.treeData', this.treeData);
        this.setRoot(this.treeData);
        // Set the dimensions and margins of the diagram
        this.margin = { top: 20, right: 90, bottom: 30, left: 90 };
        this.width = 960 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        // append the svg object to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        this.svg = d3
            .select('#graph')
            .append('svg')
            .attr('width', this.width + this.margin.right + this.margin.left)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        this.i = 0;
        this.duration = 750;
        // declares a tree layout and assigns the size
        this.treemap = d3.tree().size([this.height, this.width]);
        // Assigns parent, children, height, depth
        this.root.x0 = this.height / 2;
        this.root.y0 = 0;
        this.setInitialState();
    }
};
GraphComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _share_data_service__WEBPACK_IMPORTED_MODULE_4__["ShareDataService"] }
];
GraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-graph',
        template: __webpack_require__(/*! raw-loader!./graph.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/graph/graph.component.html"),
        styles: [__webpack_require__(/*! ./graph.component.scss */ "./src/app/core/graph/graph.component.scss")]
    })
], GraphComponent);



/***/ }),

/***/ "./src/app/core/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n  background: #ffe600;\n}\n\ntable {\n  width: 100%;\n}\n\n.no_data {\n  margin-top: 40px;\n}\n\n.custom-table {\n  width: 100%;\n  margin-top: 30px;\n  height: calc(100vh - 408px);\n  overflow-y: scroll;\n  scrollbar-width: none;\n  /* Firefox */\n  -ms-overflow-style: none;\n}\n\n.custom-table::-webkit-scrollbar {\n  /* WebKit */\n  width: 0;\n  height: 0;\n}\n\n.custom-header {\n  font-style: unset;\n  font-size: x-large;\n  font-weight: lighter;\n}\n\n.blur_container {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWtlbmRyYS5rdW1hci9Eb2N1bWVudHMvY29ycmVjdC9PcmdJbnRsL3NyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7O0VBRUUsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUF1QixZQUFBO0VBQ3ZCLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmU2MDA7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5vX2RhdGEge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDA4cHgpO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXN0b20tdGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAvKiBXZWJLaXQgKi9cclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jdXN0b20taGVhZGVyIHtcclxuICBmb250LXN0eWxlOiB1bnNldDtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5ibHVyX2NvbnRhaW5lciB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbiIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogI2ZmZTYwMDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vX2RhdGEge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uY3VzdG9tLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQwOHB4KTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xufVxuXG4uY3VzdG9tLXRhYmxlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC8qIFdlYktpdCAqL1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uY3VzdG9tLWhlYWRlciB7XG4gIGZvbnQtc3R5bGU6IHVuc2V0O1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4uYmx1cl9jb250YWluZXIge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _share_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share-data.service */ "./src/app/share-data.service.ts");








let HomeComponent = class HomeComponent {
    constructor(fb, apiService, router, shareData) {
        this.fb = fb;
        this.apiService = apiService;
        this.router = router;
        this.shareData = shareData;
        this.loader = false;
        this.displayedColumns = ['orgkey', 'name', 'country', 'graph'];
        // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.searchForm = this.fb.group({
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country: ['']
        });
        console.log('loader', this.loader);
    }
    onSubmit(form) {
        console.log('Valid?', form.valid); // true or false
        console.log('Company Name', form.value.companyName);
        console.log('Country', form.value.country);
        this.loader = true;
        this.apiService
            .getData(form.value.companyName, form.value.country)
            .subscribe(data => {
            this.loader = false;
            console.log('data', data);
            this.dataSource = data['results'];
        }, err => {
            this.loader = false;
            console.log('err', err);
        });
    }
    showGraph(data) {
        this.router.navigate([`/graph`]);
        this.orgkey = data;
        console.log('Graph data', data);
    }
    ngOnDestroy() {
        this.shareData.node = this.orgkey;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _share_data_service__WEBPACK_IMPORTED_MODULE_7__["ShareDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], HomeComponent.prototype, "paginator", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/core/home/home.component.scss")]
    })
], HomeComponent);

// export interface PeriodicElement {
//   orgkey: string;
//   name: string;
//   country: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   { orgkey: 'Hydrogen', name: 'Hydrogen', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Helium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Lithium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Beryllium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Hydrogen', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Helium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Lithium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Beryllium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Hydrogen', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Helium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Lithium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Beryllium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Hydrogen', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Helium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Lithium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Beryllium', country: 'Hydrogen' }
// ];


/***/ }),

/***/ "./src/app/core/http/cache.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/core/http/cache.interceptor.ts ***!
  \************************************************/
/*! exports provided: CacheInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return CacheInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-cache.service */ "./src/app/core/http/http-cache.service.ts");
var CacheInterceptor_1;





/**
 * Caches HTTP requests.
 * Use ExtendedHttpClient fluent API to configure caching for each request.
 */
let CacheInterceptor = CacheInterceptor_1 = class CacheInterceptor {
    constructor(httpCacheService) {
        this.httpCacheService = httpCacheService;
        this.forceUpdate = false;
    }
    /**
     * Configures interceptor options
     * @param options If update option is enabled, forces request to be made and updates cache entry.
     * @return The configured instance.
     */
    configure(options) {
        const instance = new CacheInterceptor_1(this.httpCacheService);
        if (options && options.update) {
            instance.forceUpdate = true;
        }
        return instance;
    }
    intercept(request, next) {
        if (request.method !== 'GET') {
            return next.handle(request);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((subscriber) => {
            const cachedData = this.forceUpdate ? null : this.httpCacheService.getCacheData(request.urlWithParams);
            if (cachedData !== null) {
                // Create new response to avoid side-effects
                subscriber.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"](cachedData));
                subscriber.complete();
            }
            else {
                next.handle(request)
                    .subscribe(event => {
                    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                        this.httpCacheService.setCacheData(request.urlWithParams, event);
                    }
                    subscriber.next(event);
                }, error => subscriber.error(error), () => subscriber.complete());
            }
        });
    }
};
CacheInterceptor.ctorParameters = () => [
    { type: _http_cache_service__WEBPACK_IMPORTED_MODULE_4__["HttpCacheService"] }
];
CacheInterceptor = CacheInterceptor_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CacheInterceptor);



/***/ }),

/***/ "./src/app/core/http/error-handler.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/http/error-handler.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");





const log = new _logger_service__WEBPACK_IMPORTED_MODULE_4__["Logger"]('ErrorHandlerInterceptor');
/**
 * Adds a default error handler to all requests.
 */
let ErrorHandlerInterceptor = class ErrorHandlerInterceptor {
    intercept(request, next) {
        return next
            .handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => this.errorHandler(error)));
    }
    // Customize the default error handler here if needed
    errorHandler(response) {
        if (!_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            // Do something with the error
            log.error('Request error', response);
        }
        throw response;
    }
};
ErrorHandlerInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ErrorHandlerInterceptor);



/***/ }),

/***/ "./src/app/core/http/http-cache.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/http/http-cache.service.ts ***!
  \*************************************************/
/*! exports provided: HttpCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCacheService", function() { return HttpCacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");



const log = new _logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]('HttpCacheService');
const cachePersistenceKey = 'httpCache';
/**
 * Provides a cache facility for HTTP requests with configurable persistence policy.
 */
let HttpCacheService = class HttpCacheService {
    constructor() {
        this.cachedData = {};
        this.storage = null;
        this.loadCacheData();
    }
    /**
     * Sets the cache data for the specified request.
     * @param url The request URL.
     * @param data The received data.
     * @param lastUpdated The cache last update, current date is used if not specified.
     */
    setCacheData(url, data, lastUpdated) {
        this.cachedData[url] = {
            lastUpdated: lastUpdated || new Date(),
            data
        };
        log.debug(`Cache set for key: "${url}"`);
        this.saveCacheData();
    }
    /**
     * Gets the cached data for the specified request.
     * @param url The request URL.
     * @return The cached data or null if no cached data exists for this request.
     */
    getCacheData(url) {
        const cacheEntry = this.cachedData[url];
        if (cacheEntry) {
            log.debug(`Cache hit for key: "${url}"`);
            return cacheEntry.data;
        }
        return null;
    }
    /**
     * Gets the cached entry for the specified request.
     * @param url The request URL.
     * @return The cache entry or null if no cache entry exists for this request.
     */
    getHttpCacheEntry(url) {
        return this.cachedData[url] || null;
    }
    /**
     * Clears the cached entry (if exists) for the specified request.
     * @param url The request URL.
     */
    clearCache(url) {
        delete this.cachedData[url];
        log.debug(`Cache cleared for key: "${url}"`);
        this.saveCacheData();
    }
    /**
     * Cleans cache entries older than the specified date.
     * @param expirationDate The cache expiration date. If no date is specified, all cache is cleared.
     */
    cleanCache(expirationDate) {
        if (expirationDate) {
            Object.entries(this.cachedData).forEach(([key, value]) => {
                if (expirationDate >= value.lastUpdated) {
                    delete this.cachedData[key];
                }
            });
        }
        else {
            this.cachedData = {};
        }
        this.saveCacheData();
    }
    /**
     * Sets the cache persistence policy.
     * Note that changing the cache persistence will also clear the cache from its previous storage.
     * @param persistence How the cache should be persisted, it can be either local or session storage, or if no value is
     *   provided it will be only in-memory (default).
     */
    setPersistence(persistence) {
        this.cleanCache();
        this.storage = persistence === 'local' || persistence === 'session' ? window[persistence + 'Storage'] : null;
        this.loadCacheData();
    }
    saveCacheData() {
        if (this.storage) {
            this.storage.setItem(cachePersistenceKey, JSON.stringify(this.cachedData));
        }
    }
    loadCacheData() {
        const data = this.storage ? this.storage.getItem(cachePersistenceKey) : null;
        this.cachedData = data ? JSON.parse(data) : {};
    }
};
HttpCacheService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpCacheService);



/***/ }),

/***/ "./src/app/core/http/http.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/http/http.service.ts ***!
  \*******************************************/
/*! exports provided: HTTP_DYNAMIC_INTERCEPTORS, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return HTTP_DYNAMIC_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler.interceptor */ "./src/app/core/http/error-handler.interceptor.ts");
/* harmony import */ var _cache_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cache.interceptor */ "./src/app/core/http/cache.interceptor.ts");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token.interceptor */ "./src/app/core/http/token.interceptor.ts");
var HttpService_1;






// From @angular/common/http/src/interceptor: allows to chain interceptors
class HttpInterceptorHandler {
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    handle(request) {
        return this.interceptor.intercept(request, this.next);
    }
}
HttpInterceptorHandler.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHandler"] },
    { type: undefined }
];
/**
 * Allows to override default dynamic interceptors that can be disabled with the HttpService extension.
 * Except for very specific needs, you should better configure these interceptors directly in the constructor below
 * for better readability.
 *
 * For static interceptors that should always be enabled (like ApiPrefixInterceptor), use the standard
 * HTTP_INTERCEPTORS token.
 */
const HTTP_DYNAMIC_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_DYNAMIC_INTERCEPTORS');
/**
 * Extends HttpClient with per request configuration using dynamic interceptors.
 */
let HttpService = HttpService_1 = class HttpService extends _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] {
    constructor(httpHandler, injector, interceptors = []) {
        super(httpHandler);
        this.httpHandler = httpHandler;
        this.injector = injector;
        this.interceptors = interceptors;
        if (!this.interceptors) {
            // Configure default interceptors that can be disabled here
            this.interceptors = [
                this.injector.get(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerInterceptor"]),
                this.injector.get(_token_interceptor__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptor"])
            ];
        }
        // const addToken = this.injector.get(TokenInterceptor as Type<
        //   TokenInterceptor
        // >);
        // this.addInterceptor(addToken);
    }
    cache(forceUpdate) {
        const cacheInterceptor = this.injector
            .get(_cache_interceptor__WEBPACK_IMPORTED_MODULE_4__["CacheInterceptor"])
            .configure({ update: forceUpdate });
        return this.addInterceptor(cacheInterceptor);
    }
    skipErrorHandler() {
        return this.removeInterceptor(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerInterceptor"]);
    }
    // Override the original method to wire interceptors when triggering the request.
    request(method, url, options) {
        const handler = this.interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.httpHandler);
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](handler).request(method, url, options);
    }
    removeInterceptor(interceptorType) {
        return new HttpService_1(this.httpHandler, this.injector, this.interceptors.filter(i => !(i instanceof interceptorType)));
    }
    addInterceptor(interceptor) {
        return new HttpService_1(this.httpHandler, this.injector, this.interceptors.concat([interceptor]));
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHandler"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [HTTP_DYNAMIC_INTERCEPTORS,] }] }
];
HttpService = HttpService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(HTTP_DYNAMIC_INTERCEPTORS))
], HttpService);



/***/ }),

/***/ "./src/app/core/http/token.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/core/http/token.interceptor.ts ***!
  \************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! microsoft-adal-angular6 */ "./node_modules/microsoft-adal-angular6/fesm2015/microsoft-adal-angular6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






// import { ToastrService } from 'ngx-toastr';
let TokenInterceptor = class TokenInterceptor {
    constructor(adalSvc, router // private toastr: ToastrService
    ) {
        this.adalSvc = adalSvc;
        this.router = router;
    }
    intercept(request, next) {
        if (request.url.indexOf('http://localhost') >= 0) {
            return next.handle(request);
        }
        return this.addTokenSendRequest(request, next);
    }
    addTokenSendRequest(request, next) {
        let token = '';
        let TokenResource = '';
        console.log('this.adalSvc0', this.adalSvc);
        if (!/^(http|https):/i.test(request.url)) {
            request = request.clone({
                url: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].CoreApiDomain + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].CoreApiPrefix + request.url,
                setHeaders: {
                    'api-version': '2.0'
                }
            });
        }
        if (request.url.indexOf(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].CoreApiDomain) >= 0) {
            token = this.adalSvc.getToken(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].CoreApiDomain);
            TokenResource = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].CoreApiDomain;
        }
        else {
            token = null;
        }
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        console.log('token', token);
        console.log('TokenResource', TokenResource);
        console.log('this.adalSvc', this.adalSvc);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => {
            if (e.status === 401 && e.url && e.url.indexOf(TokenResource) >= 0) {
                return this.adalSvc.acquireToken(TokenResource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
                    // if (environment.toast) {
                    //   this.toastr.error(err.message, 'Request error');
                    // }
                    throw err;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(a => {
                    return this.addTokenSendRequest(request, next);
                }));
            }
            else {
                // if (environment.toast) {
                //   this.toastr.error(e.message, 'Request error');
                // }
                console.log('this.adalSv111c', this.adalSvc);
                if (!this.adalSvc.isAuthenticated) {
                    this.router.navigate(['']);
                }
                throw e;
            }
        }));
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_3__["MsAdalAngular6Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] // private toastr: ToastrService
     }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], TokenInterceptor);



/***/ }),

/***/ "./src/app/core/i18n.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/i18n.service.ts ***!
  \**************************************/
/*! exports provided: I18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return I18nService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.service */ "./src/app/core/logger.service.ts");
/* harmony import */ var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../translations/en-US.json */ "./src/translations/en-US.json");
var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../translations/en-US.json */ "./src/translations/en-US.json", 1);





const log = new _logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]('I18nService');
const languageKey = 'language';
let I18nService = class I18nService {
    // private langChangeSubscription!: Subscription;
    constructor(translateService) {
        this.translateService = translateService;
        // Embed languages to avoid extra HTTP requests
        translateService.setTranslation('en-US', _translations_en_US_json__WEBPACK_IMPORTED_MODULE_4__);
    }
    /**
     * Initializes i18n for the application.
     * Loads language from local storage if present, or sets default language.
     * @param defaultLanguage The default language to use.
     * @param supportedLanguages The list of supported languages.
     */
    init(defaultLanguage, supportedLanguages) {
        this.defaultLanguage = defaultLanguage;
        this.supportedLanguages = supportedLanguages;
        this.language = '';
    }
    getTranslation(key) {
        return this.translateService.get(key);
    }
    /**
     * Sets the current language.
     * Note: The current language is saved to the local storage.
     * If no parameter is specified, the language is loaded from local storage (if present).
     * @param language The IETF language code to set.
     */
    set language(language) {
        language =
            language ||
                localStorage.getItem(languageKey) ||
                this.translateService.getBrowserCultureLang();
        let isSupportedLanguage = this.supportedLanguages.includes(language);
        // If no exact match is found, search without the region
        if (language && !isSupportedLanguage) {
            language = language.split('-')[0];
            language =
                this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
            isSupportedLanguage = Boolean(language);
        }
        // Fallback if language is not supported
        if (!isSupportedLanguage) {
            language = this.defaultLanguage;
        }
        log.debug(`Language set to ${language}`);
        this.translateService.use(language);
    }
    /**
     * Gets the current language.
     * @return The current language code.
     */
    get language() {
        return this.translateService.currentLang;
    }
};
I18nService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
I18nService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], I18nService);



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, I18nService, HTTP_DYNAMIC_INTERCEPTORS, HttpService, HttpCacheService, CacheInterceptor, ErrorHandlerInterceptor, RouteReusableStrategy, LogLevel, Logger, untilDestroyed, HomeComponent, TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n.service */ "./src/app/core/i18n.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return _i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18nService"]; });

/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http/http.service */ "./src/app/core/http/http.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return _http_http_service__WEBPACK_IMPORTED_MODULE_2__["HTTP_DYNAMIC_INTERCEPTORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]; });

/* harmony import */ var _http_http_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http/http-cache.service */ "./src/app/core/http/http-cache.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCacheService", function() { return _http_http_cache_service__WEBPACK_IMPORTED_MODULE_3__["HttpCacheService"]; });

/* harmony import */ var _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http/cache.interceptor */ "./src/app/core/http/cache.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_4__["CacheInterceptor"]; });

/* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http/error-handler.interceptor */ "./src/app/core/http/error-handler.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerInterceptor"]; });

/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route-reusable-strategy */ "./src/app/core/route-reusable-strategy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_6__["RouteReusableStrategy"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logger.service */ "./src/app/core/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_7__["LogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_7__["Logger"]; });

/* harmony import */ var _until_destroyed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./until-destroyed */ "./src/app/core/until-destroyed.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untilDestroyed", function() { return _until_destroyed__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"]; });

/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]; });

/* harmony import */ var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./http/token.interceptor */ "./src/app/core/http/token.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return _http_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"]; });





// export * from './http/api-prefix.interceptor';









/***/ }),

/***/ "./src/app/core/logger.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/logger.service.ts ***!
  \****************************************/
/*! exports provided: LogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
class Logger {
    constructor(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    static enableProductionMode() {
        Logger.level = LogLevel.Warning;
    }
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    debug(...objects) {
        this.log(console.log, LogLevel.Debug, objects);
    }
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    info(...objects) {
        this.log(console.info, LogLevel.Info, objects);
    }
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    warn(...objects) {
        this.log(console.warn, LogLevel.Warning, objects);
    }
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    error(...objects) {
        this.log(console.error, LogLevel.Error, objects);
    }
    log(func, level, objects) {
        if (level <= Logger.level) {
            const log = this.source
                ? ['[' + this.source + ']'].concat(objects)
                : objects;
            func.apply(console, log);
            Logger.outputs.forEach(output => output.apply(output, [this.source, level, ...objects]));
        }
    }
}
/**
 * Current logging level.
 * Set it to LogLevel.Off to disable logs completely.
 */
Logger.level = LogLevel.Debug;
/**
 * Additional log outputs.
 */
Logger.outputs = [];
Logger.ctorParameters = () => [
    { type: String }
];


/***/ }),

/***/ "./src/app/core/route-reusable-strategy.ts":
/*!*************************************************!*\
  !*** ./src/app/core/route-reusable-strategy.ts ***!
  \*************************************************/
/*! exports provided: RouteReusableStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return RouteReusableStrategy; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
class RouteReusableStrategy extends _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouteReuseStrategy"] {
    shouldDetach(route) {
        return false;
    }
    store(route, detachedTree) { }
    shouldAttach(route) {
        return false;
    }
    retrieve(route) {
        return null;
    }
    shouldReuseRoute(future, curr) {
        return (future.routeConfig === curr.routeConfig) || future.data.reuse;
    }
}


/***/ }),

/***/ "./src/app/core/until-destroyed.ts":
/*!*****************************************!*\
  !*** ./src/app/core/until-destroyed.ts ***!
  \*****************************************/
/*! exports provided: untilDestroyed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untilDestroyed", function() { return untilDestroyed; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


const untilDestroyedSymbol = Symbol('untilDestroyed');
/**
 * RxJS operator that unsubscribe from observables on destory.
 * Code forked from https://github.com/NetanelBasal/ngx-take-until-destroy
 *
 * IMPORTANT: Add the `untilDestroyed` operator as the last one to prevent leaks with intermediate observables in the
 * operator chain.
 *
 * @param instance The parent Angular component or object instance.
 * @param destroyMethodName The method to hook on (default: 'ngOnDestroy').
 * @example
 * ```
 * import { untilDestroyed } from '@app/core';
 *
 * @Component({
 * selector: 'app-example',
 *   templateUrl: './example.component.html'
 * })
 * export class ExampleComponent implements OnInit, OnDestroy {
 *   ngOnInit() {
 *     interval(1000)
 *       .pipe(untilDestroyed(this))
 *       .subscribe(val => console.log(val));
 *   }
 *
 *   // This method must be present, even if empty.
 *   ngOnDestroy() {
 *     // To protect you, an error will be thrown if it doesn't exist.
 *   }
 * }
 * ```
 */
function untilDestroyed(instance, destroyMethodName = 'ngOnDestroy') {
    return (source) => {
        const originalDestroy = instance[destroyMethodName];
        const hasDestroyFunction = typeof originalDestroy === 'function';
        if (!hasDestroyFunction) {
            throw new Error(`${instance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
        }
        if (!instance[untilDestroyedSymbol]) {
            instance[untilDestroyedSymbol] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            instance[destroyMethodName] = function () {
                if (hasDestroyFunction) {
                    originalDestroy.apply(this, arguments);
                }
                instance[untilDestroyedSymbol].next();
                instance[untilDestroyedSymbol].complete();
            };
        }
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(instance[untilDestroyedSymbol]));
    };
}


/***/ }),

/***/ "./src/app/share-data.service.ts":
/*!***************************************!*\
  !*** ./src/app/share-data.service.ts ***!
  \***************************************/
/*! exports provided: ShareDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDataService", function() { return ShareDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShareDataService = class ShareDataService {
    constructor() { }
};
ShareDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShareDataService);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding: 10px;\n  text-align: center;\n  color: #868686;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWtlbmRyYS5rdW1hci9Eb2N1bWVudHMvY29ycmVjdC9PcmdJbnRsL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiKDEzNCwgMTM0LCAxMzQpO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4iLCJmb290ZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODY4Njg2O1xuICBmb250LXNpemU6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.copyrightYear = new Date().getFullYear();
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 90px;\n  background: #0e0e0e;\n  color: #ffffff;\n  display: flex;\n}\n\n.logo-box {\n  width: 80%;\n  padding: 10px 10px 20px 20px;\n}\n\n.logo-box img {\n  height: 35px;\n}\n\n.profile-box {\n  width: 20%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-right: 30px;\n}\n\n.app-name {\n  margin-top: 5px;\n  font-weight: bold;\n  font-size: 17px;\n}\n\n.signout {\n  font-size: 30px;\n  color: #f0f0f0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWtlbmRyYS5rdW1hci9Eb2N1bWVudHMvY29ycmVjdC9PcmdJbnRsL3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmxvZ28tYm94IHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDIwcHggMjBweDtcbn1cblxuLmxvZ28tYm94IGltZyB7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLnByb2ZpbGUtYm94IHtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4uYXBwLW5hbWUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5zaWdub3V0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2YwZjBmMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLmhlYWRlciB7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZDogIzBlMGUwZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sb2dvLWJveCB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAyMHB4IDIwcHg7XG59XG5cbi5sb2dvLWJveCBpbWcge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5wcm9maWxlLWJveCB7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLmFwcC1uYW1lIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uc2lnbm91dCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! microsoft-adal-angular6 */ "./node_modules/microsoft-adal-angular6/fesm2015/microsoft-adal-angular6.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);





let HeaderComponent = class HeaderComponent {
    constructor(adalSvc) {
        this.adalSvc = adalSvc;
        this.appName = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APPName;
        this.userName = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(sessionStorage.getItem('adal.idtoken'))['name'];
    }
    ngOnInit() {
        // console.log('x', jwt_decode(sessionStorage.getItem('adal.idtoken')));
    }
    logout() {
        this.adalSvc.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_2__["MsAdalAngular6Service"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/header/user-profile/user-profile.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/header/user-profile/user-profile.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-block {\n  margin-right: 10px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.user-name {\n  color: #bbbbbb;\n  text-align: right;\n  font-size: 14px;\n  line-height: 15px;\n}\n\n.user-designation {\n  color: #bbbbbb;\n  text-align: right;\n  font-size: 11px;\n  margin-top: 4px;\n}\n\n.profile-holder {\n  width: 44px;\n  height: 42px;\n  border-radius: 50%;\n  padding-left: 10px;\n}\n\n.user-pic {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWtlbmRyYS5rdW1hci9Eb2N1bWVudHMvY29ycmVjdC9PcmdJbnRsL3NyYy9hcHAvc2hhcmVkL2hlYWRlci91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGVhZGVyL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FETUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWJsb2NrIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vLyAudXNlci1kZXRhaWxzIHtcbi8vICAgbWFyZ2luLXRvcDogMzBweDtcbi8vIH1cblxuLnVzZXItbmFtZSB7XG4gIGNvbG9yOiAjYmJiYmJiO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuLnVzZXItZGVzaWduYXRpb24ge1xuICBjb2xvcjogI2JiYmJiYjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4ucHJvZmlsZS1ob2xkZXIge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnVzZXItcGljIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIiwiLnVzZXItYmxvY2sge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi51c2VyLW5hbWUge1xuICBjb2xvcjogI2JiYmJiYjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi51c2VyLWRlc2lnbmF0aW9uIHtcbiAgY29sb3I6ICNiYmJiYmI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnByb2ZpbGUtaG9sZGVyIHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi51c2VyLXBpYyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/header/user-profile/user-profile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/header/user-profile/user-profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserProfileComponent = class UserProfileComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserProfileComponent.prototype, "userName", void 0);
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header/user-profile/user-profile.component.html"),
        styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/shared/header/user-profile/user-profile.component.scss")]
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, LoaderComponent, LayoutComponent, HeaderComponent, FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]; });

/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]; });








/***/ }),

/***/ "./src/app/shared/layout/layout.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/layout.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\n  width: 100%;\n  margin: 0 auto;\n  min-height: 100%;\n  background: #fbfbfb;\n}\n\n.footer-page {\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n}\n\n.home-page {\n  padding: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWtlbmRyYS5rdW1hci9Eb2N1bWVudHMvY29ycmVjdC9PcmdJbnRsL3NyYy9hcHAvc2hhcmVkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xufVxuXG4uZm9vdGVyLXBhZ2Uge1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ob21lLXBhZ2Uge1xuICBwYWRkaW5nOiA0MHB4O1xufVxuIiwiLmFwcC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG59XG5cbi5mb290ZXItcGFnZSB7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhvbWUtcGFnZSB7XG4gIHBhZGRpbmc6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/layout/layout.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() { }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/shared/layout/layout.component.scss")]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/shared/loader/loader.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa {\n  vertical-align: middle;\n}\n\n.centered {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transform: -webkit-translate(-50%, -50%);\n  transform: -moz-translate(-50%, -50%);\n  transform: -ms-translate(-50%, -50%);\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWtlbmRyYS5rdW1hci9Eb2N1bWVudHMvY29ycmVjdC9PcmdJbnRsL3NyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiAtd2Via2l0LXRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiAtbW96LXRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiAtbXMtdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogYmxhY2s7XG59XG4iLCIuZmEge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY2VudGVyZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IC13ZWJraXQtdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IC1tb3otdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IC1tcy10cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    constructor() {
        this.isLoading = false;
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoaderComponent.prototype, "isLoading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoaderComponent.prototype, "message", void 0);
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/loader/loader.component.html"),
        styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/loader/loader.component.scss")]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/shared/profile-image/profile-image.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/profile-image/profile-image.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-pic {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-right: 14px;\n  background-position: center top;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWtlbmRyYS5rdW1hci9Eb2N1bWVudHMvY29ycmVjdC9PcmdJbnRsL3NyYy9hcHAvc2hhcmVkL3Byb2ZpbGUtaW1hZ2UvcHJvZmlsZS1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3Byb2ZpbGUtaW1hZ2UvcHJvZmlsZS1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLCtCQUFBO0VBQ0Esc0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9maWxlLWltYWdlL3Byb2ZpbGUtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1waWMge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgLy8gYmFja2dyb3VuZDogI2IxYjFiMSB1cmwoJ0Bhc3NldHMvaW1hZ2VzL2F2YXRhci5wbmcnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iLCIudXNlci1waWMge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/profile-image/profile-image.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/profile-image/profile-image.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImageComponent", function() { return ProfileImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileImageComponent = class ProfileImageComponent {
    constructor() { }
    ngOnInit() {
        this.showUserPicture();
    }
    showUserPicture() {
        // this.profilePic = '@assets/images/avatar.jpg';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProfileImageComponent.prototype, "userId", void 0);
ProfileImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-image',
        template: __webpack_require__(/*! raw-loader!./profile-image.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/profile-image/profile-image.component.html"),
        styles: [__webpack_require__(/*! ./profile-image.component.scss */ "./src/app/shared/profile-image/profile-image.component.scss")]
    })
], ProfileImageComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _header_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/user-profile/user-profile.component */ "./src/app/shared/header/user-profile/user-profile.component.ts");
/* harmony import */ var _profile_image_profile_image_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile-image/profile-image.component */ "./src/app/shared/profile-image/profile-image.component.ts");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _core_graph_graph_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/graph/graph.component */ "./src/app/core/graph/graph.component.ts");


















let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
        ],
        declarations: [
            _loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"],
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _header_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__["UserProfileComponent"],
            _profile_image_profile_image_component__WEBPACK_IMPORTED_MODULE_15__["ProfileImageComponent"],
            _core_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
            _core_graph_graph_component__WEBPACK_IMPORTED_MODULE_17__["GraphComponent"]
        ],
        exports: [
            _loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"],
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _core_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
            _core_graph_graph_component__WEBPACK_IMPORTED_MODULE_17__["GraphComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    hmr: true,
    // version: env.npm_package_version + '-dev',
    serverUrl: '/api',
    defaultLanguage: 'en-US',
    supportedLanguages: ['en-US', 'fr-FR'],
    APPName: 'Organisation Intelligence',
    CoreApiDomain: 'https://orgintel-dev-cd.sbp.eyclienthub.com',
    CoreApiPrefix: '/api',
    config: {
        tenant: 'eygs.onmicrosoft.com',
        clientId: 'e8680160-3b27-4c78-8c0e-6a6a1e6ca2c1',
        cacheLocation: 'sessionStorage',
        endpoints: {
            'https:// orgintel-dev-cd.sbp.eyclienthub.com': 'e8680160-3b27-4c78-8c0e-6a6a1e6ca2c1'
        }
    },
    postLogoutRedirectUri: 'http://localhost:4200/logout.html'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/translations/en-US.json":
/*!*************************************!*\
  !*** ./src/translations/en-US.json ***!
  \*************************************/
/*! exports provided: APP_NAME, HOME_NAV_LABEL, Find, Upload, Request, Govern, Collaborate, Pool, FindDesc, UploadDesc, RequestDesc, GovernDesc, CollaborateDesc, PoolDesc, Copyright, Home, MyEngagements, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"APP_NAME\":\"Trusted data fabric\",\"HOME_NAV_LABEL\":\"Data actions\",\"Find\":\"Find\",\"Upload\":\"Upload\",\"Request\":\"Request\",\"Govern\":\"Govern\",\"Collaborate\":\"Collaborate\",\"Pool\":\"Pool\",\"FindDesc\":\"Search or find data\",\"UploadDesc\":\"Upload dataset into fabric\",\"RequestDesc\":\"Submit request for data access\",\"GovernDesc\":\"Inform data governance process\",\"CollaborateDesc\":\"Data interaction activities\",\"PoolDesc\":\"Formalize data container\",\"Copyright\":\"EYGM Limited. All rights reserved.\",\"Home\":\"Home\",\"MyEngagements\":\"My engagements\"}");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nakendra.kumar/Documents/correct/OrgIntl/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map