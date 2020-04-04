import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

var CoreService = /** @class */ (function () {
    function CoreService() {
    }
    CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(); };
    CoreService.ɵprov = ɵɵdefineInjectable({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });
    return CoreService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CoreService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var CoreComponent = /** @class */ (function () {
    function CoreComponent() {
    }
    CoreComponent.prototype.ngOnInit = function () {
    };
    CoreComponent.ɵfac = function CoreComponent_Factory(t) { return new (t || CoreComponent)(); };
    CoreComponent.ɵcmp = ɵɵdefineComponent({ type: CoreComponent, selectors: [["dwpp-core"]], decls: 2, vars: 0, template: function CoreComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " core works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return CoreComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CoreComponent, [{
        type: Component,
        args: [{
                selector: 'dwpp-core',
                template: "\n    <p>\n      core works!\n    </p>\n  ",
                styles: [],
            }]
    }], function () { return []; }, null); })();

var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.ɵmod = ɵɵdefineNgModule({ type: CoreModule });
    CoreModule.ɵinj = ɵɵdefineInjector({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[]] });
    return CoreModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CoreModule, { declarations: [CoreComponent], exports: [CoreComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CoreModule, [{
        type: NgModule,
        args: [{
                declarations: [CoreComponent],
                imports: [],
                exports: [CoreComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CoreComponent, CoreModule, CoreService };
//# sourceMappingURL=core.js.map
