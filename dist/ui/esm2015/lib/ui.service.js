import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@dwpp/core";
export class UiService {
    constructor(serv) {
        this.serv = serv;
    }
    testme2(x) {
        return this.serv.testme() + x;
    }
}
UiService.ɵfac = function UiService_Factory(t) { return new (t || UiService)(i0.ɵɵinject(i1.CoreService)); };
UiService.ɵprov = i0.ɵɵdefineInjectable({ token: UiService, factory: UiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CoreService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VpLyIsInNvdXJjZXMiOlsibGliL3VpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTzNDLE1BQU0sT0FBTyxTQUFTO0lBRXBCLFlBQW1CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFBSSxDQUFDO0lBRXpDLE9BQU8sQ0FBQyxDQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDOztrRUFOVSxTQUFTO2lEQUFULFNBQVMsV0FBVCxTQUFTLG1CQUZSLE1BQU07a0RBRVAsU0FBUztjQUhyQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnQGR3cHAvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVpU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNlcnY6IENvcmVTZXJ2aWNlKSB7IH1cblxuICB0ZXN0bWUyKHg6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnNlcnYudGVzdG1lKCkgKyB4O1xuICB9XG59XG4iXX0=