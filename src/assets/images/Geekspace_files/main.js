(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/highlights/highlights.component */ "./src/app/components/highlights/highlights.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/requests/requests.component */ "./src/app/components/requests/requests.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/new-product/new-product.component */ "./src/app/components/new-product/new-product.component.ts");









var routes = [
    { path: '', component: _components_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_3__["HighlightsComponent"] },
    { path: 'carrinho', component: _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        children: [
            { path: 'meus-pedidos', component: _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_5__["RequestsComponent"] },
            { path: 'meus-favoritos', component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__["FavoritesComponent"] },
            { path: 'novo-produto', component: _components_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_8__["NewProductComponent"] }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>  \n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'geekspace';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/highlights/highlights.component */ "./src/app/components/highlights/highlights.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/requests/requests.component */ "./src/app/components/requests/requests.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var _components_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/new-product/new-product.component */ "./src/app/components/new-product/new-product.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_7__["HighlightsComponent"],
                _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_13__["RequestsComponent"],
                _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_14__["FavoritesComponent"],
                _components_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_17__["NewProductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [
                _services_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"],
                _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_10__["ShoppingCartService"],
                _services_requests_service__WEBPACK_IMPORTED_MODULE_15__["RequestsService"],
                _services_favorites_service__WEBPACK_IMPORTED_MODULE_16__["FavoritesService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n    overflow-x: hidden;\n    font-family: Din;\n}\n  \n#sidebar-wrapper {\n    min-height: 100vh;\n    margin-left: -15rem;\n    transition: margin .25s ease-out;\n    background-color: #222222\n}\n  \n#sidebar-wrapper .sidebar-heading {\n    padding: 0.875rem 1.25rem;\n    font-size: 30px;\n    text-align: center;\n    color: #c1c1c1;\n}\n  \n.list-group-item {\n    color: #c1c1c1;\n    background-color: #222222;\n    font-size: 20px;\n    border-bottom: 2px solid #c1c1c1;\n}\n  \n.list-group-item i {\n    padding-right: 10px;\n    margin-left: 35px;\n}\n  \n#sidebar-wrapper .list-group {\n    width: 15rem;;\n    background-color: #222222;\n}\n  \n#page-content-wrapper {\n    min-width: 100vw;\n}\n  \n#dash-content {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border: 3px solid #b2b2b2;\n    min-width: 80vw;\n    min-height: 40vw;\n}\n  \n#wrapper.toggled #sidebar-wrapper {\n    margin-left: 0;\n}\n  \n#menu-toggle {\n    font-size: 30px;\n    margin-top: 200px;\n    color: #FFD933;\n}\n  \n@media (min-width: 768px) {\n    #sidebar-wrapper {\n      margin-left: 0;\n    }\n  \n    #page-content-wrapper {\n      min-width: 0;\n      width: 100%;\n    }\n  \n    #wrapper.toggled #sidebar-wrapper {\n      margin-left: -15rem;\n    }\n\n}\n  \n@media (max-width: 768px) {\n    #dash-content {\n        min-height: 130vw;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUluQixnQ0FBZ0M7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxZQUFZO01BQ1osV0FBVztJQUNiOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGZvbnQtZmFtaWx5OiBEaW47XG59XG4gIFxuI3NpZGViYXItd3JhcHBlciB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMlxufVxuICBcbiNzaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGluZyB7XG4gICAgcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjYzFjMWMxO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgICBjb2xvcjogI2MxYzFjMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2MxYzFjMTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSBpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xufVxuICBcbiNzaWRlYmFyLXdyYXBwZXIgLmxpc3QtZ3JvdXAge1xuICAgIHdpZHRoOiAxNXJlbTs7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbn1cbiAgXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG59XG5cbiNkYXNoLWNvbnRlbnQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNiMmIyYjI7XG4gICAgbWluLXdpZHRoOiA4MHZ3O1xuICAgIG1pbi1oZWlnaHQ6IDQwdnc7XG59XG4gIFxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbn1cblxuI21lbnUtdG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgY29sb3I6ICNGRkQ5MzM7XG59XG4gIFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgI3NpZGViYXItd3JhcHBlciB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gIFxuICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIFxuICAgICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XG4gICAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xuICAgIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAjZGFzaC1jb250ZW50IHtcbiAgICAgICAgbWluLWhlaWdodDogMTMwdnc7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div class=\"d-flex\" id=\"wrapper\">\n\n    <!-- Sidebar -->\n    <div class=\"border-right\" id=\"sidebar-wrapper\">\n      <div class=\"sidebar-heading\" style=\"border-bottom: 1px solid #c1c1c1;\">MINHA CONTA</div>\n      <div class=\"list-group list-group-flush\">\n        <a href=\"#\" [routerLink]=\"[ 'meus-pedidos' ]\" class=\"list-group-item list-group-item-action\"><i class=\"fas fa-gift\"></i>Meus pedidos</a>\n        <a href=\"#\" [routerLink]=\"[ 'meus-favoritos' ]\" class=\"list-group-item list-group-item-action\"><i class=\"fas fa-heart\"></i>Meus favoritos</a>\n        <a href=\"#\" [routerLink]=\"[ 'novo-produto' ]\" class=\"list-group-item list-group-item-action\"><i class=\"fas fa-gift\"></i>Novo produto</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action\"><i class=\"fas fa-sign-out-alt\"></i>Sair</a>\n      </div>\n    </div>\n    <!-- /#sidebar-wrapper -->\n\n    <!-- Page Content -->\n    <div id=\"page-content-wrapper\">\n      <div class=\"container-fluid\">\n        <div class=\"mt-3\">\n          <a id=\"menu-toggle\"><i class=\"fas fa-bars\"></i></a>\n        </div>\n        <div id=\"dash-content\" class=\"mb-3\">\n            <div class=\"container-fluid mt-2\">\n              <router-outlet></router-outlet>      \n            </div>\n        </div>\n      </div>\n    </div>\n    <!-- /#page-content-wrapper -->\n\n  </div>\n  <!-- /#wrapper -->\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#menu-toggle").click(function (e) {
            e.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_2___default()("#wrapper").toggleClass("toggled");
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/favorites/favorites.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-warning {\n    font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtd2FybmluZyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3\">\n  <h1>Meus favoritos</h1>\n</div>\n<ng-container *ngIf=\"favorites.length == 0; else listTemplate\">\n  <div class=\"col-md-8 col-sm-12 offset-md-2\">\n    <div class=\"alert alert-warning text-center\" role=\"alert\">\n      <i class=\"fas fa-exclamation-triangle\"></i>\n      <span>\n        Você ainda não possui favoritos\n      </span>\n    </div>\n  </div>\n</ng-container>\n<ng-template #listTemplate>\n  <div *ngFor=\"let favorite of favorites\">\n    <div class=\"card shadow\">\n      <div class=\"card-body\">\n        <span style=\"font-size: 20px\">{{favorite.name}}</span>\n      </div>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/favorites.service */ "./src/app/services/favorites.service.ts");



var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(favoritesService) {
        this.favoritesService = favoritesService;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        console.log(this.favoritesService.getFavorites().length);
    };
    Object.defineProperty(FavoritesComponent.prototype, "favorites", {
        get: function () {
            return this.favoritesService.getFavorites();
        },
        enumerable: true,
        configurable: true
    });
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/components/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/components/favorites/favorites.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Primeira linha*/\n/*Todas as colunas coluna*/\n.imageBackground{\n    background-image: url('header.png');\n    height: 175px;\n}\n/*Primeira coluna*/\n.brand{\n    color: white;\n    font-size: 15px;\n    font-family: Din;\n    margin-left: 50px;\n    margin-right:50px;  \n}\na.brand:link{\n    font-size: 80px;\n    font-family: AppleColorEmoji;    \n    color: #FFD933;\n    text-decoration: none;  \n}\na.brand:visited{\n    font-size: 83px;\n    color: #FFD933;\n}\na.brand:hover{\n    font-family: AppleColorEmoji;\n    font-size: 80px;\n    color: #FFD933;\n}\na.brand:active{\n    font-size: 80px;\n    color: #FFD933;\n}\n/*Segunda coluna*/\n.pesquisar{\n    padding-top:47px;  \n    width: 500px;\n\n}\n/*Terceira coluna*/\n.separator{\n    border-left: #FFD933 solid 1px;\n}\n.account{\n   padding-top: 50px;\n}\n.accounttxt\na.accounttxt:link{   \n    color: #FFD933;\n    text-decoration: none;  \n}\na.accounttxt:visited{\n   \n    color: #FFD933;\n}\na.accounttxt:hover{\n    color: #FFD933;\n}\na.accounttxt:active{\n    color: #FFD933;\n}\n/*Segunda linha*/\n/*Todas as colunas*/\n.yellowBackground{\n    width: 100%;\n    background-color: #FFD933;\n    height: 70px;\n    text-align: center;\n    \n    \n    \n}\na.bar:link{   \n    color: black;\n    text-decoration: none;  \n}\na.bar:visited{\n   \n    color:black;\n}\na.bar:hover{\n    color:black;\n}\na.bar:active{\n    color:black;\n}\n@font-face {\n    font-family: Din;\n    src: url('DINCondensed-Bold.ttf');\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FBQ2pCLDBCQUEwQjtBQUMxQjtJQUNJLG1DQUEwRDtJQUMxRCxhQUFhO0FBQ2pCO0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGdCQUFnQjtJQUNoQixZQUFZOztBQUVoQjtBQUdBLGtCQUFrQjtBQUNsQjtJQUNJLDhCQUE4QjtBQUNsQztBQUVBO0dBQ0csaUJBQWlCO0FBQ3BCO0FBQ0E7O0lBRUksY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBOztJQUVJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFFQSxnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCOzs7O0FBSXRCO0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQWNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlDQUFxRDtBQUN6RCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypQcmltZWlyYSBsaW5oYSovXG4vKlRvZGFzIGFzIGNvbHVuYXMgY29sdW5hKi9cbi5pbWFnZUJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIucG5nXCIpO1xuICAgIGhlaWdodDogMTc1cHg7XG59XG5cbi8qUHJpbWVpcmEgY29sdW5hKi9cbi5icmFuZHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBEaW47XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OjUwcHg7ICBcbn1cbmEuYnJhbmQ6bGlua3tcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFwcGxlQ29sb3JFbW9qaTsgICAgXG4gICAgY29sb3I6ICNGRkQ5MzM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgXG59XG5hLmJyYW5kOnZpc2l0ZWR7XG4gICAgZm9udC1zaXplOiA4M3B4O1xuICAgIGNvbG9yOiAjRkZEOTMzO1xufVxuYS5icmFuZDpob3ZlcntcbiAgICBmb250LWZhbWlseTogQXBwbGVDb2xvckVtb2ppO1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBjb2xvcjogI0ZGRDkzMztcbn1cbmEuYnJhbmQ6YWN0aXZle1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBjb2xvcjogI0ZGRDkzMztcbn1cblxuLypTZWd1bmRhIGNvbHVuYSovXG4ucGVzcXVpc2Fye1xuICAgIHBhZGRpbmctdG9wOjQ3cHg7ICBcbiAgICB3aWR0aDogNTAwcHg7XG5cbn1cblxuXG4vKlRlcmNlaXJhIGNvbHVuYSovXG4uc2VwYXJhdG9ye1xuICAgIGJvcmRlci1sZWZ0OiAjRkZEOTMzIHNvbGlkIDFweDtcbn1cblxuLmFjY291bnR7XG4gICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbi5hY2NvdW50dHh0XG5hLmFjY291bnR0eHQ6bGlua3sgICBcbiAgICBjb2xvcjogI0ZGRDkzMztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICBcbn1cbmEuYWNjb3VudHR4dDp2aXNpdGVke1xuICAgXG4gICAgY29sb3I6ICNGRkQ5MzM7XG59XG5hLmFjY291bnR0eHQ6aG92ZXJ7XG4gICAgY29sb3I6ICNGRkQ5MzM7XG59XG5hLmFjY291bnR0eHQ6YWN0aXZle1xuICAgIGNvbG9yOiAjRkZEOTMzO1xufVxuXG4vKlNlZ3VuZGEgbGluaGEqL1xuLypUb2RhcyBhcyBjb2x1bmFzKi9cbi55ZWxsb3dCYWNrZ3JvdW5ke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQ5MzM7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBcbiAgICBcbn1cblxuYS5iYXI6bGlua3sgICBcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgXG59XG5hLmJhcjp2aXNpdGVke1xuICAgXG4gICAgY29sb3I6YmxhY2s7XG59XG5hLmJhcjpob3ZlcntcbiAgICBjb2xvcjpibGFjaztcbn1cbmEuYmFyOmFjdGl2ZXtcbiAgICBjb2xvcjpibGFjaztcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IERpbjtcbiAgICBzcmM6IHVybCguLi8uLi8uLi9hc3NldHMvZm9udHMvRElOQ29uZGVuc2VkLUJvbGQudHRmKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"imageBackground\">\n  <div class=\"container-fluid\">\n\n    <!--Brand-->\n    <div class=\"row\">\n      <div class=\"col\">\n        <a href=\"#\" class=\"brand\"> geek </a>\n        <br>\n        <p class=\"brand\"><b>PRODUTOS GEEKS, NERDS E CRIATIVOS.</b></p>\n      \n    </div>\n    <!--Brand-->\n\n    <!--Search-->\n      <div class=\"col-6 pesquisar\">\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2 pesquisar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0 \" type=\"submit\">Search</button>\n        </form>\n      </div>\n    <!--/Search-->\n\n      <!--My account-->\n      <div class=\"col account\">\n          <table class=\"table table-borderless\">\n              <thead>\n                <tr>\n                  <th scope=\"col\"> <a class=\"accounttxt\" href=\"\">MINHA CONTA</a></th>\n                  <th scope=\"col\" class=\"separator\"></th>\n                  <th scope=\"col\"> <a href=\"\"><img style=\"widows: 20px; height:20px;\" src=\"../../../assets/images/shopping-cart-solid.svg\" alt=\"\"></a> </th>\n                </tr>\n              </thead>\n            </table>\n      </div>\n      <!--My account-->\n    \n    </div>\n\n    <!--nav-->\n    <div class=\"row\">\n      <div class=\"yellowBackground\">\n          <table class=\"table table-borderless \">\n              <tbody>\n                <tr>\n                  <td> <img src=\"../../../assets/images/spiderman.svg\" alt=\"\"> <a class=\"bar\" href=\"\"> COLECIONÁVEIS </a> </td>\n                  <td> <img src=\"../../../assets/images/shirt.svg\" alt=\"\"> <a class=\"bar\" href=\"\">CAMISAS</a> </td>\n                  <td> <img src=\"../../../assets/images/Cafe-coffee-cup-hot.svg\" alt=\"\"> <a class=\"bar\" href=\"\">CANECAS</a> </td>\n                  <td> <img src=\"../../../assets/images/headphones.svg\" alt=\"\"> <a class=\"bar\" href=\"\">ACESSÓRIOS</a> </td>\n                </tr>\n              </tbody>\n            </table>\n      </div>\n      \n    </div>\n    \n      \n    \n    <!--nav-->\n  </div>\n</nav>\n<!--Header-->\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/highlights/highlights.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/highlights/highlights.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".destaque {\n    border-bottom: 4px solid black;\n    font-family: Din;\n}\n\n.product-title {\n    font-size: 24px;\n    color: #575757;\n    /* margin-bottom: -5px; */\n    font-family: Din;\n}\n\n.product-price {\n    font-size: 40px;\n    color:black;\n    font-weight: bold;\n    font-family: Din;\n}\n\n.btn-want {\n    border: 2px solid #00D510;\n    color: #575757;\n    width: 100%;\n    font-family: Din;\n    font-size: 30px;\n    height: 50px;\n}\n\n.btn-want:hover {\n    background-color: #00D510;\n    color: white;\n}\n\n.highlights {\n    margin-left: auto;\n    margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oaWdobGlnaHRzL2hpZ2hsaWdodHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hpZ2hsaWdodHMvaGlnaGxpZ2h0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc3RhcXVlIHtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6IERpbjtcbn1cblxuLnByb2R1Y3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzU3NTc1NztcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAtNXB4OyAqL1xuICAgIGZvbnQtZmFtaWx5OiBEaW47XG59XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IERpbjtcbn1cblxuLmJ0bi13YW50IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBENTEwO1xuICAgIGNvbG9yOiAjNTc1NzU3O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBEaW47XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmJ0bi13YW50OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBENTEwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhpZ2hsaWdodHMge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/highlights/highlights.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/highlights/highlights.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h1 class=\"destaque\">DESTAQUES</h1>\n    </div>\n  </div>\n\n  <div class=\"row \">\n    <div *ngFor=\"let product of products\" class=\"col-md-3\">\n      <div class=\"card mt-4\" style=\"width: 16rem; border: none\">\n        <img class=\"card-img-top\" src=\"{{product.picture}}\" style=\"height: 270px\" alt=\"Card image cap\">\n        <div class=\"card-body\" style=\"padding-bottom: 10px;\">\n          <h5 class=\"card-title product-title\">{{product.name}}</h5>\n          <h4 class=\"product-price\">R$ {{product.price}}</h4>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <a href=\"#\" class=\"btn btn-outline-success btn-want\" (click)=\"addItem(product)\" [routerLink]=\"['/carrinho']\" routerLinkActive=\"router-link-active\" >EU QUERO!</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    \n\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/highlights/highlights.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/highlights/highlights.component.ts ***!
  \***************************************************************/
/*! exports provided: HighlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightsComponent", function() { return HighlightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");




var HighlightsComponent = /** @class */ (function () {
    function HighlightsComponent(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
    }
    HighlightsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    HighlightsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
            console.log(_this.products);
        });
    };
    HighlightsComponent.prototype.addItem = function (item) {
        this.cartService.addItem(item);
    };
    HighlightsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-highlights',
            template: __webpack_require__(/*! ./highlights.component.html */ "./src/app/components/highlights/highlights.component.html"),
            styles: [__webpack_require__(/*! ./highlights.component.css */ "./src/app/components/highlights/highlights.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]])
    ], HighlightsComponent);
    return HighlightsComponent;
}());



/***/ }),

/***/ "./src/app/components/new-product/new-product.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/new-product/new-product.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".identation{\n    margin-top:70px; \n    font-size: 20px;\n\n}\n.field{\n    background-color: #FFE884;\n    width: 100px;\n    height: 100px;\n    \n}\nimg{\n    margin: 25px;   \n    width: 50px;\n    height: 50px;\n\n}\n.w{\n    border: 3px solid palevioletred;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctcHJvZHVjdC9uZXctcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSwrQkFBK0I7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ldy1wcm9kdWN0L25ldy1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWRlbnRhdGlvbntcbiAgICBtYXJnaW4tdG9wOjcwcHg7IFxuICAgIGZvbnQtc2l6ZTogMjBweDtcblxufVxuLmZpZWxke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkU4ODQ7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgXG59XG5pbWd7XG4gICAgbWFyZ2luOiAyNXB4OyAgIFxuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcblxufVxuXG4ud3tcbiAgICBib3JkZXI6IDNweCBzb2xpZCBwYWxldmlvbGV0cmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/new-product/new-product.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-product/new-product.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3\">\n  <h1>Escolha o que você quer anunciar</h1>\n\n  <div class=\"row offset-lg-3 identation w\">\n\n    <div class=\"col-lg-2 text-center\">\n      <span>Camiseta</span>\n      <a href=\"\" class=\"align-self-center\">\n        <div class=\"field\">\n          <img src=\"../../../assets/images/tshirt.svg\" alt=\"\">\n        </div>\n      </a>\n    </div>\n\n\n\n\n    <div class=\"col-lg-2 text-center\">\n      <span>Action-figure</span>\n      <a href=\"\">\n        <div class=\"field\">\n          <img src=\"../../../assets/images/iron-man.svg\" alt=\"\">\n        </div>\n      </a>\n\n    </div>\n\n\n    <div class=\"col-lg-2 text-center\">\n      <span>Caneca</span>\n      <a href=\"\">\n        <div class=\"field\">\n          <img src=\"../../../assets/images/\" alt=\"\">\n        </div>\n      </a>\n\n\n    </div>\n\n\n\n    <div class=\"col-lg-2 text-center\">\n      <span>Sticker </span>\n      <a href=\"\">\n        <div class=\"field\">\n          <img src=\"../../../assets/images/new.svg\" alt=\"\">\n        </div>\n      </a>\n    </div>\n\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/new-product/new-product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-product/new-product.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewProductComponent = /** @class */ (function () {
    function NewProductComponent() {
    }
    NewProductComponent.prototype.ngOnInit = function () {
    };
    NewProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-product',
            template: __webpack_require__(/*! ./new-product.component.html */ "./src/app/components/new-product/new-product.component.html"),
            styles: [__webpack_require__(/*! ./new-product.component.css */ "./src/app/components/new-product/new-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "./src/app/components/requests/requests.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/requests/requests.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-warning {\n    font-size: 30px;\n}\n\n.img-card {\n    width: 10px;\n    height: 10px;\n}\n\n.btn-request {\n    background-color: #222222;\n    color: #FFD933;\n    border-radius: 4px;\n    padding: 15px 50px 15px 50px;\n    font-size: 22px;\n    text-align: center;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXF1ZXN0cy9yZXF1ZXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXF1ZXN0cy9yZXF1ZXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LXdhcm5pbmcge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmltZy1jYXJkIHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5idG4tcmVxdWVzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgICBjb2xvcjogI0ZGRDkzMztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMTVweCA1MHB4IDE1cHggNTBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/requests/requests.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/requests/requests.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3\">\n  <h1>Meus pedidos</h1>\n</div>\n\n<button (click)=\"add()\">add</button>\n\n<ng-container *ngIf=\"requests.length == 0; else listTemplate\">\n  <div class=\"col-md-8 col-sm-12 offset-md-2\">\n    <div class=\"alert alert-warning text-center\" role=\"alert\">\n      <i class=\"fas fa-exclamation-triangle\"></i>\n      <span>\n        Você ainda não possui pedidos\n      </span>\n    </div>\n  </div>\n</ng-container>\n<ng-template #listTemplate>\n  <div *ngFor=\"let request of requests\">\n    <div class=\"card shadow mb-2\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-1\">\n            <img src=\"{{request.product.picture}}\" class=\"img-card\" style=\"width: 70px; height: 80px\">\n          </div>\n          <div class=\"col-md-3\">\n            <div style=\"font-size: 30px\">{{request.product.name}}</div>\n            <div style=\"font-size: 30px\">R$ {{request.product.price}} x {{request.quantity}} <span\n                *ngIf=\"request.quantity > 1\">unidades</span> <span *ngIf=\"request.quantity == 1\">unidade</span> </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div style=\"font-size: 30px\">{{request.product.store.name}}</div>\n            <div style=\"font-size: 20px\">{{request.product.store.phone}}</div>\n          </div>\n          <div class=\"col-md-4 mt-2 text-center\">\n            <a href=\"#\" class=\"btn-request\">ACOMPANHAR PEDIDO</a>\n            <!-- <a href=\"#\" class=\"btn btn-danger\">ACOMPANHAR PEDIDO</a> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/requests/requests.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/requests/requests.component.ts ***!
  \***********************************************************/
/*! exports provided: RequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsComponent", function() { return RequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var src_app_models_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/product.model */ "./src/app/models/product.model.ts");
/* harmony import */ var src_app_models_request_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/request.model */ "./src/app/models/request.model.ts");
/* harmony import */ var src_app_models_store_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/store.model */ "./src/app/models/store.model.ts");






var RequestsComponent = /** @class */ (function () {
    function RequestsComponent(requestsService) {
        this.requestsService = requestsService;
    }
    RequestsComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(RequestsComponent.prototype, "requests", {
        get: function () {
            return this.requestsService.getRequests();
        },
        enumerable: true,
        configurable: true
    });
    RequestsComponent.prototype.add = function () {
        var store = new src_app_models_store_model__WEBPACK_IMPORTED_MODULE_5__["Store"](new Array(product), "Mundo Nerd", "111.111.111.1111", "mundonerd@gmail.com", "(83) 98134-3105", 1);
        var picture = "http://d26lpennugtm8s.cloudfront.net/stores/033/028/products/camisaben101-7a4af10a031a49921415121897865855-640-0.jpg";
        var product = new src_app_models_product_model__WEBPACK_IMPORTED_MODULE_3__["Product"]("Camisa Ben 10", "Camisa top", "100% algodão", 100.00, "P", "red", 10, picture, store);
        var request = new src_app_models_request_model__WEBPACK_IMPORTED_MODULE_4__["ResquestModel"](product, 1, product.price * 2);
        this.requestsService.addRequest(request);
        console.log(request);
    };
    RequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-requests',
            template: __webpack_require__(/*! ./requests.component.html */ "./src/app/components/requests/requests.component.html"),
            styles: [__webpack_require__(/*! ./requests.component.css */ "./src/app/components/requests/requests.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"]])
    ], RequestsComponent);
    return RequestsComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#carrinho{\n    font-family: Din;\n}\n\n\nimg{\n    width: 80px;\n    height: 80px;\n}\n\n\n.inputQtd{\n    border-top: none;\n    border-right: none;\n    border-left: none;\n\n    border-color: black;\n\n    width: 50px;\n}\n\n\n.inputCep{\n    border-top: none;\n    border-right: none;\n    border-left: none;\n\n    border-color: black;\n}\n\n\n.titles{\n    font-size: 25px;\n}\n\n\n.btn-finished{\n    margin-top: 10%;\n    background-color: #222222;\n    color: yellow;\n\n    border-radius: 5px 5px 5px 5px;\n\n    width: 120px;\n    height: 35px;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7SUFFakIsbUJBQW1COztJQUVuQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7O0lBRWpCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsYUFBYTs7SUFFYiw4QkFBOEI7O0lBRTlCLFlBQVk7SUFDWixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2FycmluaG97XG4gICAgZm9udC1mYW1pbHk6IERpbjtcbn1cblxuXG5pbWd7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaW5wdXRRdGR7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG5cbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuXG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5pbnB1dENlcHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcblxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbi50aXRsZXN7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uYnRuLWZpbmlzaGVke1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgIGNvbG9yOiB5ZWxsb3c7XG5cbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG5cbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"carrinho\">\n  <h1>CARRINHO DE COMPRAS</h1>\n\n  <div class=\"row\">\n\n    <!-- Column 1 Items -->\n    <div class=\"col-md-7\">\n\n      <table>\n\n        <thead>\n          <th class=\"col-md-6\">Item</th>\n          <th class=\"col-md-2\">Preço</th>\n          <th class=\"col-md-2\">Qtd</th>\n          <th class=\"col-md-2\">Subtotal</th>\n        </thead>\n\n        <hr>\n\n        <thead>\n\n          <th class=\"col-md-6\" *ngFor=\"let item of items()\">\n            <img src=\"{{item.picture}}\">\n\n            <span>{{item.name}}</span>\n          </th>\n\n          <th class=\"col-md-2\">\n            <span>{{item?.price}}</span>\n          </th>\n          {{item | json}}\n          <th class=\"col-md-2\">\n            <input #qtd class=\"inputQtd\" type=\"number\" min=\"0\" max=\"20\" value=\"0\" required>\n          </th>\n\n          <th class=\"col-md-1\">\n            <span>{{ value() }}</span>\n          </th>\n\n          <th class=\"col-md-1\">\n            <i class=\"material-icons\" (click)=\"removeItem(item)\">\n              remove_shopping_cart\n            </i>\n          </th>\n\n        </thead>\n      </table>\n\n\n    </div>\n\n    <!-- Column 2 Shipping-->\n    <div class=\"col-md-5\">\n      <span class=\"titles\">\n        Consultar valor do frete\n      </span>\n\n      <div>\n        <label for=\"cep\">CEP</label>\n        <br>\n        <input name=\"cep\" class=\"inputCep\" type=\"text\">\n      </div>\n      <br>\n\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n        <label class=\"form-check-label\" for=\"exampleRadios1\">\n          PAC - 12 dia(s) úteis R$52,85\n        </label>\n\n        <br>\n\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n        <label class=\"form-check-label\" for=\"exampleRadios1\">\n          Sedex - 7 dia(s) úteis R$72,85\n        </label>\n      </div>\n\n      <hr>\n      <span>\n        Subtotal R$ 150,00\n      </span>\n\n      <hr>\n\n      <span>\n        Total do pedido R$200,00\n      </span>\n      <br>\n\n      <div>\n        <button class=\"btn-finished\" type=\"button\">FINALIZAR PEDIDO</button>\n      </div>\n\n    </div><!-- Column 2 end -->\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");




var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(productService, shoppingCartService) {
        this.productService = productService;
        this.shoppingCartService = shoppingCartService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent.prototype.items = function () {
        return this.shoppingCartService.items;
    };
    ShoppingCartComponent.prototype.total = function () {
        return this.shoppingCartService.total();
    };
    ShoppingCartComponent.prototype.removeItem = function (item) {
        return this.shoppingCartService.removeItem(item);
    };
    ShoppingCartComponent.prototype.addItem = function (item) {
        this.shoppingCartService.addItem(item);
    };
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/components/shopping-cart/shopping-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            src_app_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/models/product.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/product.model.ts ***!
  \*****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(name, description, specification, price, size, color, stock, picture, store, idProduct) {
        this.name = name;
        this.description = description;
        this.specification = specification;
        this.price = price;
        this.size = size;
        this.color = color;
        this.stock = stock;
        this.picture = picture;
        this.store = store;
        this.idProduct = idProduct;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/models/request.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/request.model.ts ***!
  \*****************************************/
/*! exports provided: ResquestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResquestModel", function() { return ResquestModel; });
var ResquestModel = /** @class */ (function () {
    function ResquestModel(product, quantity, subTotal) {
        this.product = product;
        this.quantity = quantity;
        this.subTotal = subTotal;
    }
    return ResquestModel;
}());



/***/ }),

/***/ "./src/app/models/store.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/store.model.ts ***!
  \***************************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
var Store = /** @class */ (function () {
    function Store(products, name, cnpj, email, phone, idStore) {
        this.products = products;
        this.name = name;
        this.cnpj = cnpj;
        this.email = email;
        this.phone = phone;
        this.idStore = idStore;
    }
    return Store;
}());



/***/ }),

/***/ "./src/app/services/favorites.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/favorites.service.ts ***!
  \***********************************************/
/*! exports provided: FavoritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesService", function() { return FavoritesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavoritesService = /** @class */ (function () {
    function FavoritesService() {
        this.favorites = [];
    }
    FavoritesService.prototype.getFavorites = function () {
        return this.favorites;
    };
    FavoritesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FavoritesService);
    return FavoritesService;
}());



