webpackJsonp([0],{

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_classes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calander_calander__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_six_class_six__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__complete_complete__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_five_class_five__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calander_class_five_calander_class_five__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_four_class_four__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__calander_class_four_calander_class_four__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__class_three_class_three__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__calander_class_three_calander_class_three__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__class_two_class_two__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__calander_class_two_calander_class_two__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__class_one_class_one__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__calander_class_one_calander_class_one__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__teacher_student_sign_up_teacher_student_sign_up__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { LoginPage } from '../login/login';















var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loginProvider) {
        this.navCtrl = navCtrl;
        this.loginProvider = loginProvider;
        this.userLoginInfo = { email: '', password: '' };
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.userLogin = function () {
        var _this = this;
        var param = { "email": this.userLoginInfo.email, "password": this.userLoginInfo.password };
        this.loginProvider.userLogin(param).then(function (result) {
            console.log(result);
            if (result) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__classes_classes__["a" /* ClassesPage */]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__teacher_student_sign_up_teacher_student_sign_up__["a" /* TeacherStudentSignUpPage */]);
    };
    LoginPage.prototype.goToClasses = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__classes_classes__["a" /* ClassesPage */]);
    };
    LoginPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(LoginPage_1);
    };
    LoginPage.prototype.goToCalander = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calander_calander__["a" /* CalanderPage */]);
    };
    LoginPage.prototype.goToClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__class_six_class_six__["a" /* ClassSixPage */]);
    };
    LoginPage.prototype.goToComplete = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__complete_complete__["a" /* CompletePage */]);
    };
    LoginPage.prototype.goToCalanderClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__["a" /* CalanderClassSixPage */]);
    };
    LoginPage.prototype.goToClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__class_five_class_five__["a" /* ClassFivePage */]);
    };
    LoginPage.prototype.goToCalanderClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__calander_class_five_calander_class_five__["a" /* CalanderClassFivePage */]);
    };
    LoginPage.prototype.goToClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__class_four_class_four__["a" /* ClassFourPage */]);
    };
    LoginPage.prototype.goToCalanderClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__calander_class_four_calander_class_four__["a" /* CalanderClassFourPage */]);
    };
    LoginPage.prototype.goToClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__class_three_class_three__["a" /* ClassThreePage */]);
    };
    LoginPage.prototype.goToCalanderClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__calander_class_three_calander_class_three__["a" /* CalanderClassThreePage */]);
    };
    LoginPage.prototype.goToClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__class_two_class_two__["a" /* ClassTwoPage */]);
    };
    LoginPage.prototype.goToCalanderClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__calander_class_two_calander_class_two__["a" /* CalanderClassTwoPage */]);
    };
    LoginPage.prototype.goToClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__class_one_class_one__["a" /* ClassOnePage */]);
    };
    LoginPage.prototype.goToCalanderClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__calander_class_one_calander_class_one__["a" /* CalanderClassOnePage */]);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n  <!--<form id="login-form1" (click)="userLogin()">-->\n\n    <form id="login-form1" (ngSubmit)="userLogin(userLoginInfo)">\n\n        <div class="spacer" style="width:283px;height:120px;" id="login-spacer1"></div>\n\n        <ion-list id="login-list1">\n\n          <ion-item id="login-input1">\n\n            <ion-label>\n\n              Email\n\n            </ion-label>\n\n            <ion-input type="email" [(ngModel)]="userLoginInfo.email" [ngModelOptions]="{standalone: true}" name="email" placeholder=""></ion-input>\n\n          </ion-item>\n\n          <ion-item id="login-input2">\n\n            <ion-label>\n\n              Password\n\n            </ion-label>\n\n            <ion-input type="password" [(ngModel)]="userLoginInfo.password" [ngModelOptions]="{standalone: true}" name="password" placeholder=""></ion-input>\n\n          </ion-item>\n\n          <ion-item id="login-toggle1">\n\n            <ion-label>\n\n              Remember Me\n\n            </ion-label>\n\n            <ion-toggle color="positive" checked="false"></ion-toggle>\n\n          </ion-item>\n\n            <ion-label id="signup_label" (click)="goToSignup()">\n\n                Not a member yet?\n\n            </ion-label>\n\n        </ion-list>\n\n        <!--<button id="login-button1" ion-button color="stable" block on-click="goToClasses(email, pwd)">-->\n\n        <!--<button id="login-button1" ion-button color="stable" name="sbmt" (click)="userLogin(userLoginInfo)" block>-->\n\n        <button id="login-button1" ion-button color="stable" name="sbmt"block>\n\n        Log in\n\n        </button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__["a" /* LoginServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__["a" /* LoginServiceProvider */]) === "function" && _b || Object])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1, _a, _b;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalanderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalanderPage = /** @class */ (function () {
    function CalanderPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CalanderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calander',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander\calander.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Calander\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page11">\n\n  <ion-list id="calander-list4">\n\n    <ion-item id="calander-list-item-container1"></ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander\calander.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CalanderPage);
    return CalanderPage;
}());

//# sourceMappingURL=calander.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalanderClassSixPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalanderClassSixPage = /** @class */ (function () {
    function CalanderClassSixPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CalanderClassSixPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calander-class-six',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander-class-six\calander-class-six.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Calander Class Six\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page17">\n\n  <ion-list id="calanderClassSix-list10">\n\n    <ion-item id="calanderClassSix-list-item-container7"></ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander-class-six\calander-class-six.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CalanderClassSixPage);
    return CalanderClassSixPage;
}());

//# sourceMappingURL=calander-class-six.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginServiceProvider = /** @class */ (function () {
    function LoginServiceProvider(http) {
        this.http = http;
        this.apiUrl = 'https://hack-fresno18.herokuapp.com';
        console.log('Hello LoginServiceProvider Provider');
    }
    LoginServiceProvider.prototype.userLogin = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/users/login', JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    LoginServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LoginServiceProvider);
    return LoginServiceProvider;
}());

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalanderClassFivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalanderClassFivePage = /** @class */ (function () {
    function CalanderClassFivePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CalanderClassFivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calander-class-five',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander-class-five\calander-class-five.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Calander Class Five\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page9">\n\n  <ion-list id="calanderClassFive-list9">\n\n    <ion-item id="calanderClassFive-list-item-container6"></ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander-class-five\calander-class-five.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CalanderClassFivePage);
    return CalanderClassFivePage;
}());

