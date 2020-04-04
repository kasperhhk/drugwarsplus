import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';

import { CoreService } from '@dwpp/core';
import { UiService } from './ui.service';

@NgModule({
  declarations: [UiComponent],
  imports: [
  ],
  providers: [CoreService, UiService],
  exports: [UiComponent]
})
export class UiModule { }
