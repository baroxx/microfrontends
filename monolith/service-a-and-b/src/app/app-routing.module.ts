import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'details/:name', component: TimelineComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }