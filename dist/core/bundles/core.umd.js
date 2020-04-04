(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('core', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.core = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var CoreService = /** @class */ (function () {
        function CoreService() {
        }
        CoreService.prototype.testmeout = function () { return 16; };
        CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(); };
        CoreService.ɵprov = core["ɵɵdefineInjectable"]({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });
        return CoreService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CoreService, [{
            type: core.Injectable,
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
        CoreComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CoreComponent, selectors: [["lib-core"]], decls: 2, vars: 0, template: function CoreComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, " core works! ");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return CoreComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CoreComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-core',
                    template: "\n    <p>\n      core works!\n    </p>\n  ",
                    styles: [],
                }]
        }], function () { return []; }, null); })();

    var CoreModule = /** @class */ (function () {
        function CoreModule() {
        }
        CoreModule.ɵmod = core["ɵɵdefineNgModule"]({ type: CoreModule });
        CoreModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[]] });
        return CoreModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](CoreModule, { declarations: [CoreComponent], exports: [CoreComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CoreModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [CoreComponent],
                    imports: [],
                    exports: [CoreComponent]
                }]
        }], null, null); })();

    exports.CoreComponent = CoreComponent;
    exports.CoreModule = CoreModule;
    exports.CoreService = CoreService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=core.umd.js.map
