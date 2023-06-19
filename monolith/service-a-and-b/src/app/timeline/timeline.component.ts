import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemEvent } from '../item-events';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  name: string = '';

  items: Item[] = [];

  constructor(private route: ActivatedRoute) {
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

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.name = params['name']);
  }

  public get events(): ItemEvent[] {
    let itemEvents = this.items.filter((item) => item.name === this.name).map((value) => value.events)[0];
    if (!itemEvents) {
      window.location.href = 'error';
    }
    return itemEvents;
  }
}
