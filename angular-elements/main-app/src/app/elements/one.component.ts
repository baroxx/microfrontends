import { Component } from '@angular/core';

@Component({
  selector: 'app-elements-one',
  template: '<app-one [detailsUrl]="detailsRoute" class="card"></app-one>',
  styleUrls: ['./one.component.scss']
})
export class OneComponent {
  detailsRoute = 'http://localhost:4200/details'
}
