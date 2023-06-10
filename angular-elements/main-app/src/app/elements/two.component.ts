import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-elements-two',
  template: '<app-two [name]="name"></app-two>',
})
export class TwoComponent implements OnInit {

  name: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.name = params['name']);
  }

}
