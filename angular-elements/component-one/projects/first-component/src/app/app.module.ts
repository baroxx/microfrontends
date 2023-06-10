import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CardComponentComponent } from './card-component/card-component.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule
  ],
  providers: [
    ButtonModule,
    CardModule
  ]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(AppComponent, {injector});
    customElements.define('app-one', webComponent);
  }

  ngDoBootstrap() {}
}