//# sourceMappingURL=calander-class-five.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalanderClassFourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalanderClassFourPage = /** @class */ (function () {
    function CalanderClassFourPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CalanderClassFourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calander-class-four',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander-class-four\calander-class-four.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Calander Class Four\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page8">\n\n  <ion-list id="calanderClassFour-list8">\n\n    <ion-item id="calanderClassFour-list-item-container5"></ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander-class-four\calander-class-four.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CalanderClassFourPage);
    return CalanderClassFourPage;
}());

//# sourceMappingURL=calander-class-four.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_service_login_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_teacher_student_sign_up_teacher_student_sign_up__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_classes_classes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_class_one_class_one__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_class_two_class_two__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_class_three_class_three__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_class_four_class_four__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_class_five_class_five__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_class_six_class_six__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_complete_complete__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_calander_calander__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_calander_class_one_calander_class_one__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_calander_class_two_calander_class_two__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_calander_class_three_calander_class_three__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_calander_class_four_calander_class_four__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_calander_class_five_calander_class_five__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_calander_class_six_calander_class_six__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(212);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_teacher_student_sign_up_teacher_student_sign_up__["a" /* TeacherStudentSignUpPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_classes_classes__["a" /* ClassesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_class_one_class_one__["a" /* ClassOnePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_class_two_class_two__["a" /* ClassTwoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_class_three_class_three__["a" /* ClassThreePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_class_four_class_four__["a" /* ClassFourPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_class_five_class_five__["a" /* ClassFivePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_class_six_class_six__["a" /* ClassSixPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_complete_complete__["a" /* CompletePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_calander_calander__["a" /* CalanderPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_calander_class_one_calander_class_one__["a" /* CalanderClassOnePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_calander_class_two_calander_class_two__["a" /* CalanderClassTwoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_calander_class_three_calander_class_three__["a" /* CalanderClassThreePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_calander_class_four_calander_class_four__["a" /* CalanderClassFourPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_calander_class_five_calander_class_five__["a" /* CalanderClassFivePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_calander_class_six_calander_class_six__["a" /* CalanderClassSixPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_teacher_student_sign_up_teacher_student_sign_up__["a" /* TeacherStudentSignUpPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_classes_classes__["a" /* ClassesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_class_one_class_one__["a" /* ClassOnePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_class_two_class_two__["a" /* ClassTwoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_class_three_class_three__["a" /* ClassThreePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_class_four_class_four__["a" /* ClassFourPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_class_five_class_five__["a" /* ClassFivePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_class_six_class_six__["a" /* ClassSixPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_complete_complete__["a" /* CompletePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_calander_calander__["a" /* CalanderPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_calander_class_one_calander_class_one__["a" /* CalanderClassOnePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_calander_class_two_calander_class_two__["a" /* CalanderClassTwoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_calander_class_three_calander_class_three__["a" /* CalanderClassThreePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_calander_class_four_calander_class_four__["a" /* CalanderClassFourPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_calander_class_five_calander_class_five__["a" /* CalanderClassFivePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_calander_class_six_calander_class_six__["a" /* CalanderClassSixPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_login_service_login_service__["a" /* LoginServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalanderClassThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalanderClassThreePage = /** @class */ (function () {
    function CalanderClassThreePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CalanderClassThreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calander-class-three',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander-class-three\calander-class-three.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Calander Class Three\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page7">\n\n  <ion-list id="calanderClassThree-list7">\n\n    <ion-item id="calanderClassThree-list-item-container4"></ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander-class-three\calander-class-three.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CalanderClassThreePage);
    return CalanderClassThreePage;
}());

//# sourceMappingURL=calander-class-three.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalanderClassTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalanderClassTwoPage = /** @class */ (function () {
    function CalanderClassTwoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CalanderClassTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calander-class-two',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander-class-two\calander-class-two.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Calander Class Two\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page6">\n\n  <ion-list id="calanderClassTwo-list6">\n\n    <ion-item id="calanderClassTwo-list-item-container3"></ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander-class-two\calander-class-two.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CalanderClassTwoPage);
    return CalanderClassTwoPage;
}());

//# sourceMappingURL=calander-class-two.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalanderClassOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalanderClassOnePage = /** @class */ (function () {
    function CalanderClassOnePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CalanderClassOnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calander-class-one',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander-class-one\calander-class-one.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Calander Class One\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5">\n\n  <ion-list id="calanderClassOne-list5">\n\n    <ion-item id="calanderClassOne-list-item-container2"></ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\calander-class-one\calander-class-one.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CalanderClassOnePage);
    return CalanderClassOnePage;
}());

//# sourceMappingURL=calander-class-one.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calander_calander__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_six_class_six__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__complete_complete__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calander_class_six_calander_class_six__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__class_five_class_five__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calander_class_five_calander_class_five__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__class_four_class_four__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__calander_class_four_calander_class_four__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__class_three_class_three__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__calander_class_three_calander_class_three__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__class_two_class_two__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__calander_class_two_calander_class_two__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__class_one_class_one__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__calander_class_one_calander_class_one__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ClassesPage } from '../classes/classes';














