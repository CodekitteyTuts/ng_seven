import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
  <div class="alert alert-success">
    <strong>Success!</strong> Indicates a successful or positive action.
  </div>
  `,
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
