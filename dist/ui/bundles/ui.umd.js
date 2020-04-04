(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@dwpp/core')) :
    typeof define === 'function' && define.amd ? define('ui', ['exports', '@angular/core', '@dwpp/core'], factory) :
    (global = global || self, factory(global.ui = {}, global.ng.core, global.core$1));
}(this, (function (exports, core, core$1) { 'use strict';

    var UiService = /** @class */ (function () {
        function UiService(serv) {
            this.serv = serv;
        }
        UiService.prototype.testme2 = function (x) {
            return this.serv.testme() + x;
        };
        UiService.ɵfac = function UiService_Factory(t) { return new (t || UiService)(core["ɵɵinject"](core$1.CoreService)); };
        UiService.ɵprov = core["ɵɵdefineInjectable"]({ token: UiService, factory: UiService.ɵfac, providedIn: 'root' });
        return UiService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UiService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: core$1.CoreService }]; }, null); })();

    var UiComponent = /** @class */ (function () {
        function UiComponent(uiService) {
            this.uiService = uiService;
            this.val = uiService.testme2(12);
        }
        UiComponent.prototype.ngOnInit = function () {
        };
        UiComponent.ɵfac = function UiComponent_Factory(t) { return new (t || UiComponent)(core["ɵɵdirectiveInject"](UiService)); };
        UiComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: UiComponent, selectors: [["dwpp-ui"]], decls: 2, vars: 1, template: function UiComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"](" ui works! ", ctx.val, " ");
            } }, encapsulation: 2 });
        return UiComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UiComponent, [{
            type: core.Component,
            args: [{
                    selector: 'dwpp-ui',
                    template: "\n    <p>\n      ui works! {{val}}\n    </p>\n  ",
                    styles: [],
                }]
        }], function () { return [{ type: UiService }]; }, null); })();

    var UiModule = /** @class */ (function () {
        function UiModule() {
        }
        UiModule.ɵmod = core["ɵɵdefineNgModule"]({ type: UiModule });
        UiModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function UiModule_Factory(t) { return new (t || UiModule)(); }, providers: [core$1.CoreService, UiService], imports: [[]] });
        return UiModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](UiModule, { declarations: [UiComponent], exports: [UiComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UiModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [UiComponent],
                    imports: [],
                    providers: [core$1.CoreService, UiService],
                    exports: [UiComponent]
                }]
        }], null, null); })();

    exports.UiComponent = UiComponent;
    exports.UiModule = UiModule;
    exports.UiService = UiService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui.umd.js.map