var ClassesPage = /** @class */ (function () {
    function ClassesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ClassesPage_1 = ClassesPage;
    ClassesPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ClassesPage.prototype.goToClasses = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(ClassesPage_1);
    };
    ClassesPage.prototype.goToCalander = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__calander_calander__["a" /* CalanderPage */]);
    };
    ClassesPage.prototype.goToClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__class_six_class_six__["a" /* ClassSixPage */]);
    };
    ClassesPage.prototype.goToComplete = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__complete_complete__["a" /* CompletePage */]);
    };
    ClassesPage.prototype.goToCalanderClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__calander_class_six_calander_class_six__["a" /* CalanderClassSixPage */]);
    };
    ClassesPage.prototype.goToClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__class_five_class_five__["a" /* ClassFivePage */]);
    };
    ClassesPage.prototype.goToCalanderClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__calander_class_five_calander_class_five__["a" /* CalanderClassFivePage */]);
    };
    ClassesPage.prototype.goToClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__class_four_class_four__["a" /* ClassFourPage */]);
    };
    ClassesPage.prototype.goToCalanderClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__calander_class_four_calander_class_four__["a" /* CalanderClassFourPage */]);
    };
    ClassesPage.prototype.goToClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__class_three_class_three__["a" /* ClassThreePage */]);
    };
    ClassesPage.prototype.goToCalanderClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__calander_class_three_calander_class_three__["a" /* CalanderClassThreePage */]);
    };
    ClassesPage.prototype.goToClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__class_two_class_two__["a" /* ClassTwoPage */]);
    };
    ClassesPage.prototype.goToCalanderClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__calander_class_two_calander_class_two__["a" /* CalanderClassTwoPage */]);
    };
    ClassesPage.prototype.goToClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__class_one_class_one__["a" /* ClassOnePage */]);
    };
    ClassesPage.prototype.goToCalanderClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__calander_class_one_calander_class_one__["a" /* CalanderClassOnePage */]);
    };
    ClassesPage = ClassesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classes',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\classes\classes.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Classes\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <button id="classes-button3" ion-button color="positive" block on-click="goToClassOne()">\n\n    Class One\n\n  </button>\n\n  <button id="classes-button4" ion-button color="positive" block on-click="goToClassTwo()">\n\n    Class Two\n\n  </button>\n\n  <button id="classes-button5" ion-button color="positive" block on-click="goToClassThree()">\n\n    Class Three\n\n  </button>\n\n  <button id="classes-button6" ion-button color="positive" block on-click="goToClassFour()">\n\n    Class Four\n\n  </button>\n\n  <button id="classes-button7" ion-button color="positive" block on-click="goToClassFive()">\n\n    Class Five\n\n  </button>\n\n  <button id="classes-button8" ion-button color="positive" block on-click="goToClassSix()">\n\n    Class Six\n\n  </button>\n\n  <div class="spacer" style="width:283px;height:50px;" id="classes-spacer9"></div>\n\n  <button id="classes-button24" ion-button clear color="assertive" large on-click="goToLogin()">\n\n    <ion-icon name="log-out"></ion-icon>\n\n  </button>\n\n  <button id="classes-button29" ion-button clear color="assertive" large on-click="goToLogin()"></button>\n\n  <button id="classes-button25" ion-button clear color="positive" large>\n\n    <ion-icon name="home"></ion-icon>\n\n  </button>\n\n  <button id="classes-button23" ion-button clear color="positive" large style="border-radius:1px 1px 1px 1px;" on-click="goToCalander()">\n\n    <ion-icon name="calendar"></ion-icon>\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\classes\classes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ClassesPage);
    return ClassesPage;
    var ClassesPage_1;
}());

//# sourceMappingURL=classes.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_classes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calander_calander__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_six_class_six__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__complete_complete__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_five_class_five__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calander_class_five_calander_class_five__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_four_class_four__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__calander_class_four_calander_class_four__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__class_three_class_three__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__calander_class_three_calander_class_three__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__class_two_class_two__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__calander_class_two_calander_class_two__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__class_one_class_one__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__calander_class_one_calander_class_one__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__teacher_student_sign_up_teacher_student_sign_up__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















//import { SignupPage } from '../signup/signup';
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage_1 = SignupPage;
    SignupPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.goToClasses = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__classes_classes__["a" /* ClassesPage */]);
    };
    SignupPage.prototype.goToCalander = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calander_calander__["a" /* CalanderPage */]);
    };
    SignupPage.prototype.goToClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__class_six_class_six__["a" /* ClassSixPage */]);
    };
    SignupPage.prototype.goToComplete = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__complete_complete__["a" /* CompletePage */]);
    };
    SignupPage.prototype.goToCalanderClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__["a" /* CalanderClassSixPage */]);
    };
    SignupPage.prototype.goToClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__class_five_class_five__["a" /* ClassFivePage */]);
    };
    SignupPage.prototype.goToCalanderClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__calander_class_five_calander_class_five__["a" /* CalanderClassFivePage */]);
    };
    SignupPage.prototype.goToClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__class_four_class_four__["a" /* ClassFourPage */]);
    };
    SignupPage.prototype.goToCalanderClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__calander_class_four_calander_class_four__["a" /* CalanderClassFourPage */]);
    };
    SignupPage.prototype.goToClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__class_three_class_three__["a" /* ClassThreePage */]);
    };
    SignupPage.prototype.goToCalanderClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__calander_class_three_calander_class_three__["a" /* CalanderClassThreePage */]);
    };
    SignupPage.prototype.goToClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__class_two_class_two__["a" /* ClassTwoPage */]);
    };
    SignupPage.prototype.goToCalanderClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__calander_class_two_calander_class_two__["a" /* CalanderClassTwoPage */]);
    };
    SignupPage.prototype.goToClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__class_one_class_one__["a" /* ClassOnePage */]);
    };
    SignupPage.prototype.goToCalanderClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__calander_class_one_calander_class_one__["a" /* CalanderClassOnePage */]);
    };
    SignupPage.prototype.goToTeacherStudentSignUp = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__teacher_student_sign_up_teacher_student_sign_up__["a" /* TeacherStudentSignUpPage */]);
    };
    SignupPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(SignupPage_1);
    };
    SignupPage = SignupPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Signup\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page19">\n  <form id="signup-form3">\n    <ion-list id="signup-list11">\n      <ion-item id="signup-input4">\n        <ion-label>\n          First Name\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="signup-input8">\n        <ion-label>\n          Last Name\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="signup-input7">\n        <ion-label>\n          ID\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="signup-input5">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="signup-input6">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <button id="signup-button11" ion-button color="positive" block on-click="goToLogin()">\n      Sign up\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SignupPage);
    return SignupPage;
    var SignupPage_1;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherStudentSignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_classes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calander_calander__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_six_class_six__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__complete_complete__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calander_class_six_calander_class_six__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__class_five_class_five__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__calander_class_five_calander_class_five__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__class_four_class_four__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__calander_class_four_calander_class_four__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__class_three_class_three__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__calander_class_three_calander_class_three__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__class_two_class_two__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__calander_class_two_calander_class_two__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__class_one_class_one__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__calander_class_one_calander_class_one__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















