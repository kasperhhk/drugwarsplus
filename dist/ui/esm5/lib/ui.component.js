import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./ui.service";
var UiComponent = /** @class */ (function () {
    function UiComponent(uiService) {
        this.uiService = uiService;
        this.val = uiService.testme2(12);
    }
    UiComponent.prototype.ngOnInit = function () {
    };
    UiComponent.ɵfac = function UiComponent_Factory(t) { return new (t || UiComponent)(i0.ɵɵdirectiveInject(i1.UiService)); };
    UiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UiComponent, selectors: [["dwpp-ui"]], decls: 2, vars: 1, template: function UiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ui works! ", ctx.val, " ");
        } }, encapsulation: 2 });
    return UiComponent;
}());
export { UiComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UiComponent, [{
        type: Component,
        args: [{
                selector: 'dwpp-ui',
                template: "\n    <p>\n      ui works! {{val}}\n    </p>\n  ",
                styles: [],
            }]
    }], function () { return [{ type: i1.UiService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWkvIiwic291cmNlcyI6WyJsaWIvdWkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQUdsRDtJQWNFLHFCQUFtQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUYsOEJBQVEsR0FBUjtJQUNBLENBQUM7MEVBVFUsV0FBVztvREFBWCxXQUFXO1lBUHBCLHlCQUNFO1lBQUEsWUFDRjtZQUFBLGlCQUFJOztZQURGLGVBQ0Y7WUFERSxrREFDRjs7c0JBUko7Q0F3QkMsQUFyQkQsSUFxQkM7U0FYWSxXQUFXO2tEQUFYLFdBQVc7Y0FWdkIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsa0RBSVQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQ1A7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVaVNlcnZpY2UgfSBmcm9tICcuL3VpLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkd3BwLXVpJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHVpIHdvcmtzISB7e3ZhbH19XG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVWlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHZhbDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1aVNlcnZpY2U6IFVpU2VydmljZSkge1xuICAgIHRoaXMudmFsID0gdWlTZXJ2aWNlLnRlc3RtZTIoMTIpO1xuICAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==