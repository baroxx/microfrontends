import { Component } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  detailsUrl: string = '/details';

  items: Item[] = [
    { name: 'first', events: [] },
    { name: 'second', events: [] },
    { name: 'unknown', events: [] }
  ]
}