//import { TeacherStudentSignUpPage } from '../teacher-student-sign-up/teacher-student-sign-up';
var TeacherStudentSignUpPage = /** @class */ (function () {
    function TeacherStudentSignUpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TeacherStudentSignUpPage_1 = TeacherStudentSignUpPage;
    TeacherStudentSignUpPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    TeacherStudentSignUpPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    TeacherStudentSignUpPage.prototype.goToClasses = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__classes_classes__["a" /* ClassesPage */]);
    };
    TeacherStudentSignUpPage.prototype.goToCalander = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__calander_calander__["a" /* CalanderPage */]);
    };
    TeacherStudentSignUpPage.prototype.goToClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__class_six_class_six__["a" /* ClassSixPage */]);
    };
    TeacherStudentSignUpPage.prototype.goToComplete = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__complete_complete__["a" /* CompletePage */]);
    };
    TeacherStudentSignUpPage.prototype.goToCalanderClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__calander_class_six_calander_class_six__["a" /* CalanderClassSixPage */]);
    };
    TeacherStudentSignUpPage.prototype.goToClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__class_five_class_five__["a" /* ClassFivePage */]);
    };
    TeacherStudentSignUpPage.prototype.goToCalanderClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__calander_class_five_calander_class_five__["a" /* CalanderClassFivePage */]);
    };
    TeacherStudentSignUpPage.prototype.goToClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__class_four_class_four__["a" /* ClassFourPage */]);
    };
    TeacherStudentSignUpPage.prototype.goToCalanderClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__calander_class_four_calander_class_four__["a" /* CalanderClassFourPage */]);
    };
    TeacherStudentSignUpPage.prototype.goToClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__class_three_class_three__["a" /* ClassThreePage */]);
    };
    TeacherStudentSignUpPage.prototype.goToCalanderClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__calander_class_three_calander_class_three__["a" /* CalanderClassThreePage */]);
    };
    TeacherStudentSignUpPage.prototype.goToClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__class_two_class_two__["a" /* ClassTwoPage */]);
    };
    TeacherStudentSignUpPage.prototype.goToCalanderClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__calander_class_two_calander_class_two__["a" /* CalanderClassTwoPage */]);
    };
    TeacherStudentSignUpPage.prototype.goToClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__class_one_class_one__["a" /* ClassOnePage */]);
    };
    TeacherStudentSignUpPage.prototype.goToCalanderClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__calander_class_one_calander_class_one__["a" /* CalanderClassOnePage */]);
    };
    TeacherStudentSignUpPage.prototype.goToTeacherStudentSignUp = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(TeacherStudentSignUpPage_1);
    };
    TeacherStudentSignUpPage = TeacherStudentSignUpPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacher-student-sign-up',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\teacher-student-sign-up\teacher-student-sign-up.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Teacher/Student Sign Up\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page18">\n  <div class="spacer" style="width:283px;height:122px;" id="teacherStudentSignUp-spacer21"></div>\n  <button id="teacherStudentSignUp-button13" ion-button color="positive" block on-click="goToSignup(1)">\n    Teacher\n  </button>\n  <button id="teacherStudentSignUp-button14" ion-button color="positive" block on-click="goToSignup(2)">\n    Student\n  </button>\n  <button id="teacherStudentSignUp-button15" ion-button color="positive" block on-click="goToLogin()">\n    Go Back\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\teacher-student-sign-up\teacher-student-sign-up.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], TeacherStudentSignUpPage);
    return TeacherStudentSignUpPage;
    var TeacherStudentSignUpPage_1, _a;
}());

//# sourceMappingURL=teacher-student-sign-up.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassSixPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complete_complete__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_classes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calander_calander__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_five_class_five__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calander_class_five_calander_class_five__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_four_class_four__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calander_class_four_calander_class_four__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_three_class_three__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__calander_class_three_calander_class_three__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__class_two_class_two__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__calander_class_two_calander_class_two__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__class_one_class_one__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__calander_class_one_calander_class_one__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__calander_class_six_calander_class_six__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { ClassSixPage } from '../class-six/class-six';











var ClassSixPage = /** @class */ (function () {
    function ClassSixPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ClassSixPage_1 = ClassSixPage;
    ClassSixPage.prototype.goToComplete = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__complete_complete__["a" /* CompletePage */]);
    };
    ClassSixPage.prototype.goToClasses = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__classes_classes__["a" /* ClassesPage */]);
    };
    ClassSixPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ClassSixPage.prototype.goToCalander = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__calander_calander__["a" /* CalanderPage */]);
    };
    ClassSixPage.prototype.goToClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(ClassSixPage_1);
    };
    ClassSixPage.prototype.goToClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__class_five_class_five__["a" /* ClassFivePage */]);
    };
    ClassSixPage.prototype.goToCalanderClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__calander_class_five_calander_class_five__["a" /* CalanderClassFivePage */]);
    };
    ClassSixPage.prototype.goToClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__class_four_class_four__["a" /* ClassFourPage */]);
    };
    ClassSixPage.prototype.goToCalanderClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__calander_class_four_calander_class_four__["a" /* CalanderClassFourPage */]);
    };
    ClassSixPage.prototype.goToClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__class_three_class_three__["a" /* ClassThreePage */]);
    };
    ClassSixPage.prototype.goToCalanderClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__calander_class_three_calander_class_three__["a" /* CalanderClassThreePage */]);
    };
    ClassSixPage.prototype.goToClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__class_two_class_two__["a" /* ClassTwoPage */]);
    };
    ClassSixPage.prototype.goToCalanderClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__calander_class_two_calander_class_two__["a" /* CalanderClassTwoPage */]);
    };
    ClassSixPage.prototype.goToClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__class_one_class_one__["a" /* ClassOnePage */]);
    };
    ClassSixPage.prototype.goToCalanderClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__calander_class_one_calander_class_one__["a" /* CalanderClassOnePage */]);
    };
    ClassSixPage.prototype.goToCalanderClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__calander_class_six_calander_class_six__["a" /* CalanderClassSixPage */]);
    };
    ClassSixPage = ClassSixPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-class-six',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\class-six\class-six.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      ClassSix\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page16">\n\n  <div id="classSix-markdown13" style="text-align:center;" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Class not active\n\n    </p>\n\n  </div>\n\n  <div class="spacer" style="width:283px;height:126px;" id="classSix-spacer19"></div>\n\n  <button id="classSix-button58" ion-button color="positive" block on-click="goToComplete()">\n\n    Check in.\n\n  </button>\n\n  <button id="classSix-button59" ion-button color="positive" block on-click="goToClasses()">\n\n    Go Back\n\n  </button>\n\n  <div class="spacer" style="height:100px;" id="classSix-spacer20"></div>\n\n  <button id="classSix-button60" ion-button clear color="assertive" large style="border-radius:0px 0px 0px 0px;" on-click="goToLogin()">\n\n    <ion-icon name="log-out"></ion-icon>\n\n  </button>\n\n  <button id="classSix-button61" ion-button clear color="light" large style="border-radius:0px 0px 0px 0px;"></button>\n\n  <button id="classSix-button62" ion-button clear color="positive" large style="border-radius:0px 0px 0px 0px;" on-click="goToClasses()">\n\n    <ion-icon name="home"></ion-icon>\n\n  </button>\n\n  <button id="classSix-button63" ion-button clear color="positive" large style="border-radius:0px 0px 0px 0px;" on-click="goToCalanderClassSix()">\n\n    <ion-icon name="calendar"></ion-icon>\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\class-six\class-six.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ClassSixPage);
    return ClassSixPage;
    var ClassSixPage_1;
}());

