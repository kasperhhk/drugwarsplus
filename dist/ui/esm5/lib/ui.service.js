import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@dwpp/core";
var UiService = /** @class */ (function () {
    function UiService(serv) {
        this.serv = serv;
    }
    UiService.prototype.testme2 = function (x) {
        return this.serv.testme() + x;
    };
    UiService.ɵfac = function UiService_Factory(t) { return new (t || UiService)(i0.ɵɵinject(i1.CoreService)); };
    UiService.ɵprov = i0.ɵɵdefineInjectable({ token: UiService, factory: UiService.ɵfac, providedIn: 'root' });
    return UiService;
}());
export { UiService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CoreService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VpLyIsInNvdXJjZXMiOlsibGliL3VpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSTNDO0lBS0UsbUJBQW1CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFBSSxDQUFDO0lBRXpDLDJCQUFPLEdBQVAsVUFBUSxDQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO3NFQU5VLFNBQVM7cURBQVQsU0FBUyxXQUFULFNBQVMsbUJBRlIsTUFBTTtvQkFMcEI7Q0FjQyxBQVZELElBVUM7U0FQWSxTQUFTO2tEQUFULFNBQVM7Y0FIckIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb3JlU2VydmljZSB9IGZyb20gJ0Bkd3BwL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVaVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2OiBDb3JlU2VydmljZSkgeyB9XG5cbiAgdGVzdG1lMih4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2LnRlc3RtZSgpICsgeDtcbiAgfVxufVxuIl19