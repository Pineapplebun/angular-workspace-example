import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-buttons',
  template: `
    <button (click)="showText.emit()">
      Click Me!
    </button>
  `,
  styles: []
})
export class ButtonsComponent {

  @Output() showText = new EventEmitter();

  constructor() { }
}
