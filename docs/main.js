(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\n  <div class=\"menu\">\n    <input type=\"file\" (change)=\"openBackendLog($event)\" [hidden]=\"true\" #backendFileField>\n    <input type=\"file\" (change)=\"openProxyLog($event)\" [hidden]=\"true\" #proxyFileField>\n    <a class=\"button\" id=\"backend-button\" (click)=\"backendFileField.click()\">Add Backend Log</a>\n    <a class=\"button\" id=\"proxy-button\" (click)=\"proxyFileField.click()\">Add Proxy Log</a>\n    <a class=\"button\" id=\"clear-log-button\" (click)=\"clearLogs()\">Clear Log</a>\n  </div>\n  <div class=\"filter-form\">\n    <div class=\"form-data\">\n      <label>Filter by versionID</label>\n      <select id=\"version-ids-select\" (change)=\"changedFilter()\"\n              [(ngModel)]=\"selectedVersionId\">\n        <option value=\"\"></option>\n        <option *ngFor=\"let id of versionIds\" [value]=\"id\">{{ id }}</option>\n      </select>\n      <label>Searching</label>\n      <input type=\"text\" id=\"search-field\" [(ngModel)]=\"searchValue\" (keyup)=\"changedFilter($event)\"\n             placeholder=\"Type to quick search...\">\n    </div>\n    <div class=\"form-data type-filter\">\n      <label>Type</label>\n      <ul>\n        <li *ngFor=\"let t of selectedType\">\n          <input type=\"checkbox\" (change)=\"changedFilter()\" [(ngModel)]=\"t.checked\"> {{ t.label }}\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"form-data date-filter\">\n      <label>Start Date ({{ formatDate(selectedStartDate) }})</label>\n      <input type=\"range\" [(ngModel)]=\"selectedStartDate\"\n             [min]=\"minDate\" [max]=\"selectedEndDate\" (change)=\"changedFilter()\">\n      <label>End Date ({{ formatDate(selectedEndDate) }})</label>\n      <input type=\"range\" [(ngModel)]=\"selectedEndDate\"\n             [min]=\"selectedStartDate\" [max]=\"maxDate\" (change)=\"changedFilter()\">\n    </div>\n\n    <div class=\"form-data actions\">\n      <button id=\"clear-button\" (click)=\"clearFilters()\">Clear Filter</button>\n    </div>\n  </div>\n\n  <div class=\"statistics-container\">\n    Number of logs: {{ filteredLogs.length }} (total: {{ logs.length }})\n  </div>\n\n  <table id=\"output-log\" cellpadding=\"0\" cellspacing=\"0\">\n    <tr>\n      <th style=\"width: 40px\">#</th>\n      <th style=\"width: 120px\">_time</th>\n      <th style=\"width: 80px\">type</th>\n      <th>message</th>\n    </tr>\n    <ng-container *ngFor=\"let l of filteredLogs; let i = index\">\n      <tr class=\"outlog\" (click)=\"toggleInfo(i)\"\n          [class.error]=\"l.type === 'E'\" [class.warning]=\"l.type === 'W'\"\n          [class.proxy]=\"l.src === 'c'\">\n        <td>{{ i }}</td>\n        <td>{{ l.time | date:'M/d/yyyy, HH:mm:ss' }}</td>\n        <td>{{ getType(l.type) }}</td>\n        <td>{{ l.message }}</td>\n      </tr>\n      <tr class=\"outInfo outInfo_{{i}} hidden\">\n        <td></td>\n        <td colspan=\"3\">{{ l.raw }}</td>\n      </tr>\n    </ng-container>\n  </table>\n</div>\n<router-outlet></router-outlet>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  display: flex;\n  flex-flow: column;\n}\n\n.menu {\n  background: #4486d2;\n  width: 100vw;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n\n.menu .button {\n  background: transparent;\n  color: #ffffff;\n  border: none;\n  cursor: pointer;\n  padding: 10px 20px;\n  text-align: center;\n}\n\n.menu .button:hover {\n  background: #000000;\n}\n\n.filter-form {\n  display: flex;\n  justify-content: space-between;\n}\n\n.filter-form .form-data {\n  display: flex;\n  flex-flow: column;\n  width: 22%;\n  margin: 10px;\n}\n\n.filter-form .form-data label {\n  font-size: 12px;\n}\n\n.filter-form .form-data ul {\n  margin: 5px 5px;\n  padding: 0;\n}\n\n.filter-form .form-data.type-filter {\n  width: 100px;\n}\n\n.filter-form .form-data.date-filter {\n  width: 500px;\n}\n\n.filter-form .form-data.actions {\n  width: 150px;\n  justify-content: center;\n}\n\n.statistics-container {\n  width: calc(100% - 20px);\n  font-size: 14px;\n  padding: 10px;\n  background: #ffffff;\n  margin: 3px 0;\n  color: #555;\n}\n\n.hidden {\n  display: none;\n}\n\n#output-log {\n  width: 100%;\n  overflow: auto;\n  padding: 10px;\n  background: #ffffff;\n}\n\n.outlog:hover {\n  color: #000;\n  background: #efefef;\n}\n\n.outlog {\n  cursor: pointer;\n  color: #1fa5d0;\n}\n\n.outlog td {\n  padding: 5px;\n}\n\n.outlog.error {\n  color: #ff3f3f;\n}\n\n.outlog.warning {\n  color: #ff9e00;\n}\n\n.outlog.proxy {\n  font-size: 11px;\n  opacity: 0.7;\n  color: #000;\n}\n\n.outlog.proxy.warning {\n  color: #ff9e00;\n}\n\n.outlog.proxy.error {\n  color: #ff3f3f;\n}\n\n.outlog:nth-child(4n) {\n  background: #f5f5f5;\n}\n\n.outInfo td {\n  color: #666;\n  line-height: 20px;\n  padding: 15px 5px;\n  word-break: break-all;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERldmVsb3BtZW50XFxBSUBFZGdlXFxzYWlsLWxvZy1wYXJzZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBREdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDQUY7O0FERUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVJO0VBQ0UsZUFBQTtBQ0FOOztBREdJO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUNETjs7QURJSTtFQUNFLFlBQUE7QUNGTjs7QURJSTtFQUNFLFlBQUE7QUNGTjs7QURJSTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQ0ZOOztBRE9BO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDSkY7O0FETUU7RUFDRSxZQUFBO0FDSko7O0FET0U7RUFDRSxjQUFBO0FDTEo7O0FET0U7RUFDRSxjQUFBO0FDTEo7O0FET0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNMSjs7QURPSTtFQUNFLGNBQUE7QUNMTjs7QURPSTtFQUNFLGNBQUE7QUNMTjs7QURVQTtFQUNFLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgYmFja2dyb3VuZDogIzQ0ODZkMjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsdGVyLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuZm9ybS1kYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHdpZHRoOiAyMiU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW46IDVweCA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi50eXBlLWZpbHRlciB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgICYuZGF0ZS1maWx0ZXIge1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICB9XHJcbiAgICAmLmFjdGlvbnMge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnN0YXRpc3RpY3MtY29udGFpbmVyIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBtYXJnaW46IDNweCAwO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcbiNvdXRwdXQtbG9nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5vdXRsb2c6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi5vdXRsb2cge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzFmYTVkMDtcclxuXHJcbiAgdGQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgJi5lcnJvciB7XHJcbiAgICBjb2xvcjogI2ZmM2YzZjtcclxuICB9XHJcbiAgJi53YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjZmY5ZTAwO1xyXG4gIH1cclxuICAmLnByb3h5IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG5cclxuICAgICYud2FybmluZ3tcclxuICAgICAgY29sb3I6ICNmZjllMDA7XHJcbiAgICB9XHJcbiAgICAmLmVycm9yIHtcclxuICAgICAgY29sb3I6ICNmZjNmM2Y7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ub3V0bG9nOm50aC1jaGlsZCg0bikge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5vdXRJbmZvIHRkIHtcclxuICBjb2xvcjogIzY2NjtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBwYWRkaW5nOiAxNXB4IDVweDtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4iLCIubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4ubWVudSB7XG4gIGJhY2tncm91bmQ6ICM0NDg2ZDI7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1lbnUgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1lbnUgLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG5cbi5maWx0ZXItZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5maWx0ZXItZm9ybSAuZm9ybS1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHdpZHRoOiAyMiU7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5maWx0ZXItZm9ybSAuZm9ybS1kYXRhIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZpbHRlci1mb3JtIC5mb3JtLWRhdGEgdWwge1xuICBtYXJnaW46IDVweCA1cHg7XG4gIHBhZGRpbmc6IDA7XG59XG4uZmlsdGVyLWZvcm0gLmZvcm0tZGF0YS50eXBlLWZpbHRlciB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5maWx0ZXItZm9ybSAuZm9ybS1kYXRhLmRhdGUtZmlsdGVyIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuLmZpbHRlci1mb3JtIC5mb3JtLWRhdGEuYWN0aW9ucyB7XG4gIHdpZHRoOiAxNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdGF0aXN0aWNzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBtYXJnaW46IDNweCAwO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNvdXRwdXQtbG9nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4ub3V0bG9nOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5vdXRsb2cge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMWZhNWQwO1xufVxuLm91dGxvZyB0ZCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5vdXRsb2cuZXJyb3Ige1xuICBjb2xvcjogI2ZmM2YzZjtcbn1cbi5vdXRsb2cud2FybmluZyB7XG4gIGNvbG9yOiAjZmY5ZTAwO1xufVxuLm91dGxvZy5wcm94eSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgb3BhY2l0eTogMC43O1xuICBjb2xvcjogIzAwMDtcbn1cbi5vdXRsb2cucHJveHkud2FybmluZyB7XG4gIGNvbG9yOiAjZmY5ZTAwO1xufVxuLm91dGxvZy5wcm94eS5lcnJvciB7XG4gIGNvbG9yOiAjZmYzZjNmO1xufVxuXG4ub3V0bG9nOm50aC1jaGlsZCg0bikge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG4ub3V0SW5mbyB0ZCB7XG4gIGNvbG9yOiAjNjY2O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMTVweCA1cHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _mappers_nest_log_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mappers/nest-log.mapper */ "./src/app/mappers/nest-log.mapper.ts");
/* harmony import */ var _mappers_date_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mappers/date.mapper */ "./src/app/mappers/date.mapper.ts");
/* harmony import */ var _mappers_proxy_log_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mappers/proxy-log.mapper */ "./src/app/mappers/proxy-log.mapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AppComponent = /** @class */ (function () {
    function AppComponent(chr) {
        this.chr = chr;
        this.logs = [];
        this.filteredLogs = [];
        this.versionIds = [];
        this.searchValue = '';
        this.selectedVersionId = '';
        this.selectedType = [
            { label: 'Info', value: 'I', checked: true },
            { label: 'Warning', value: 'W', checked: true },
            { label: 'Error', value: 'E', checked: true }
        ];
        this.selectedStartDate = 0;
        this.selectedEndDate = 0;
        this.minDate = 0;
        this.maxDate = 0;
        this.chr.detach();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.chr.detectChanges();
    };
    AppComponent.prototype.changedFilter = function (event) {
        var _this = this;
        if (!event || event.key === 'Enter') {
            this.filteredLogs = this.logs.filter(function (v) {
                return (_this.selectedVersionId ? v.id === _this.selectedVersionId : true)
                    && ((_this.selectedType[0].checked ? v.type === _this.selectedType[0].value : false)
                        || (_this.selectedType[1].checked ? v.type === _this.selectedType[1].value : false)
                        || (_this.selectedType[2].checked ? v.type === _this.selectedType[2].value : false))
                    && (v.time >= _this.selectedStartDate)
                    && (v.time <= _this.selectedEndDate)
                    && (v.raw.toLowerCase().indexOf(_this.searchValue.toLowerCase()) !== -1);
            });
            this.chr.detectChanges();
        }
    };
    AppComponent.prototype.clearFilters = function () {
        this.filteredLogs = this.logs;
        this.selectedType.forEach(function (t) { return t.checked = true; });
        this.selectedVersionId = '';
        this.searchValue = '';
        this.selectedStartDate = this.minDate;
        this.selectedEndDate = this.maxDate;
        this.chr.detectChanges();
    };
    AppComponent.prototype.formatDate = function (dateTime) {
        return _mappers_date_mapper__WEBPACK_IMPORTED_MODULE_2__["DateMapper"].format(dateTime);
    };
    AppComponent.prototype.clearLogs = function () {
        this.logs = [];
        this.initFilters();
    };
    AppComponent.prototype.openBackendLog = function (e) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function () {
            _this.parseBackend(fileReader.result);
            e.target.value = '';
        };
        fileReader.readAsText(e.target.files[0]);
    };
    AppComponent.prototype.openProxyLog = function (e) {
        var _this = this;
        var fileReader = new FileReader();
        var date;
        var dateMatch = e.target.files[0].name.match(/.*([0-9]{4}-[0-9]{2}-[0-9]{2}).*/i);
        if (dateMatch && dateMatch.length > 1) {
            date = new Date(dateMatch[1]);
        }
        fileReader.onload = function () {
            _this.parseProxy(fileReader.result, date);
            e.target.value = '';
        };
        fileReader.readAsText(e.target.files[0]);
    };
    AppComponent.prototype.getType = function (typeChar) {
        if (typeChar === void 0) { typeChar = 'I'; }
        return typeChar === 'I' ? 'Info' : typeChar === 'E' ? 'Error' : 'Warning';
    };
    AppComponent.prototype.toggleInfo = function (index) {
        document.getElementsByClassName("outInfo_" + index)[0].classList.toggle('hidden');
        this.chr.detectChanges();
    };
    AppComponent.prototype.initFilters = function () {
        if (this.logs.length) {
            this.versionIds = Array.from(new Set(this.logs.map(function (v) { return v.id; })));
            this.maxDate = this.logs[this.logs.length - 1].time;
            this.minDate = this.logs[0].time;
        }
        else {
            this.versionIds = [];
            this.maxDate = 0;
            this.minDate = 0;
        }
        this.clearFilters();
    };
    AppComponent.prototype.parseBackend = function (input) {
        var _this = this;
        if (input === void 0) { input = ''; }
        try {
            input.split('\n').forEach(function (line) {
                var log = _mappers_nest_log_mapper__WEBPACK_IMPORTED_MODULE_1__["NestLogMapper"].map(line);
                if (log && log.message) {
                    _this.logs.push(log);
                }
            });
            this.initFilters();
        }
        catch (e) {
            this.handleError(e);
        }
    };
    AppComponent.prototype.parseProxy = function (input, date) {
        var _this = this;
        if (input === void 0) { input = ''; }
        try {
            var ignore_1 = ['MemUtils', 'in progress: 0', 'DataBufferingWorkerBase', 'ParquetFileWriter', 'AnchorProxy::run: VSize'];
            var previousDate_1;
            var hour_1 = 60 * 60 * 1000;
            input.split('\n').filter(function (line) { return line && line.trim() && !ignore_1.some(function (ign) { return line.indexOf(ign) !== -1; }); }).forEach(function (line) {
                var log = date ? _mappers_proxy_log_mapper__WEBPACK_IMPORTED_MODULE_3__["ProxyLogMapper"].mapWithDate(date, line) : _mappers_proxy_log_mapper__WEBPACK_IMPORTED_MODULE_3__["ProxyLogMapper"].map(line);
                if (log) {
                    if (previousDate_1 && previousDate_1 > log.time) {
                        log.time += 24 * hour_1;
                        date.setDate(date.getDate() + 1);
                    }
                    else {
                        previousDate_1 = log.time;
                    }
                    _this.logs.push(log);
                }
            });
            this.logs.sort(function (a, b) { return a.time - b.time; });
            this.initFilters();
        }
        catch (e) {
            this.handleError(e);
        }
    };
    AppComponent.prototype.handleError = function (e) {
        console.error(e);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mappers/date.mapper.ts":
/*!****************************************!*\
  !*** ./src/app/mappers/date.mapper.ts ***!
  \****************************************/
/*! exports provided: DateMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateMapper", function() { return DateMapper; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var DateMapper = /** @class */ (function () {
    function DateMapper() {
    }
    DateMapper.map = function (dateString) {
        return new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US').transform(dateString, 'M/d/yyyy, HH:mm:ss');
    };
    DateMapper.format = function (dateTime) {
        return new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US').transform(dateTime, 'M/d/yyyy, HH:mm:ss');
    };
    return DateMapper;
}());



/***/ }),

