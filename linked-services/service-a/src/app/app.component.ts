import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  homeRoute = 'http://localhost:4200'
  detailsUrl: string = 'http://localhost:4300/details';

  items: Item[] = [
    { name: 'first' },
    { name: 'second'},
    { name: 'unknown'}
  ]
}
