import { Component, Input, OnInit } from '@angular/core';
import { ItemEvent } from './item-events';
import { Item } from './item';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  homeRoute = 'http://localhost:4200'

}