/***/ "./src/app/mappers/nest-log.mapper.ts":
/*!********************************************!*\
  !*** ./src/app/mappers/nest-log.mapper.ts ***!
  \********************************************/
/*! exports provided: NestLogMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestLogMapper", function() { return NestLogMapper; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var VERSION_ID_REGEXP = /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/i;
var FULL_REGEXP = /\[Time\: (((?!\]).)*)\].*\[Type\: (((?!\]).)*)\] \[Message\: (((?!\]).)*)\].*/i;
var NestLogMapper = /** @class */ (function () {
    function NestLogMapper() {
    }
    NestLogMapper.map = function (raw) {
        var idMatch = raw.match(VERSION_ID_REGEXP);
        var id = idMatch && idMatch.length > 0 ? idMatch[0] : 'N';
        var fullMatch = raw.match(FULL_REGEXP);
        if (fullMatch && fullMatch.length > 6) {
            var time = fullMatch[1];
            var type = fullMatch[3] === 'Info' ? 'I' : fullMatch[3] === 'Error' ? 'E' : 'W';
            var message = fullMatch[5];
            return {
                id: id, message: message, time: new Date(time).getTime(), type: type, raw: raw, src: 'n'
            };
        }
    };
    return NestLogMapper;
}());



/***/ }),

