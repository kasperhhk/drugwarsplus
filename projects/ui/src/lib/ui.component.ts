import { Component, OnInit } from '@angular/core';
import { UiService } from './ui.service';

@Component({
  selector: 'dwpp-ui',
  template: `
    <p>
      ui works! {{val}}
    </p>
  `,
  styles: [
  ],
})
export class UiComponent implements OnInit {

  val: number;

  constructor(public uiService: UiService) {
    this.val = uiService.testme2(12);
   }

  ngOnInit(): void {
  }

}
