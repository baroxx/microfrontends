import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input()
  detailsUrl: string = '';

  items: Item[] = [
    { name: 'first' },
    { name: 'second'}
  ]
}