/***/ "./src/app/mappers/proxy-log.mapper.ts":
/*!*********************************************!*\
  !*** ./src/app/mappers/proxy-log.mapper.ts ***!
  \*********************************************/
/*! exports provided: ProxyLogMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyLogMapper", function() { return ProxyLogMapper; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var VERSION_ID_REGEXP = /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/i;
var LOG_MSG_REGEXP = /\] (((?!\]).)*)\\n"/i;
var LOG_TYPE_REGEXP = /\[.\]/i;
var TIME_REGEXP = /"time":"(.*)"/i;
var FULL_REGEXP = /^\[(((?!\]).)*)\].*\[(.)\].*\] (.*)/i;
var ProxyLogMapper = /** @class */ (function () {
    function ProxyLogMapper() {
    }
    ProxyLogMapper.map = function (raw) {
        var idMatch = raw.match(VERSION_ID_REGEXP);
        var id = idMatch && idMatch.length > 0 ? idMatch[0] : 'P';
        var messageMatch = raw.match(LOG_MSG_REGEXP);
        var message = messageMatch && messageMatch.length > 1 ? messageMatch[1] : '';
        var timeMatch = raw.match(TIME_REGEXP);
        var time = timeMatch && timeMatch.length > 1 ? timeMatch[1] : '';
        var typeMatch = raw.match(LOG_TYPE_REGEXP);
        var type = typeMatch ? typeMatch[0].slice(1, -1) : '';
        return ProxyLogMapper.buildLogItem(id, message, time, type, raw);
    };
    ProxyLogMapper.mapWithDate = function (date, raw) {
        var idMatch = raw.match(VERSION_ID_REGEXP);
        var id = idMatch && idMatch.length > 0 ? idMatch[0] : 'P';
        var fullMatch = raw.match(FULL_REGEXP);
        if (fullMatch && fullMatch.length > 4) {
            var time = date.toDateString() + ' ' + fullMatch[1];
            var type = fullMatch[3];
            var message = fullMatch[4];
            return ProxyLogMapper.buildLogItem(id, message, time, type, raw);
        }
    };
    ProxyLogMapper.buildLogItem = function (id, message, time, type, raw) {
        return {
            id: id, time: new Date(time).getTime(), type: type, message: message, raw: raw, src: 'c'
        };
    };
    return ProxyLogMapper;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\AI@Edge\sail-log-parser\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map