import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input
      #inputElementRef
      [value]="title"
      (keyup.enter)="submitValue($event.target.value)"
    />

    <button (click)="submitValue(inputElementRef.value)">Save</button>
  `,
})
export class InputButtonUnitComponent implements OnInit {
  // tslint:disable-next-line:no-output-native
  @Output() submit = new EventEmitter<string>();
  title = 'Hello World';
  constructor() {}

  // tslint:disable-next-line:typedef
  ngOnInit() {}

  // tslint:disable-next-line:typedef
  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }

  // tslint:disable-next-line:typedef
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
