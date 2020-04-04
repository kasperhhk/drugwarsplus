import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { CoreService } from '@dwpp/core';

var UiService = /** @class */ (function () {
    function UiService(serv) {
        this.serv = serv;
    }
    UiService.prototype.testme2 = function (x) {
        return this.serv.testme() + x;
    };
    UiService.ɵfac = function UiService_Factory(t) { return new (t || UiService)(ɵɵinject(CoreService)); };
    UiService.ɵprov = ɵɵdefineInjectable({ token: UiService, factory: UiService.ɵfac, providedIn: 'root' });
    return UiService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: CoreService }]; }, null); })();

var UiComponent = /** @class */ (function () {
    function UiComponent(uiService) {
        this.uiService = uiService;
        this.val = uiService.testme2(12);
    }
    UiComponent.prototype.ngOnInit = function () {
    };
    UiComponent.ɵfac = function UiComponent_Factory(t) { return new (t || UiComponent)(ɵɵdirectiveInject(UiService)); };
    UiComponent.ɵcmp = ɵɵdefineComponent({ type: UiComponent, selectors: [["dwpp-ui"]], decls: 2, vars: 1, template: function UiComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵtextInterpolate1(" ui works! ", ctx.val, " ");
        } }, encapsulation: 2 });
    return UiComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UiComponent, [{
        type: Component,
        args: [{
                selector: 'dwpp-ui',
                template: "\n    <p>\n      ui works! {{val}}\n    </p>\n  ",
                styles: [],
            }]
    }], function () { return [{ type: UiService }]; }, null); })();

var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule.ɵmod = ɵɵdefineNgModule({ type: UiModule });
    UiModule.ɵinj = ɵɵdefineInjector({ factory: function UiModule_Factory(t) { return new (t || UiModule)(); }, providers: [CoreService, UiService], imports: [[]] });
    return UiModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UiModule, { declarations: [UiComponent], exports: [UiComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UiModule, [{
        type: NgModule,
        args: [{
                declarations: [UiComponent],
                imports: [],
                providers: [CoreService, UiService],
                exports: [UiComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { UiComponent, UiModule, UiService };
//# sourceMappingURL=ui.js.map
