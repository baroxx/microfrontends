import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HeaderComponent';

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
