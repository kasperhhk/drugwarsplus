import { Injectable } from '@angular/core';

import { CoreService } from '@dwpp/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(public serv: CoreService) { }

  testme2(x: number) {
    return this.serv.testme() + x;
  }
}
