import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./ui.service";
export class UiComponent {
    constructor(uiService) {
        this.uiService = uiService;
        this.val = uiService.testme2(12);
    }
    ngOnInit() {
    }
}
UiComponent.ɵfac = function UiComponent_Factory(t) { return new (t || UiComponent)(i0.ɵɵdirectiveInject(i1.UiService)); };
UiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UiComponent, selectors: [["dwpp-ui"]], decls: 2, vars: 1, template: function UiComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ui works! ", ctx.val, " ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UiComponent, [{
        type: Component,
        args: [{
                selector: 'dwpp-ui',
                template: `
    <p>
      ui works! {{val}}
    </p>
  `,
                styles: [],
            }]
    }], function () { return [{ type: i1.UiService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWkvIiwic291cmNlcyI6WyJsaWIvdWkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQWFsRCxNQUFNLE9BQU8sV0FBVztJQUl0QixZQUFtQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUYsUUFBUTtJQUNSLENBQUM7O3NFQVRVLFdBQVc7Z0RBQVgsV0FBVztRQVBwQix5QkFDRTtRQUFBLFlBQ0Y7UUFBQSxpQkFBSTs7UUFERixlQUNGO1FBREUsa0RBQ0Y7O2tEQUtTLFdBQVc7Y0FWdkIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxNQUFNLEVBQUUsRUFDUDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpU2VydmljZSB9IGZyb20gJy4vdWkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R3cHAtdWknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgdWkgd29ya3MhIHt7dmFsfX1cbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdmFsOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHVpU2VydmljZTogVWlTZXJ2aWNlKSB7XG4gICAgdGhpcy52YWwgPSB1aVNlcnZpY2UudGVzdG1lMigxMik7XG4gICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19