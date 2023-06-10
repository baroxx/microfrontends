import { Component, Input, OnInit } from '@angular/core';
import { ItemEvent } from './item-events';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input()
  name: string = '';

  items: Item[] = [];

  constructor() {
    this.items = [ 
      { 
        name: 'first', 
        events: [
          { status: 'Created', icon: 'pi pi-shopping-cart', color: '#9C27B0' } ,
          { status: 'Reviewed', icon: 'pi pi-cog', color: '#673AB7' },
          { status: 'Accepted', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        ]
      },
      { 
        name: 'second', 
        events: [
          { status: 'Created', icon: 'pi pi-shopping-cart', color: '#9C27B0' } ,
          { status: 'Reviewed', icon: 'pi pi-cog', color: '#673AB7' }
        ]
      }
    ];
  }

  public get events(): ItemEvent[] {
    return this.items.filter((item) => item.name === this.name).map((value) => value.events)[0];
  }

}