//# sourceMappingURL=class-six.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_classes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calander_calander__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_six_class_six__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calander_class_six_calander_class_six__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__class_five_class_five__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calander_class_five_calander_class_five__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__class_four_class_four__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__calander_class_four_calander_class_four__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__class_three_class_three__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__calander_class_three_calander_class_three__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__class_two_class_two__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__calander_class_two_calander_class_two__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__class_one_class_one__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__calander_class_one_calander_class_one__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { CompletePage } from '../complete/complete';











var CompletePage = /** @class */ (function () {
    function CompletePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CompletePage_1 = CompletePage;
    CompletePage.prototype.goToClasses = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__classes_classes__["a" /* ClassesPage */]);
    };
    CompletePage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    CompletePage.prototype.goToCalander = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calander_calander__["a" /* CalanderPage */]);
    };
    CompletePage.prototype.goToClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__class_six_class_six__["a" /* ClassSixPage */]);
    };
    CompletePage.prototype.goToComplete = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(CompletePage_1);
    };
    CompletePage.prototype.goToCalanderClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__calander_class_six_calander_class_six__["a" /* CalanderClassSixPage */]);
    };
    CompletePage.prototype.goToClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__class_five_class_five__["a" /* ClassFivePage */]);
    };
    CompletePage.prototype.goToCalanderClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__calander_class_five_calander_class_five__["a" /* CalanderClassFivePage */]);
    };
    CompletePage.prototype.goToClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__class_four_class_four__["a" /* ClassFourPage */]);
    };
    CompletePage.prototype.goToCalanderClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__calander_class_four_calander_class_four__["a" /* CalanderClassFourPage */]);
    };
    CompletePage.prototype.goToClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__class_three_class_three__["a" /* ClassThreePage */]);
    };
    CompletePage.prototype.goToCalanderClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__calander_class_three_calander_class_three__["a" /* CalanderClassThreePage */]);
    };
    CompletePage.prototype.goToClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__class_two_class_two__["a" /* ClassTwoPage */]);
    };
    CompletePage.prototype.goToCalanderClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__calander_class_two_calander_class_two__["a" /* CalanderClassTwoPage */]);
    };
    CompletePage.prototype.goToClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__class_one_class_one__["a" /* ClassOnePage */]);
    };
    CompletePage.prototype.goToCalanderClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__calander_class_one_calander_class_one__["a" /* CalanderClassOnePage */]);
    };
    CompletePage = CompletePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complete',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\complete\complete.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Complete\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page10">\n\n  <div class="spacer" style="height:100px;" id="complete-spacer8"></div>\n\n  <button id="complete-button21" ion-button color="positive" block on-click="goToClasses()">\n\n    Finished\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\complete\complete.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CompletePage);
    return CompletePage;
    var CompletePage_1;
}());

//# sourceMappingURL=complete.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassFivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complete_complete__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_classes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calander_calander__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_six_class_six__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_four_class_four__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calander_class_four_calander_class_four__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_three_class_three__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__calander_class_three_calander_class_three__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__class_two_class_two__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__calander_class_two_calander_class_two__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__class_one_class_one__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__calander_class_one_calander_class_one__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__calander_class_five_calander_class_five__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { ClassFivePage } from '../class-five/class-five';









