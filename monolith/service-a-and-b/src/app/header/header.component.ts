import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  @Input()
  homeRoute: string = '';

  ngOnInit() {
    this.items = [
        {
          label: 'Home',
          icon: 'pi pi-pw pi-home',
          command: (event) => { this.goHome(); } 
        }
    ];
  }

  goHome() {
    window.location.href = this.homeRoute;
  }
}
