webpackJsonp([67],{

/***/ 1944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModScormTocPageModule", function() { return AddonModScormTocPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toc__ = __webpack_require__(2083);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AddonModScormTocPageModule = /** @class */ (function () {
    function AddonModScormTocPageModule() {
    }
    AddonModScormTocPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__toc__["a" /* AddonModScormTocPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__toc__["a" /* AddonModScormTocPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModScormTocPageModule);
    return AddonModScormTocPageModule;
}());

//# sourceMappingURL=toc.module.js.map

/***/ }),

/***/ 2083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModScormTocPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_scorm__ = __webpack_require__(162);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Modal to display the TOC of a SCORM.
 */
var AddonModScormTocPage = /** @class */ (function () {
    function AddonModScormTocPage(navParams, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.toc = navParams.get('toc') || [];
        this.attemptToContinue = navParams.get('attemptToContinue');
        var mode = navParams.get('mode');
        this.selected = navParams.get('selected');
        this.isBrowse = mode === __WEBPACK_IMPORTED_MODULE_2__providers_scorm__["a" /* AddonModScormProvider */].MODEBROWSE;
        this.isReview = mode === __WEBPACK_IMPORTED_MODULE_2__providers_scorm__["a" /* AddonModScormProvider */].MODEREVIEW;
    }
    /**
     * Function called when a SCO is clicked.
     *
     * @param {any} sco Clicked SCO.
     */
    AddonModScormTocPage.prototype.loadSco = function (sco) {
        if (!sco.prereq || !sco.isvisible || !sco.launch) {
            return;
        }
        this.viewCtrl.dismiss(sco);
    };
    /**
     * Close modal.
     */
    AddonModScormTocPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddonModScormTocPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-scorm-toc',template:/*ion-inline-start:"E:\2019Projects\Kijani Ridge\Moodle Mobile\moodlemobile\moodlemobiledirectory\src\addon\mod\scorm\pages\toc\toc.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title>{{ \'addon.mod_scorm.toc\' | translate }}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <nav>\n\n        <ion-list>\n\n            <ion-item text-wrap *ngIf="attemptToContinue">\n\n                <p>{{ \'addon.mod_scorm.dataattemptshown\' | translate:{number: attemptToContinue} }}</p>\n\n            </ion-item>\n\n            <ion-item text-center *ngIf="isBrowse">\n\n                <p>{{ \'addon.mod_scorm.browsemode\' | translate }}</p>\n\n            </ion-item>\n\n            <ion-item text-center *ngIf="isReview">\n\n                <p>{{ \'addon.mod_scorm.reviewmode\' | translate }}</p>\n\n            </ion-item>\n\n\n\n            <!-- List of SCOs. -->\n\n            <ng-container *ngFor="let sco of toc">\n\n                <a *ngIf="sco.isvisible" ion-item text-wrap [ngClass]="\'core-padding-\' + sco.level" [class.core-nav-item-selected]="selected == sco.id" (click)="loadSco(sco)" [attr.disabled]="!sco.prereq || !sco.launch ? true : null" [attr.detail-none]="!sco.prereq || !sco.launch ? true : null">\n\n                    <img [src]="sco.image.url" [alt]="sco.image.description" />\n\n                    <span>{{ sco.title }}</span>\n\n                </a>\n\n            </ng-container>\n\n        </ion-list>\n\n    </nav>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\2019Projects\Kijani Ridge\Moodle Mobile\moodlemobile\moodlemobiledirectory\src\addon\mod\scorm\pages\toc\toc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */]])
    ], AddonModScormTocPage);
    return AddonModScormTocPage;
}());

//# sourceMappingURL=toc.js.map

/***/ })

});
//# sourceMappingURL=67.js.map