var ClassFivePage = /** @class */ (function () {
    function ClassFivePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ClassFivePage_1 = ClassFivePage;
    ClassFivePage.prototype.goToComplete = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__complete_complete__["a" /* CompletePage */]);
    };
    ClassFivePage.prototype.goToClasses = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__classes_classes__["a" /* ClassesPage */]);
    };
    ClassFivePage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ClassFivePage.prototype.goToCalander = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__calander_calander__["a" /* CalanderPage */]);
    };
    ClassFivePage.prototype.goToClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__class_six_class_six__["a" /* ClassSixPage */]);
    };
    ClassFivePage.prototype.goToCalanderClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__["a" /* CalanderClassSixPage */]);
    };
    ClassFivePage.prototype.goToClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(ClassFivePage_1);
    };
    ClassFivePage.prototype.goToClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__class_four_class_four__["a" /* ClassFourPage */]);
    };
    ClassFivePage.prototype.goToCalanderClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__calander_class_four_calander_class_four__["a" /* CalanderClassFourPage */]);
    };
    ClassFivePage.prototype.goToClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__class_three_class_three__["a" /* ClassThreePage */]);
    };
    ClassFivePage.prototype.goToCalanderClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__calander_class_three_calander_class_three__["a" /* CalanderClassThreePage */]);
    };
    ClassFivePage.prototype.goToClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__class_two_class_two__["a" /* ClassTwoPage */]);
    };
    ClassFivePage.prototype.goToCalanderClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__calander_class_two_calander_class_two__["a" /* CalanderClassTwoPage */]);
    };
    ClassFivePage.prototype.goToClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__class_one_class_one__["a" /* ClassOnePage */]);
    };
    ClassFivePage.prototype.goToCalanderClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__calander_class_one_calander_class_one__["a" /* CalanderClassOnePage */]);
    };
    ClassFivePage.prototype.goToCalanderClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__calander_class_five_calander_class_five__["a" /* CalanderClassFivePage */]);
    };
    ClassFivePage = ClassFivePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-class-five',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\class-five\class-five.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      ClassFive\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page15">\n\n  <div id="classFive-markdown12" style="text-align:center;" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Class not active\n\n    </p>\n\n  </div>\n\n  <div class="spacer" style="width:283px;height:126px;" id="classFive-spacer17"></div>\n\n  <button id="classFive-button52" ion-button color="positive" block on-click="goToComplete()">\n\n    Check in.\n\n  </button>\n\n  <button id="classFive-button53" ion-button color="positive" block on-click="goToClasses()">\n\n    Go Back\n\n  </button>\n\n  <div class="spacer" style="height:100px;" id="classFive-spacer18"></div>\n\n  <button id="classFive-button54" ion-button clear color="assertive" large style="border-radius:0px 0px 0px 0px;" on-click="goToLogin()">\n\n    <ion-icon name="log-out"></ion-icon>\n\n  </button>\n\n  <button id="classFive-button55" ion-button clear color="light" large style="border-radius:0px 0px 0px 0px;"></button>\n\n  <button id="classFive-button56" ion-button clear color="positive" large style="border-radius:0px 0px 0px 0px;" on-click="goToClasses()">\n\n    <ion-icon name="home"></ion-icon>\n\n  </button>\n\n  <button id="classFive-button57" ion-button clear color="positive" large style="border-radius:0px 0px 0px 0px;" on-click="goToCalanderClassFive()">\n\n    <ion-icon name="calendar"></ion-icon>\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\class-five\class-five.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ClassFivePage);
    return ClassFivePage;
    var ClassFivePage_1;
}());

//# sourceMappingURL=class-five.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassFourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complete_complete__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_classes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calander_calander__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_six_class_six__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_five_class_five__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calander_class_five_calander_class_five__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_three_class_three__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__calander_class_three_calander_class_three__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__class_two_class_two__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__calander_class_two_calander_class_two__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__class_one_class_one__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__calander_class_one_calander_class_one__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__calander_class_four_calander_class_four__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { ClassFourPage } from '../class-four/class-four';







var ClassFourPage = /** @class */ (function () {
    function ClassFourPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ClassFourPage_1 = ClassFourPage;
    ClassFourPage.prototype.goToComplete = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__complete_complete__["a" /* CompletePage */]);
    };
    ClassFourPage.prototype.goToClasses = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__classes_classes__["a" /* ClassesPage */]);
    };
    ClassFourPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ClassFourPage.prototype.goToCalander = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__calander_calander__["a" /* CalanderPage */]);
    };
    ClassFourPage.prototype.goToClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__class_six_class_six__["a" /* ClassSixPage */]);
    };
    ClassFourPage.prototype.goToCalanderClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__["a" /* CalanderClassSixPage */]);
    };
    ClassFourPage.prototype.goToClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__class_five_class_five__["a" /* ClassFivePage */]);
    };
    ClassFourPage.prototype.goToCalanderClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__calander_class_five_calander_class_five__["a" /* CalanderClassFivePage */]);
    };
    ClassFourPage.prototype.goToClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(ClassFourPage_1);
    };
    ClassFourPage.prototype.goToClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__class_three_class_three__["a" /* ClassThreePage */]);
    };
    ClassFourPage.prototype.goToCalanderClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__calander_class_three_calander_class_three__["a" /* CalanderClassThreePage */]);
    };
    ClassFourPage.prototype.goToClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__class_two_class_two__["a" /* ClassTwoPage */]);
    };
    ClassFourPage.prototype.goToCalanderClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__calander_class_two_calander_class_two__["a" /* CalanderClassTwoPage */]);
    };
    ClassFourPage.prototype.goToClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__class_one_class_one__["a" /* ClassOnePage */]);
    };
    ClassFourPage.prototype.goToCalanderClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__calander_class_one_calander_class_one__["a" /* CalanderClassOnePage */]);
    };
    ClassFourPage.prototype.goToCalanderClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__calander_class_four_calander_class_four__["a" /* CalanderClassFourPage */]);
    };
    ClassFourPage = ClassFourPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-class-four',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\class-four\class-four.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      ClassFour\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page14">\n\n  <div id="classFour-markdown11" style="text-align:center;" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Class not active\n\n    </p>\n\n  </div>\n\n  <div class="spacer" style="width:283px;height:126px;" id="classFour-spacer15"></div>\n\n  <button id="classFour-button46" ion-button color="positive" block on-click="goToComplete()">\n\n    Check in.\n\n  </button>\n\n  <button id="classFour-button47" ion-button color="positive" block on-click="goToClasses()">\n\n    Go Back\n\n  </button>\n\n  <div class="spacer" style="height:100px;" id="classFour-spacer16"></div>\n\n  <button id="classFour-button48" ion-button clear color="assertive" large style="border-radius:0px 0px 0px 0px;" on-click="goToLogin()">\n\n    <ion-icon name="log-out"></ion-icon>\n\n  </button>\n\n  <button id="classFour-button49" ion-button clear color="light" large style="border-radius:0px 0px 0px 0px;"></button>\n\n  <button id="classFour-button50" ion-button clear color="positive" large style="border-radius:0px 0px 0px 0px;" on-click="goToClasses()">\n\n    <ion-icon name="home"></ion-icon>\n\n  </button>\n\n  <button id="classFour-button51" ion-button clear color="positive" large style="border-radius:0px 0px 0px 0px;" on-click="goToCalanderClassFour()">\n\n    <ion-icon name="calendar"></ion-icon>\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\class-four\class-four.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ClassFourPage);
    return ClassFourPage;
    var ClassFourPage_1;
}());