/***/ }),

/***/ "./src/app/services/geek.api.ts":
/*!**************************************!*\
  !*** ./src/app/services/geek.api.ts ***!
  \**************************************/
/*! exports provided: GEEK_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEEK_API", function() { return GEEK_API; });
var GEEK_API = "http://localhost:3000";


/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _geek_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geek.api */ "./src/app/services/geek.api.ts");




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(_geek_api__WEBPACK_IMPORTED_MODULE_3__["GEEK_API"] + "/products");
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/requests.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/requests.service.ts ***!
  \**********************************************/
/*! exports provided: RequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsService", function() { return RequestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RequestsService = /** @class */ (function () {
    function RequestsService(http) {
        this.http = http;
        this.requests = [];
    }
    RequestsService.prototype.getRequests = function () {
        return this.requests;
    };
    RequestsService.prototype.addRequest = function (request) {
        this.requests.push(request);
    };
    RequestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RequestsService);
    return RequestsService;
}());



/***/ }),

/***/ "./src/app/services/shopping-cart.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shopping-cart.service.ts ***!
  \***************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService() {
        this.items = [];
    }
    ShoppingCartService.prototype.addItem = function (item) {
        this.items.push(item);
        console.log(this.items);
    };
    ShoppingCartService.prototype.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    ShoppingCartService.prototype.total = function () {
        var total = 0;
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < this.items.length; i++) {
            total += this.items[i].price;
        }
        return total;
    };
    ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/lourival/Desktop/Code/geekspace/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /home/lourival/Desktop/Code/geekspace/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map