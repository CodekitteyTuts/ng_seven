import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <div class="alert alert-warning">
    <strong>Warning!</strong> Indicates a warning that might need attention.
  </div>
  `,
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