//# sourceMappingURL=class-four.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complete_complete__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_classes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calander_calander__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_six_class_six__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_five_class_five__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calander_class_five_calander_class_five__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_four_class_four__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__calander_class_four_calander_class_four__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__class_two_class_two__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__calander_class_two_calander_class_two__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__class_one_class_one__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__calander_class_one_calander_class_one__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__calander_class_three_calander_class_three__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












//import { ClassThreePage } from '../class-three/class-three';





var ClassThreePage = /** @class */ (function () {
    function ClassThreePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ClassThreePage_1 = ClassThreePage;
    ClassThreePage.prototype.goToComplete = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__complete_complete__["a" /* CompletePage */]);
    };
    ClassThreePage.prototype.goToClasses = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__classes_classes__["a" /* ClassesPage */]);
    };
    ClassThreePage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ClassThreePage.prototype.goToCalander = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__calander_calander__["a" /* CalanderPage */]);
    };
    ClassThreePage.prototype.goToClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__class_six_class_six__["a" /* ClassSixPage */]);
    };
    ClassThreePage.prototype.goToCalanderClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__["a" /* CalanderClassSixPage */]);
    };
    ClassThreePage.prototype.goToClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__class_five_class_five__["a" /* ClassFivePage */]);
    };
    ClassThreePage.prototype.goToCalanderClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__calander_class_five_calander_class_five__["a" /* CalanderClassFivePage */]);
    };
    ClassThreePage.prototype.goToClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__class_four_class_four__["a" /* ClassFourPage */]);
    };
    ClassThreePage.prototype.goToCalanderClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__calander_class_four_calander_class_four__["a" /* CalanderClassFourPage */]);
    };
    ClassThreePage.prototype.goToClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(ClassThreePage_1);
    };
    ClassThreePage.prototype.goToClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__class_two_class_two__["a" /* ClassTwoPage */]);
    };
    ClassThreePage.prototype.goToCalanderClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__calander_class_two_calander_class_two__["a" /* CalanderClassTwoPage */]);
    };
    ClassThreePage.prototype.goToClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__class_one_class_one__["a" /* ClassOnePage */]);
    };
    ClassThreePage.prototype.goToCalanderClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__calander_class_one_calander_class_one__["a" /* CalanderClassOnePage */]);
    };
    ClassThreePage.prototype.goToCalanderClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__calander_class_three_calander_class_three__["a" /* CalanderClassThreePage */]);
    };
    ClassThreePage = ClassThreePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-class-three',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\class-three\class-three.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      ClassThree\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page13">\n\n  <div id="classThree-markdown10" style="text-align:center;" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Class not active\n\n    </p>\n\n  </div>\n\n  <div class="spacer" style="width:283px;height:126px;" id="classThree-spacer13"></div>\n\n  <button id="classThree-button40" ion-button color="positive" block on-click="goToComplete()">\n\n    Check in.\n\n  </button>\n\n  <button id="classThree-button41" ion-button color="positive" block on-click="goToClasses()">\n\n    Go Back\n\n  </button>\n\n  <div class="spacer" style="height:100px;" id="classThree-spacer14"></div>\n\n  <button id="classThree-button42" ion-button clear color="assertive" large style="border-radius:0px 0px 0px 0px;" on-click="goToLogin()">\n\n    <ion-icon name="log-out"></ion-icon>\n\n  </button>\n\n  <button id="classThree-button43" ion-button clear color="light" large style="border-radius:0px 0px 0px 0px;"></button>\n\n  <button id="classThree-button44" ion-button clear color="positive" large style="border-radius:0px 0px 0px 0px;" on-click="goToClasses()">\n\n    <ion-icon name="home"></ion-icon>\n\n  </button>\n\n  <button id="classThree-button45" ion-button clear color="positive" large style="border-radius:0px 0px 0px 0px;" on-click="goToCalanderClassThree()">\n\n    <ion-icon name="calendar"></ion-icon>\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\class-three\class-three.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ClassThreePage);
    return ClassThreePage;
    var ClassThreePage_1;
}());

//# sourceMappingURL=class-three.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complete_complete__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_classes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calander_calander__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_six_class_six__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_five_class_five__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calander_class_five_calander_class_five__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_four_class_four__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__calander_class_four_calander_class_four__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__class_three_class_three__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__calander_class_three_calander_class_three__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__class_one_class_one__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__calander_class_one_calander_class_one__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__calander_class_two_calander_class_two__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














// import { ClassTwoPage } from '../class-two/class-two';



