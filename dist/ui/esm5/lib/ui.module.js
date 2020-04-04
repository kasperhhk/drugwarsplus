import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { CoreService } from '@dwpp/core';
import { UiService } from './ui.service';
import * as i0 from "@angular/core";
var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule.ɵmod = i0.ɵɵdefineNgModule({ type: UiModule });
    UiModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UiModule_Factory(t) { return new (t || UiModule)(); }, providers: [CoreService, UiService], imports: [[]] });
    return UiModule;
}());
export { UiModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UiModule, { declarations: [UiComponent], exports: [UiComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UiModule, [{
        type: NgModule,
        args: [{
                declarations: [UiComponent],
                imports: [],
                providers: [CoreService, UiService],
                exports: [UiComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWkvIiwic291cmNlcyI6WyJsaWIvdWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFekM7SUFBQTtLQU95QjtnREFBWixRQUFRO21HQUFSLFFBQVEsbUJBSFIsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLFlBRjFCLEVBQ1I7bUJBVEg7Q0FheUIsQUFQekIsSUFPeUI7U0FBWixRQUFRO3dGQUFSLFFBQVEsbUJBTkosV0FBVyxhQUloQixXQUFXO2tEQUVWLFFBQVE7Y0FQcEIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDM0IsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpQ29tcG9uZW50IH0gZnJvbSAnLi91aS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb3JlU2VydmljZSB9IGZyb20gJ0Bkd3BwL2NvcmUnO1xuaW1wb3J0IHsgVWlTZXJ2aWNlIH0gZnJvbSAnLi91aS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVWlDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gIF0sXG4gIHByb3ZpZGVyczogW0NvcmVTZXJ2aWNlLCBVaVNlcnZpY2VdLFxuICBleHBvcnRzOiBbVWlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFVpTW9kdWxlIHsgfVxuIl19