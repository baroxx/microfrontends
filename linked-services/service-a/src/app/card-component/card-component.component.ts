import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent {
  
  @Input()
  itemName: string = '';

  @Input()
  detailsUrl: string = '';

  public goTo(): void {
    window.location.href = this.detailsUrl + '/' + this.itemName;
  }
}