var ClassTwoPage = /** @class */ (function () {
    function ClassTwoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ClassTwoPage_1 = ClassTwoPage;
    ClassTwoPage.prototype.goToComplete = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__complete_complete__["a" /* CompletePage */]);
    };
    ClassTwoPage.prototype.goToClasses = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__classes_classes__["a" /* ClassesPage */]);
    };
    ClassTwoPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ClassTwoPage.prototype.goToCalander = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__calander_calander__["a" /* CalanderPage */]);
    };
    ClassTwoPage.prototype.goToClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__class_six_class_six__["a" /* ClassSixPage */]);
    };
    ClassTwoPage.prototype.goToCalanderClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__["a" /* CalanderClassSixPage */]);
    };
    ClassTwoPage.prototype.goToClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__class_five_class_five__["a" /* ClassFivePage */]);
    };
    ClassTwoPage.prototype.goToCalanderClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__calander_class_five_calander_class_five__["a" /* CalanderClassFivePage */]);
    };
    ClassTwoPage.prototype.goToClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__class_four_class_four__["a" /* ClassFourPage */]);
    };
    ClassTwoPage.prototype.goToCalanderClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__calander_class_four_calander_class_four__["a" /* CalanderClassFourPage */]);
    };
    ClassTwoPage.prototype.goToClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__class_three_class_three__["a" /* ClassThreePage */]);
    };
    ClassTwoPage.prototype.goToCalanderClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__calander_class_three_calander_class_three__["a" /* CalanderClassThreePage */]);
    };
    ClassTwoPage.prototype.goToClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(ClassTwoPage_1);
    };
    ClassTwoPage.prototype.goToClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__class_one_class_one__["a" /* ClassOnePage */]);
    };
    ClassTwoPage.prototype.goToCalanderClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__calander_class_one_calander_class_one__["a" /* CalanderClassOnePage */]);
    };
    ClassTwoPage.prototype.goToCalanderClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__calander_class_two_calander_class_two__["a" /* CalanderClassTwoPage */]);
    };
    ClassTwoPage = ClassTwoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-class-two',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\class-two\class-two.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      ClassTwo\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page12">\n\n  <div id="classTwo-markdown9" style="text-align:center;" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Class not active\n\n    </p>\n\n  </div>\n\n  <div class="spacer" style="width:283px;height:126px;" id="classTwo-spacer11"></div>\n\n  <button id="classTwo-button34" ion-button color="positive" block on-click="goToComplete()">\n\n    Check in.\n\n  </button>\n\n  <button id="classTwo-button35" ion-button color="positive" block on-click="goToClasses()">\n\n    Go Back\n\n  </button>\n\n  <div class="spacer" style="height:100px;" id="classTwo-spacer12"></div>\n\n  <button id="classTwo-button36" ion-button clear color="assertive" large style="border-radius:0px 0px 0px 0px;" on-click="goToLogin()">\n\n    <ion-icon name="log-out"></ion-icon>\n\n  </button>\n\n  <button id="classTwo-button37" ion-button clear color="light" large style="border-radius:0px 0px 0px 0px;"></button>\n\n  <button id="classTwo-button38" ion-button clear color="positive" large style="border-radius:0px 0px 0px 0px;" on-click="goToClasses()">\n\n    <ion-icon name="home"></ion-icon>\n\n  </button>\n\n  <button id="classTwo-button39" ion-button clear color="positive" large style="border-radius:0px 0px 0px 0px;" on-click="goToCalanderClassTwo()">\n\n    <ion-icon name="calendar"></ion-icon>\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\class-two\class-two.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ClassTwoPage);
    return ClassTwoPage;
    var ClassTwoPage_1;
}());

//# sourceMappingURL=class-two.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complete_complete__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_classes__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calander_calander__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_six_class_six__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_five_class_five__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calander_class_five_calander_class_five__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_four_class_four__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__calander_class_four_calander_class_four__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__class_three_class_three__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__calander_class_three_calander_class_three__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__class_two_class_two__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__calander_class_two_calander_class_two__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__calander_class_one_calander_class_one__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















//import { ClassOnePage } from '../class-one/class-one';

var ClassOnePage = /** @class */ (function () {
    function ClassOnePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ClassOnePage_1 = ClassOnePage;
    ClassOnePage.prototype.goToComplete = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__complete_complete__["a" /* CompletePage */]);
    };
    ClassOnePage.prototype.goToClasses = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__classes_classes__["a" /* ClassesPage */]);
    };
    ClassOnePage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ClassOnePage.prototype.goToCalander = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__calander_calander__["a" /* CalanderPage */]);
    };
    ClassOnePage.prototype.goToClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__class_six_class_six__["a" /* ClassSixPage */]);
    };
    ClassOnePage.prototype.goToCalanderClassSix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__calander_class_six_calander_class_six__["a" /* CalanderClassSixPage */]);
    };
    ClassOnePage.prototype.goToClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__class_five_class_five__["a" /* ClassFivePage */]);
    };
    ClassOnePage.prototype.goToCalanderClassFive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__calander_class_five_calander_class_five__["a" /* CalanderClassFivePage */]);
    };
    ClassOnePage.prototype.goToClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__class_four_class_four__["a" /* ClassFourPage */]);
    };
    ClassOnePage.prototype.goToCalanderClassFour = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__calander_class_four_calander_class_four__["a" /* CalanderClassFourPage */]);
    };
    ClassOnePage.prototype.goToClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__class_three_class_three__["a" /* ClassThreePage */]);
    };
    ClassOnePage.prototype.goToCalanderClassThree = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__calander_class_three_calander_class_three__["a" /* CalanderClassThreePage */]);
    };
    ClassOnePage.prototype.goToClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__class_two_class_two__["a" /* ClassTwoPage */]);
    };
    ClassOnePage.prototype.goToCalanderClassTwo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__calander_class_two_calander_class_two__["a" /* CalanderClassTwoPage */]);
    };
    ClassOnePage.prototype.goToClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(ClassOnePage_1);
    };
    ClassOnePage.prototype.goToCalanderClassOne = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__calander_class_one_calander_class_one__["a" /* CalanderClassOnePage */]);
    };
    ClassOnePage = ClassOnePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-class-one',template:/*ion-inline-start:"C:\Users\yesol\Documents\AbsentAttender\src\pages\class-one\class-one.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      ClassOne\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n  <div id="classOne-markdown1" style="text-align:center;" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Class not active\n\n    </p>\n\n  </div>\n\n  <div class="spacer" style="width:283px;height:126px;" id="classOne-spacer2"></div>\n\n  <button id="classOne-button9" ion-button color="positive" block on-click="goToComplete()">\n\n    Check in.\n\n  </button>\n\n  <button id="classOne-button10" ion-button color="positive" block on-click="goToClasses()">\n\n    Go Back\n\n  </button>\n\n  <div class="spacer" style="height:100px;" id="classOne-spacer10"></div>\n\n  <button id="classOne-button30" ion-button clear color="assertive" large style="border-radius:0px 0px 0px 0px;" on-click="goToLogin()">\n\n    <ion-icon name="log-out"></ion-icon>\n\n  </button>\n\n  <button id="classOne-button31" ion-button clear color="stable" large style="border-radius:0px 0px 0px 0px;"></button>\n\n  <button id="classOne-button32" ion-button clear color="positive" large style="border-radius:0px 0px 0px 0px;" on-click="goToClasses()">\n\n    <ion-icon name="home"></ion-icon>\n\n  </button>\n\n  <button id="classOne-button33" ion-button clear color="positive" large style="border-radius:0px 0px 0px 0px;" on-click="goToCalanderClassOne()">\n\n    <ion-icon name="calendar"></ion-icon>\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yesol\Documents\AbsentAttender\src\pages\class-one\class-one.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ClassOnePage);
    return ClassOnePage;
    var ClassOnePage_1;
}());

//# sourceMappingURL=class-one.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map