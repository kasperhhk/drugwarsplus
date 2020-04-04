import { OnInit } from '@angular/core';
import { UiService } from './ui.service';
import * as i0 from "@angular/core";
export declare class UiComponent implements OnInit {
    uiService: UiService;
    val: number;
    constructor(uiService: UiService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<UiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UiComponent, "dwpp-ui", never, {}, {}, never, never>;
}
