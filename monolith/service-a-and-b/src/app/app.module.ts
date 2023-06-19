import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

import { HeaderComponent } from './header/header.component';
import { CardComponentComponent } from './home/card-component/card-component.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TimelineModule } from 'primeng/timeline';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardComponentComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    TimelineModule
  ],
  providers: [
    ButtonModule,
    CardModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
